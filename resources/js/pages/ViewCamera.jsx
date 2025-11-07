import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { FaCamera } from "react-icons/fa";
import Swal from "sweetalert2";
import { BE_OCR } from "../service/firebase";
import { userAuth } from "../components/AuthPrivate";

export const ViewCamera = ({
    setResultOcr,
    setTipeMode,
    setPreviewImage,
    setProsesLoading,
}) => {
    const videoCam = useRef(null);
    const [strem, setStrem] = useState(null);
    const [ready, setReady] = useState(false);
    const [loading, setLoading] = useState(false);
    const { user } = userAuth();
    let media;
    const mulaiCamera = async () => {
        try {
            media = await navigator.mediaDevices.getUserMedia({
                video: {
                    facingMode: {
                        ideal: "environment",
                    },
                },
                audio: false,
            });
            if (videoCam.current) {
                videoCam.current.srcObject = media;
                setStrem(media);
                setReady(true);
            }
        } catch (error) {
            console.log(error);

            Swal.fire({
                icon: "info",
                showConfirmButton: false,
                timer: 1500,
                text: "kamera tidak bisa di akses,harap cek izin nya",
            });
        }
    };

    useEffect(() => {
        mulaiCamera();
        return () => {
            if (media) media.getTracks().forEach((t) => t.stop());
        };
    }, []);
    const takeFoto = async () => {
        if (!ready || !videoCam.current) {
            Swal.fire({
                icon: "info",
                showConfirmButton: false,
                timer: 1500,
                text: "kamera nya belum siap :(",
            });
            return;
        }
        setLoading(true);
        setProsesLoading(true);
        try {
            const video = videoCam.current;
            if (video.videoWidth === 0 || video.videoHeight === 0) {
                await new Promise((resolve) => {
                    video.onloadedmetadata = () => resolve();
                });
            }
            const canvas = document.createElement("canvas");
            canvas.width = video.videoWidth;
            canvas.height = video.videoHeight;
            canvas
                .getContext("2d")
                .drawImage(video, 0, 0, canvas.width, canvas.height);
            const urlImage = canvas.toDataURL("image/jpeg");
            setPreviewImage(urlImage);
            const token = await user.getIdToken();
            const result = await axios.post(
                BE_OCR,
                {
                    image: urlImage,
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (result.data) {
                setResultOcr(result.data);
            }
            if (strem) strem.getTracks().forEach((t) => t.stop());
            setTimeout(() => {
                setTipeMode(null);
            }, 200);
        } catch (error) {
            Swal.fire({
                icon: "warning",
                showConfirmButton: false,
                text: error.message,
            });
        } finally {
            setLoading(false);
            setProsesLoading(false);
        }
    };

    return (
        <>
            <div className="flex flex-col items-center p-2">
                <FaCamera className="size-7 mb-2" />
                <h2 className="text-xl font-semibold mb-2">Ambil Foto Struk</h2>
                <video
                    ref={videoCam}
                    autoPlay
                    playsInline
                    muted
                    className="rounded-xl shadow-md w-full max-w-md bg-black size-75"
                />
                {!ready && (
                    <p className="text-gray-500 text-xl mt-2 animate-pulse">
                        Aktifkan kamera
                    </p>
                )}
                <div className="flex gap-3 mt-4">
                    <button
                        className={`px-4 py-2 rounded-lg text-white transition ${
                            loading
                                ? "bg-gray-400 cursor-not-allowed"
                                : "bg-green-700"
                        }`}
                        onClick={takeFoto}
                    >
                        {loading ? "membaca file" : "Ambil Foto"}
                    </button>
                    <button
                        className="bg-red-500 rounded-lg hover:bg-red-600 transition text-white px-4 py-2"
                        onClick={() => {
                            if (strem)
                                strem.getTracks().forEach((t) => t.stop());
                            setTipeMode(null);
                        }}
                    >
                        Batal
                    </button>
                </div>
                {loading && (
                    <div className="mt-4 text-indigo-600 text-sm animate-pulse">
                        Harap menunggu sedang membaca file ya...
                    </div>
                )}
            </div>
        </>
    );
};
