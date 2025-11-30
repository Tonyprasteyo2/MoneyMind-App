import {
    FaArrowDown,
    FaArrowUp,
    FaMoneyBill,
    FaPlus,
    FaWallet,
} from "react-icons/fa";
import { TransaksiUser } from "../components/TransaksiList";
import { useEffect, useState } from "react";
import { userAuth } from "../components/AuthPrivate";
import axios from "axios";
import { API_URL, BE_OCR } from "../service/firebase";
import { icons } from "./FormTransaksi";
import { PiRankingBold } from "react-icons/pi";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import TrenGrafik from "../components/TrenGrafik";
import { useNavigate } from "react-router-dom";

export const formatRupiah = (data) => {
    if (data === null || data === undefined) return "Rp.0";
    const number = Number(data);
    if (isNaN(number)) return "Rp.0";
    return number.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits: 0,
    });
};
const Dashboard = () => {
    const navigate = useNavigate();
    const {
        totalTransaksi,
        totalPemasukan,
        totalPengeluaran,
        loading,
        getTransaksi,
        listTransaksi,
    } = TransaksiUser();
    const [dataTopPengeluaran, setDataTopPengeluaran] = useState([]);
    const [loadingTop, setLoadingTop] = useState(true);
    const { user } = userAuth();
    const getTopPengeluaran = async () => {
        const token = await user.getIdToken();
        const result = await axios.get(`${API_URL}/top-pengeluaran`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        if (result.data.status == 200) {
            setDataTopPengeluaran(result.data.data);
            setLoadingTop(false);
        }
    };
    const [dataInsight, setDataInsight] = useState([]);
    const getInsight = async () => {
        const token = await user.getIdToken();
        const result = await axios.get(`${API_URL}/insight-analisis`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        const cek = await axios.post(`${BE_OCR}/insight`, result.data.payload);
        if (cek.data.status == 200) {
            setDataInsight(cek.data.pesan);
        } else {
            Swal.fire({
                icon: "error",
                text: "Gagal Prediksi",
                showConfirmButton: false,
                timer: 1500,
            });
        }
        setLoadingTop(false);
    };
    const [dataTren, setDataTren] = useState(null);
    const getTren = async () => {
        const token = await user.getIdToken();
        const result = await axios.get(`${API_URL}/tren-7-hari`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        setDataTren(result.data.data);
    };
    useEffect(() => {
        if (user) getTopPengeluaran();
        if (user) getInsight();
        getTren();
    }, [user]);
    const getIcon = (kategorinama) => {
        const cari = icons.find(
            (i) => i.name.toLowerCase() === kategorinama.toLowerCase()
        );
        return cari || null;
    };
    return (
        <>
            <div className="p-1 container mx-auto w-full">
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-xl shadow-xl flex items-center justify-between">
                        <div>
                            <p className="text-gray-500">
                                Total Transaksi Bulan{" "}
                                {new Date().toLocaleDateString("id-ID", {
                                    month: "long",
                                    year: "numeric",
                                })}
                            </p>
                            <h2 className="text-xl font-bold">
                                {loading
                                    ? "Loading"
                                    : formatRupiah(totalTransaksi)}
                            </h2>
                        </div>
                        <FaWallet className="text-indigo-600 text-3xl" />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-xl flex items-center justify-between w-auto">
                        <div>
                            <p className="text-gray-500">Total Pemasukan</p>
                            <h2 className="text-xl font-bold text-green-600">
                                {loading
                                    ? "Loading..."
                                    : formatRupiah(totalPemasukan)}
                            </h2>
                        </div>
                        <FaArrowDown className="text-green-500 text-3xl" />
                    </div>
                    <div className="bg-white p-4 rounded-xl shadow-xl flex items-center justify-between">
                        <div>
                            <p className="text-gray-500">Total Pengeluaran</p>
                            <h2 className="text-xl font-bold text-red-600">
                                {loading
                                    ? "Loading..."
                                    : formatRupiah(totalPengeluaran)}
                            </h2>
                        </div>
                        <FaArrowUp className="text-red-500 text-3xl" />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-3 mt-3">
                    <div className="bg-white rounded-xl p-6 shadow-sm ">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
                                <PiRankingBold className="text-xl text-amber-500" />
                                Top Pengeluaran
                            </h2>
                        </div>
                        <div className="mb-6">
                            <div className="space-y-4">
                                {loadingTop ? (
                                    <>
                                        <div className="h-16 bg-gray-100 animate-pulse rounded-xl"></div>
                                        <div className="h-16 bg-gray-100 animate-pulse rounded-xl"></div>
                                        <div className="h-16 bg-gray-100 animate-pulse rounded-xl"></div>
                                    </>
                                ) : (
                                    dataTopPengeluaran.map((item, index) => {
                                        const iconName = getIcon(item.icon);
                                        const IconTag = iconName?.icon;
                                        return (
                                            <div
                                                className={`flex justify-between items-center p-4 rounded-xl border ${
                                                    index === 0
                                                        ? "bg-red-50 border-red-100"
                                                        : index === 1
                                                        ? "bg-orange-50 border-orange-100"
                                                        : "bg-yellow-50 border-yellow-100"
                                                }`}
                                                key={index}
                                            >
                                                <div className="flex items-center gap-3 capitalize">
                                                    {IconTag && (
                                                        <IconTag
                                                            className={`text-2xl ${iconName.color}`}
                                                        />
                                                    )}
                                                    <div>
                                                        <p className="font-medium">
                                                            {item.category}
                                                        </p>
                                                        <p className="text-sm text-gray-600">
                                                            {item.transaksi}{" "}
                                                            Transaksi
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="font-semibold">
                                                        {formatRupiah(
                                                            item.amount
                                                        )}
                                                    </p>
                                                    <p className="text-sm text-gray-600">
                                                        {item.persen}%
                                                    </p>
                                                </div>
                                            </div>
                                        );
                                    })
                                )}
                            </div>
                        </div>
                    </div>
                    <div>
                        {loadingTop ? (
                            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8 animate-pulse">
                                <div className="h-5 w-24 bg-gray-300/50 rounded mb-4"></div>
                                <div className="h-4 w-full bg-gray-300/40 rounded mb-2"></div>
                                <div className="h-4 w-3/4 bg-gray-300/40 rounded mb-4"></div>
                                <div className="h-4 w-2/4 bg-gray-300/40 rounded mb-2"></div>
                                <div className="h-4 w-2/3 bg-gray-300/40 rounded"></div>
                            </div>
                        ) : dataInsight ? (
                            <motion.div
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.48,
                                    ease: "easeInOut",
                                }}
                                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl border border-blue-100 p-8 hover:shadow-md transition-all duration-300"
                            >
                                <motion.h2
                                    className="text-xl font-semibold text-gray-900 mb-3"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1, duration: 0.4 }}
                                >
                                    Insight
                                </motion.h2>

                                <motion.p
                                    className="text-gray-700 leading-relaxed mb-4 italic font-bold"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.15, duration: 0.4 }}
                                >
                                    "{dataInsight.insight}"
                                </motion.p>

                                <span className="font-medium text-gray-700">
                                    {dataInsight.prediksi_minggu_depan}
                                </span>

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                    className="mt-4"
                                >
                                    {dataInsight.todo?.map((res, i) => (
                                        <motion.div
                                            key={i}
                                            className="flex items-start gap-2 mt-2"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{
                                                delay: 0.35 + i * 0.08,
                                                duration: 0.35,
                                                ease: "easeOut",
                                            }}
                                        >
                                            <div className="w-2 h-2 rounded-full bg-black/80 mt-1"></div>
                                            <span className="text-gray-700 text-sm">
                                                {res}
                                            </span>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ) : null}
                    </div>
                </div>

                <div className="mt-5">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
                        <div className="lg:col-span-2">
                            {dataTren ? (
                                <TrenGrafik data={dataTren} />
                            ) : (
                                <div className="w-full bg-white shadow-sm p-5 rounded-2xl border border-gray-100">
                                    <p className="text-gray-500 text-sm">
                                        Tidak Ada Data Tren
                                    </p>
                                </div>
                            )}
                        </div>
                        <div className="flex flex-col gap-5">
                            <div
                                onClick={() => navigate("/transaksi")}
                                className="bg-white shadow-sm p-5 rounded-2xl border border-gray-100 h-[130px]
                   text-center cursor-pointer 
                   hover:border-gray-300 hover:shadow-md hover:scale-[1.03]
                   transition-all duration-200 flex flex-col items-center justify-center"
                            >
                                <div className="text-3xl mb-2 text-gray-700">
                                    <FaPlus />
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    Tambah Transaksi
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Catat pemasukan atau pengeluaran
                                </p>
                            </div>
                            <div
                                onClick={() => navigate("/budget")}
                                className="bg-white shadow-sm p-5 rounded-2xl border border-gray-100 h-[130px]
                   text-center cursor-pointer
                   hover:border-gray-300 hover:shadow-md hover:scale-[1.03]
                   transition-all duration-200 flex flex-col items-center justify-center"
                            >
                                <div className="text-3xl mb-2 text-gray-700">
                                    <FaMoneyBill />
                                </div>
                                <p className="text-sm font-medium text-gray-900">
                                    Atur Budget
                                </p>
                                <p className="text-xs text-gray-500 mt-1">
                                    Kelola anggaran per kategori
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Dashboard;
