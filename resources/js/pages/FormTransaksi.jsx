import { useContext, useEffect, useState } from "react";
import { userAuth } from "../components/AuthPrivate";
import { TransaksiUser } from "../components/TransaksiList";
import { API_URL, BE_OCR } from "../service/firebase";
import { KategoriList } from "../components/KategoriList";
import {
    FaWallet,
    FaArrowDown,
    FaArrowUp,
    FaCar,
    FaUtensils,
    FaMoneyBill,
    FaDonate,
    FaGift,
    FaRegChartBar,
    FaEdit,
    FaCamera,
    FaUpload,
} from "react-icons/fa";
import { LuWalletCards } from "react-icons/lu";
import { X } from "lucide-react";
import axios from "axios";
import { ViewCamera } from "../pages/ViewCamera";
import { motion, AnimatePresence } from "framer-motion";
import { formatRupiah } from "./Dasboard";
import Swal from "sweetalert2";
import Modal from "../components/Modal";
export const imageBase64 = (data) => {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => resolve(reader.result);
        reader.onerror = reject;
        reader.readAsDataURL(data);
    });
};
export const icons = [
    { name: "transportasi", icon: FaCar, color: "text-blue-500" },
    { name: "makan", icon: FaUtensils, color: "text-yellow-500" },
    { name: "bill", icon: FaMoneyBill, color: "text-green-500" },
    { name: "tabungan", icon: FaGift, color: "text-pink-500" },
    { name: "donasi", icon: FaDonate, color: "text-purple-500" },
    { name: "lain-lain", icon: LuWalletCards, color: "text-pink-500" },
];
const FormTransaksi = () => {
    const [dispayValue, setDisplayValue] = useState("");
    const [jumlah, setJumlah] = useState(0);
    const [editMode, setEditMode] = useState(false);
    const [selectedTransaksi, setSelectedTransaksi] = useState(null);
    const [modalOpen, setModalOpen] = useState(false);
    const [mode, setMode] = useState("manual");
    const [previewImage, setPreviewImage] = useState(null);
    const [prosesLoading, setProsesLoading] = useState(false);
    const [tipeMode, setTipeMode] = useState(null);
    const [kategori, setKategori] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [animatedList, setAnimatedList] = useState([]);
    const { getTransaksi, listTransaksi } = TransaksiUser();
    const { user } = userAuth();
    const {
        kategoriBaru,
        setKategoriBaru,
        kategoriAll,
        addKategori,
        selectedIcon,
        setSelectedIcon,
        showPopup,
        setShowPopup,
    } = useContext(KategoriList);
    const [resultOcr, setResultOcr] = useState(null);
    // const [tesCamera, setTesCamera] = useState(null);
    const compressBase64 = (base64Str, maxWidth = 1200, quality = 0.6) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.src = base64Str;
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                let ratio = img.width / img.height;
                canvas.width = maxWidth;
                canvas.height = maxWidth / ratio;
                ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                const hasil = canvas.toDataURL("image/jpeg", quality);
                resolve(hasil);
            };
        });
    };

    const angkaNumber = (e) => {
        let valueInput = e.target.value.replace(/\D/g, "");
        if (!valueInput) {
            setDisplayValue("");
            setJumlah(0);
            return;
        }
        const formatRupiah = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(valueInput);
        setDisplayValue(formatRupiah);
        setJumlah(parseInt(valueInput, 10));
    };
    const tambahTransaksi = async (e) => {
        e.preventDefault();
        const token = await user.getIdToken();
        try {
            const dataForm = new FormData(e.target);
            const data = {
                jenis_transaksi: dataForm.get("jenis_transaksi"),
                jumlah: jumlah,
                deskripsi: dataForm.get("note"),
                kategori: dataForm.get("kategori"),
            };
            const res = await fetch(`${API_URL}/tambah-transaksi`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify(data),
            });
            if (!res.ok) {
                Swal.fire({
                    icon: "error",
                    text: "gagal simpan",
                    showConfirmButton: false,
                    timer: 1500,
                });
                return;
            }
            const result = await res.json();
            if (result.kode === 200) {
                Swal.fire({
                    icon: "success",
                    title: "Berhasil",
                    text: "Transaksi berhasil ditambahkan!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setJumlah(0);
                setDisplayValue("");
                setKategori("");
                getTransaksi();
                setProsesLoading(true);
                setResultOcr(null);
                setPreviewImage(null);
                e.target.reset();
            } else if (result.kode === 302) {
                Swal.fire({
                    icon: "info",
                    text: result.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        } catch (error) {
            console.log(error.response?.data);
        }
    };
    const showModalCheckBox = (transaksi) => {
        setSelectedTransaksi(transaksi);
        setModalOpen(true);
    };
    const prosesOcr = async (data) => {
        if (!data) {
            Swal.fire({
                icon: "info",
                timer: 1500,
                showConfirmButton: false,
                text: "Upload foto struk dulu",
            });
            return;
        }

        const token = await user.getIdToken();
        setProsesLoading(true);
        setResultOcr(null);

        try {
            const result = await axios.post(
                `${BE_OCR}/ocr-image`,
                { image: data },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            if (result.data.status === "berhasil") {
                setResultOcr(result.data);
                setProsesLoading(false);
            } else {
                Swal.fire({
                    icon: "info",
                    text: result.data.message,
                    showConfirmButton: false,
                    timer: 1300,
                });
            }
        } catch (error) {
            console.log(error);
            setProsesLoading(false);
        }
    };

    const handleFileChange = async (e) => {
        e.preventDefault();
        const file = e.target.files[0];

        let ekstension = file.name
            .substring(file.name.lastIndexOf(".") + 1)
            .toLowerCase();

        if (!["jpg", "png", "jpeg"].includes(ekstension)) {
            Swal.fire({
                icon: "warning",
                timer: 1500,
                title: "Gagal Upload",
                text: "Harap upload foto dengan format benar",
                showConfirmButton: false,
            });
            return;
        }
        const fotoImage = await imageBase64(file);
        const compressed = await compressBase64(fotoImage);
        setPreviewImage(compressed);
        await prosesOcr(compressed);
    };

    const gantiImage = () => {
        setPreviewImage(null);
        setResultOcr(null);
    };
    const [dataForm, setDataForm] = useState({
        deskripsi: resultOcr?.deskripsi || "",
        kategori: resultOcr?.kategori || "",
        jenis: resultOcr?.jenis || "",
    });
    useEffect(() => {
        if (resultOcr?.total) {
            const angka = Number(String(resultOcr.total).replace(/[^\d]/g, ""));
            const formatRupiah = new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
                minimumFractionDigits: 0,
            })
                .format(angka)
                .replace("Rp", "Rp.");
            setDisplayValue(formatRupiah);
            setJumlah(angka);
        }
        setDataForm({
            deskripsi: resultOcr?.deskripsi || "",
            kategori: resultOcr?.kategori || "",
            jenis: resultOcr?.jenis || "",
        });
    }, [resultOcr]);
    useEffect(() => {
        setIsLoading(true);
        const timeout = setTimeout(() => {
            setAnimatedList(listTransaksi);
            setIsLoading(false);
        }, 600); // simulasi delay animasi loading

        return () => clearTimeout(timeout);
    }, [listTransaksi]);
    return (
        <>
            <div className="p-1 container mx-auto w-full">
                <div>
                    <form onSubmit={(e) => tambahTransaksi(e)}>
                        <div className="bg-white shadow-md rounded-xl p-3 sm:p-6">
                            <h2 className="text-lg font-semibold mb-2">
                                Tambah Transaksi
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => setMode("manual")}
                                    className={`flex flex-col items-center justify-center border-rounded-xl p-2 transition-all cursor-pointer ${
                                        mode === "manual"
                                            ? "bg-blue-600 text-white shadow-lg"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    <FaEdit className="text-2xl mb-2" />
                                    <span className="font-medium">
                                        Input Manual
                                    </span>
                                    <p className="text-sm opacity-80">
                                        Masukan data transaksi secara manual
                                    </p>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setMode("ocr")}
                                    className={`flex flex-col items-center justify-center border-rounded-xl p-2 transition-all cursor-pointer ${
                                        mode === "ocr"
                                            ? "bg-blue-600 text-white shadow-lg"
                                            : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                                    }`}
                                >
                                    <FaEdit className="text-2xl mb-2" />
                                    <span className="font-medium">
                                        Scan Foto{" "}
                                    </span>
                                    <p className="text-sm opacity-80">
                                        Scan atau foto struk transaksi
                                    </p>
                                </button>
                            </div>
                            {mode === "manual" && (
                                <div className="animate-fadeIn mt-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                                Jenis Transaksi
                                            </label>
                                            <select
                                                name="jenis_transaksi"
                                                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                required
                                            >
                                                <option value="pemasukan">
                                                    Pemasukan
                                                </option>
                                                <option value="pengeluaran">
                                                    Pengeluaran
                                                </option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                                Jumlah (Rp)
                                            </label>
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                name="jumlah"
                                                onChange={angkaNumber}
                                                value={dispayValue}
                                                placeholder="Masukkan jumlah rupiah"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-gray-600 mb-1">
                                            Deskripsi
                                        </label>
                                        <textarea
                                            name="note"
                                            className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 border rounded-lg p-3 h-30 resize-none"
                                            placeholder="Masukkan keterangan, contoh: makan siang"
                                            required
                                        ></textarea>
                                    </div>

                                    <div className="mt-3">
                                        <label className="block text-sm font-medium text-gray-600 mb-1">
                                            Kategori
                                        </label>
                                        <select
                                            name="kategori"
                                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
                                        >
                                            <option value="">
                                                Pilih kategori
                                            </option>
                                            {kategoriAll.map((key) => (
                                                <option
                                                    key={key.kategori_id}
                                                    value={key.kategori_id}
                                                >
                                                    {key.name.toUpperCase()}
                                                </option>
                                            ))}
                                        </select>
                                        <button
                                            className="text-sm mt-2 text-indigo-600 cursor-pointer"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowPopup(true);
                                            }}
                                        >
                                            + Tambah Kategori Baru
                                        </button>
                                    </div>

                                    <button
                                        className="w-full py-3 mt-3 cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-90 transition"
                                        type="submit"
                                    >
                                        Tambah Transaksi
                                    </button>
                                </div>
                            )}
                            {mode === "ocr" && (
                                <div className="border-dashed border-2 rounded-xl p-6  space-y-6 animate-fadeIn mt-3">
                                    <div>
                                        {!previewImage ? (
                                            <>
                                                {!tipeMode ? (
                                                    <div className="text-center">
                                                        <FaCamera className="text-3xl mx-auto mb-2 text-gray-500" />
                                                        <h3 className="text-lg font-medium text-gray-700">
                                                            Scan / Upload Struk
                                                        </h3>
                                                        <p className="text-sm text-gray-600 mb-4">
                                                            Pilih cara untuk
                                                            memindai struk
                                                            transaksi Anda
                                                        </p>

                                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                            <label
                                                                onClick={() =>
                                                                    setTipeMode(
                                                                        "camera"
                                                                    )
                                                                }
                                                                className="flex flex-col items-center justify-center bg-indigo-600 text-white p-3 rounded-xl hover:bg-indigo-700 transition"
                                                            >
                                                                <FaCamera className="text-2xl mb-1" />
                                                                <span>
                                                                    Foto dengan
                                                                    Kamera
                                                                </span>
                                                            </label>

                                                            <label
                                                                htmlFor="uploadInput"
                                                                className="flex flex-col items-center justify-center bg-gray-100 text-gray-700 p-4 rounded-xl hover:bg-gray-200 transition cursor-pointer"
                                                            >
                                                                <FaUpload className="text-2xl mb-1" />
                                                                <span>
                                                                    Upload Foto
                                                                </span>
                                                                <input
                                                                    id="uploadInput"
                                                                    type="file"
                                                                    accept="image/*"
                                                                    onChange={
                                                                        handleFileChange
                                                                    }
                                                                    className="hidden"
                                                                />
                                                            </label>
                                                        </div>
                                                    </div>
                                                ) : null}
                                                {tipeMode === "camera" && (
                                                    <ViewCamera
                                                        setResultOcr={
                                                            setResultOcr
                                                        }
                                                        setTipeMode={
                                                            setTipeMode
                                                        }
                                                        setPreviewImage={
                                                            setPreviewImage
                                                        }
                                                        setProsesLoading={
                                                            setProsesLoading
                                                        }
                                                    />
                                                )}
                                            </>
                                        ) : (
                                            <>
                                                <div className="relative w-75 m-auto">
                                                    <>
                                                        <div className="relative w-75 m-auto">
                                                            {previewImage &&
                                                                tipeMode ===
                                                                    null && (
                                                                    <div className="relative w-full">
                                                                        <img
                                                                            src={
                                                                                previewImage
                                                                            }
                                                                            alt="Preview"
                                                                            className="rounded-xl shadow-md mb-4 w-full"
                                                                        />
                                                                        <button
                                                                            onClick={
                                                                                gantiImage
                                                                            }
                                                                            className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600"
                                                                        >
                                                                            Remove
                                                                        </button>
                                                                    </div>
                                                                )}
                                                        </div>
                                                    </>
                                                </div>
                                                {prosesLoading ? (
                                                    <div className="flex flex-col items-center justify-center py-6">
                                                        <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin mb-3"></div>
                                                        <p className="text-indigo-600 font-semibold animate-pulse">
                                                            Harap
                                                            menunggu,sedang
                                                            membaca file..
                                                        </p>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <div>
                                                            <h3 className="text-2xl mb-2 flex items-center">
                                                                Detail Struk
                                                                {resultOcr?.tanggal && (
                                                                    <span className="relative -top-1 ml-1 bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-sm">
                                                                        {
                                                                            resultOcr.tanggal
                                                                        }
                                                                    </span>
                                                                )}
                                                            </h3>

                                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-600 mb-1">
                                                                        Jenis
                                                                        Transaksi
                                                                    </label>
                                                                    <select
                                                                        value={
                                                                            dataForm.jenis
                                                                        }
                                                                        onChange={(
                                                                            e
                                                                        ) => {
                                                                            setDataForm(
                                                                                (
                                                                                    prev
                                                                                ) => ({
                                                                                    ...prev,
                                                                                    jenis: e
                                                                                        .target
                                                                                        .value,
                                                                                })
                                                                            );
                                                                        }}
                                                                        name="jenis_transaksi"
                                                                        className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                                        required
                                                                    >
                                                                        <option
                                                                            value=""
                                                                            disabled
                                                                        >
                                                                            Pilih
                                                                            Jenis
                                                                            Transaksi
                                                                        </option>
                                                                        <option value="pemasukan">
                                                                            Pemasukan
                                                                        </option>
                                                                        <option value="pengeluaran">
                                                                            Pengeluaran
                                                                        </option>
                                                                    </select>
                                                                </div>

                                                                <div>
                                                                    <label className="block text-sm font-medium text-gray-600 mb-1">
                                                                        Jumlah
                                                                        (Rp)
                                                                    </label>
                                                                    <input
                                                                        type="text"
                                                                        inputMode="numeric"
                                                                        className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                                        name="jumlah"
                                                                        onChange={
                                                                            angkaNumber
                                                                        }
                                                                        value={
                                                                            dispayValue
                                                                        }
                                                                        placeholder="Masukkan jumlah rupiah"
                                                                        required
                                                                    />
                                                                </div>
                                                            </div>

                                                            <div className="mt-4">
                                                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                                                    Deskripsi
                                                                </label>
                                                                <textarea
                                                                    required
                                                                    name="note"
                                                                    className="w-full focus:outline-none focus:ring-2 focus:ring-indigo-500 border rounded-lg p-3 h-30 resize-none"
                                                                    placeholder="Masukkan keterangan, contoh: makan siang"
                                                                    value={
                                                                        dataForm.deskripsi
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setDataForm(
                                                                            (
                                                                                prev
                                                                            ) => ({
                                                                                ...prev,
                                                                                deskripsi:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            })
                                                                        );
                                                                    }}
                                                                ></textarea>
                                                            </div>

                                                            <div className="mt-4">
                                                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                                                    Kategori
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    name="kategori"
                                                                    value={
                                                                        dataForm.kategori
                                                                    }
                                                                    onChange={(
                                                                        e
                                                                    ) => {
                                                                        setDataForm(
                                                                            (
                                                                                prev
                                                                            ) => ({
                                                                                ...prev,
                                                                                kategori:
                                                                                    e
                                                                                        .target
                                                                                        .value,
                                                                            })
                                                                        );
                                                                    }}
                                                                    className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                                                    required
                                                                />
                                                            </div>
                                                        </div>

                                                        <button
                                                            className="w-full py-3 mt-3 cursor-pointer rounded-lg bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold shadow-md hover:opacity-90 transition"
                                                            type="submit"
                                                        >
                                                            Tambah Transaksi
                                                        </button>
                                                    </>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </div>

                <div className="bg-white shadow-md rounded-xl p-4 sm:p-6 container mx-auto overscroll-auto overflow-auto">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold">
                            Riwayat Transaksi
                        </h2>
                        <button
                            className="text-red-500 hover:underline text-sm cursor-pointer"
                            onClick={() => setEditMode(!editMode)}
                        >
                            {editMode ? "Selesai" : "Edit Transaksi"}
                        </button>
                    </div>

                    <div className="overscroll-auto overflow-auto h-100">
                        {isLoading ? (
                            // 🔄 Tampilan loading animasi
                            <div className="flex flex-col items-center justify-center py-8 text-gray-500">
                                <motion.div
                                    className="w-10 h-10 border-4 border-yellow-500 border-t-transparent rounded-full"
                                    animate={{ rotate: 360 }}
                                    transition={{
                                        repeat: Infinity,
                                        duration: 1,
                                        ease: "linear",
                                    }}
                                />
                                <p className="mt-3 text-sm">
                                    Memuat transaksi...
                                </p>
                            </div>
                        ) : animatedList.length === 0 ? (
                            <div className="flex flex-col items-center justify-center text-gray-500 py-6">
                                <FaRegChartBar className="size-24 text-yellow-500" />
                                <p className="text-center text-sm sm:text-base">
                                    Belum ada transaksi. Yuk tambahkan transaksi
                                    Anda
                                </p>
                            </div>
                        ) : (
                            <ul className="divide-y divide-gray-200">
                                <AnimatePresence>
                                    {animatedList.map((result) => {
                                        const IconKategori = icons.find(
                                            (i) =>
                                                i.name ===
                                                result.list_kategori.icon
                                        ) || {
                                            icon: LuWalletCards,
                                            color: "text-gray-400",
                                        };
                                        const Icon = IconKategori.icon;

                                        return (
                                            <motion.li
                                                key={result.id}
                                                className="flex items-center justify-between py-3"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{
                                                    duration: 0.3,
                                                    ease: "easeOut",
                                                }}
                                            >
                                                <div className="flex items-center gap-3">
                                                    {editMode && (
                                                        <input
                                                            name="transaksi"
                                                            type="radio"
                                                            className="w-4 h-4 cursor-pointer"
                                                            onChange={() =>
                                                                showModalCheckBox(
                                                                    result
                                                                )
                                                            }
                                                        />
                                                    )}
                                                    <div className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full">
                                                        <Icon
                                                            className={`text-2xl ${IconKategori.color}`}
                                                        />
                                                    </div>
                                                    <div>
                                                        <p className="font-medium font-sans capitalize">
                                                            {result.note}
                                                        </p>
                                                        <p className="text-sm font-sans">
                                                            {new Date(
                                                                result.created_at
                                                            ).toLocaleDateString(
                                                                "id-ID",
                                                                {
                                                                    day: "numeric",
                                                                    month: "short",
                                                                }
                                                            )}
                                                        </p>
                                                    </div>
                                                </div>

                                                <span
                                                    className={`font-semibold ${
                                                        result.type ===
                                                        "pemasukan"
                                                            ? "text-green-600"
                                                            : "text-red-600"
                                                    }`}
                                                >
                                                    {result.type === "pemasukan"
                                                        ? "+"
                                                        : "-"}
                                                    {formatRupiah(
                                                        parseInt(result.amount)
                                                    )}
                                                </span>
                                            </motion.li>
                                        );
                                    })}
                                </AnimatePresence>
                            </ul>
                        )}
                    </div>
                </div>

                {showPopup && (
                    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white w-full max-w-md rounded-2xl p-6 relative">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-lg font-semibold">
                                    Tambah Kategori
                                </h2>
                                <button onClick={() => setShowPopup(false)}>
                                    <X className="w-6 h-6 text-gray-500 hover:text-gray-700 cursor-pointer" />
                                </button>
                            </div>
                            <label className="block text-sm font-medium text-gray-600 mb-1">
                                Nama Kategori
                            </label>
                            <input
                                type="text"
                                className="w-full border rounded-lg px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                placeholder="masukan nama kategori terbaru"
                                value={kategoriBaru}
                                onChange={(e) =>
                                    setKategoriBaru(e.target.value)
                                }
                            />
                            <p className="text-sm font-medium text-gray-600 mb-2">
                                Pilih Ikon
                            </p>
                            <div className="grid grid-cols-6 gap-3 mb-6">
                                {icons.map(({ name, icon: Icon, color }, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setSelectedIcon(name)}
                                        type="button"
                                        className={`text-2xl p-2 rounded-lg transition cursor-pointer ${
                                            selectedIcon === name
                                                ? "bg-indigo-200 ring-2 ring-indigo-500"
                                                : "bg-gray-100 hover:bg-indigo-100"
                                        }`}
                                    >
                                        <Icon className={`text-2xl ${color}`} />
                                    </button>
                                ))}
                            </div>
                            <button
                                onClick={addKategori}
                                className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition cursor-pointer"
                            >
                                Simpan Kategori
                            </button>
                        </div>
                    </div>
                )}
                {modalOpen && selectedTransaksi && (
                    <Modal
                        transaksi={selectedTransaksi}
                        onClose={() => setModalOpen(false)}
                        onDeleted={getTransaksi}
                        onSave={getTransaksi}
                        onEditmode={setEditMode}
                    />
                )}
            </div>
        </>
    );
};

export default FormTransaksi;
