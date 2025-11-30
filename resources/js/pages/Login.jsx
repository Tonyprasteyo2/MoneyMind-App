import { useState } from "react";
import { FaMagnifyingGlassDollar, FaGoogle } from "react-icons/fa6";
import { BiSolidReport } from "react-icons/bi";
import { AiOutlineTransaction } from "react-icons/ai";
import { signInWithPopup } from "firebase/auth";
import { auth, provider, db, permissionToken } from "../service/firebase";
import { doc, setDoc } from "firebase/firestore";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { API_URL } from "../service/firebase";

export default function Login() {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    const handleProsesLogin = async () => {
        try {
            setLoading(true); 

            const result = await signInWithPopup(auth, provider);
            const user = result.user;

            const token = await user.getIdToken();

            localStorage.setItem(
                "user",
                JSON.stringify({
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                })
            );

            await Promise.all([
                setDoc(doc(db, "users", user.uid), {
                    name: user.displayName,
                    email: user.email,
                    lastLogin: new Date(),
                }),
                axios.post(
                    `${API_URL}/auth/login`,
                    {
                        email: user.email,
                        name: user.displayName,
                    },
                    {
                        headers: { Authorization: `Bearer ${token}` },
                    }
                ),
            ]);

            permissionToken(user);

            navigate("/dasboard");
        } catch (error) {
            console.error(error);
            setLoading(false);
        }
    };

    return (
        <>
            {loading && (
                <div className="fixed inset-0 bg-white/80 backdrop-blur-sm z-50 flex flex-col items-center justify-center animate-fadeIn">
                    <div className="relative w-20 h-20">
                        <div className="absolute inset-0 border-4 border-blue-300 rounded-full animate-ping"></div>
                        <div className="absolute inset-2 border-4 border-blue-500 rounded-full animate-spin border-t-transparent"></div>
                    </div>
                    <p className="mt-6 text-gray-700 text-lg font-semibold animate-pulse">
                        Sedang memproses login...
                    </p>
                </div>
            )}
            <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
                <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

                    <div className="flex justify-center mb-6">
                        <div className="bg-yellow-400 p-4 rounded-full shadow-md">
                            <span className="text-3xl text-white">
                                <FaMagnifyingGlassDollar />
                            </span>
                        </div>
                    </div>

                    <h1 className="text-2xl font-bold mb-2">Selamat Datang</h1>
                    <p className="text-gray-600 mb-5">
                        Silakan masuk untuk mengakses aplikasi money tracker anda
                    </p>
                    <button
                        className="flex items-center justify-center gap-2 w-full border border-gray-300 py-4 rounded-lg shadow-sm 
                        hover:bg-gray-50 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                        onClick={handleProsesLogin}
                        disabled={loading}
                    >
                        {loading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                                <span>Memproses...</span>
                            </>
                        ) : (
                            <>
                                <FaGoogle className="text-xl text-lime-600" />
                                <span className="font-medium">Masuk dengan Google</span>
                            </>
                        )}
                    </button>

                    <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div className="flex flex-col items-center">
                            <BiSolidReport className="w-8 h-8 mb-2 text-lime-500" />
                            <span>
                                Laporan <br /> Real-time
                            </span>
                        </div>

                        <div className="flex flex-col items-center">
                            <AiOutlineTransaction className="w-8 h-8 mb-2 text-yellow-300" />
                            <span>
                                Kelola Transaksi <br /> Real-time
                            </span>
                        </div>
                    </div>

                </div>
            </div>
            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0 }
                    to { opacity: 1 }
                }
                .animate-fadeIn {
                    animation: fadeIn .3s ease-in-out;
                }
            `}</style>
        </>
    );
}
