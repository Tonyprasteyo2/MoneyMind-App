import { useContext, useEffect, useState } from "react";
import { KategoriList } from "../components/KategoriList";
import { Barcode, X } from "lucide-react";
import {
    FaWallet,
    FaCar,
    FaUtensils,
    FaMoneyBill,
    FaDonate,
    FaGift,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { LuWalletCards } from "react-icons/lu";
import { userAuth } from "../components/AuthPrivate";
import axios from "axios";
import { API_URL } from "../service/firebase";
import { formatRupiah } from "./Dasboard";

const ViewBudget = () => {
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
    const [budgetValue, setBudgetValue] = useState("");
    const [selectBudget, setSelectBudget] = useState("");
    const icons = [
        { name: "transportasi", icon: FaCar, color: "text-blue-500" },
        { name: "makan", icon: FaUtensils, color: "text-yellow-500" },
        { name: "bill", icon: FaMoneyBill, color: "text-green-500" },
        { name: "tabungan", icon: FaGift, color: "text-pink-500" },
        { name: "donasi", icon: FaDonate, color: "text-purple-500" },
        { name: "lain-lain", icon: LuWalletCards, color: "text-pink-500" },
    ];
    const [loading, setLoading] = useState(false);
    const [jumlah, setJumlah] = useState(0);
    const [budgetPengeluaran, setBudgetPengeluaran] = useState([]);
    const [budgetPemasukan, setBudgetPemasukan] = useState([]);
    const angkaNumber = (e) => {
        let valueInput = e.target.value.replace(/\D/g, "");
        if (!valueInput) {
            setBudgetValue("");
            setJumlah(0);
            return;
        }
        const formatRupiah = new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
        }).format(valueInput);
        setBudgetValue(formatRupiah);
        setJumlah(parseInt(valueInput, 10));
    };

    const addBudget = async () => {
        const token = await user.getIdToken();
        setLoading(true);
        try {
            if (parseInt(selectBudget)) {
                let data = {
                    id_kategori: selectBudget,
                    budgetPlaning: jumlah,
                };
                const result = await axios.post(
                    `${API_URL}/tambah-budget`,
                    data,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                if (result.data.status === 200) {
                    Swal.fire({
                        icon: "success",
                        title: "Berhasil",
                        text: "Pengaturan Budget Berhasil DiTambahkan",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    setBudgetValue("");
                    setSelectBudget("");
                } else {
                    Swal.fire({
                        icon: "error",
                        text: "gagal simpan",
                        showConfirmButton: false,
                        timer: 1550,
                    });
                }
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                text: "gagal simpan",
                showConfirmButton: false,
                timer: 1550,
            });
        }
    };
    const getBudget = async () => {
        const token = await user.getIdToken();
        const result = await axios.get(`${API_URL}/budget-planing`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });
        if (result.data.status === 200) {
            const all = result.data.data;
            const dataPengeluaran = all.filter(
                (item) => item.total_pengeluaran > 0
            );
            const dataPeamsukan = all.filter(
                (item) => item.total_pemasukan > 0
            );
            setBudgetPemasukan(dataPeamsukan);
            setBudgetPengeluaran(dataPengeluaran);
        }
    };
    useEffect(() => {
        getBudget();
    }, [user]);
    
const ListProgres = ({ title, data }) => {
    const [progress, setProgress] = useState([]);
    useEffect(() => {
        const initial = data.map(() => 0);
        setProgress(initial);
        setTimeout(() => {
            const final = data.map((item) => {
                const total = title.includes("Pemasukan")
                    ? item.total_pemasukan
                    : item.total_pengeluaran;
                return Math.min((total / item.budget) * 100, 100);
            });
            setProgress(final);
        }, 175);
    }, [data]);
    return (
        <div className="bg-white p-5 rounded-xl shadow-xl w-full max-h-80 overflow-y-auto">
            <h2 className="font-semibold text-lg mb-4">{title}</h2>
            {data.length === 0 && (
                <p className="text-gray-500 text-sm text-center py-5">
                    Tidak Ada
                </p>
            )}
            {data.map((item, index) => {
                const total = title.includes("Pemasukan")
                    ? item.total_pemasukan
                    : item.total_pengeluaran;

                const barColor = title.includes("Pemasukan")
                    ? "bg-green-500"
                    : total > item.budget
                    ? "bg-red-500"
                    : "bg-blue-500";

                return (
                    <div key={index} className="mb-4">
                        <p className="text-gray-700 mb-1">{item.kategori}</p>

                        <div className="w-full bg-gray-200 h-2 rounded-full mb-1 overflow-hidden">
                            <div
                                className={`${barColor} h-2 rounded-full transition-all duration-[1200ms] ease-out`}
                                style={{
                                    width: `${progress[index]}%`,
                                }}
                            ></div>
                        </div>

                        <div className="flex justify-between text-sm text-gray-600">
                            <span>
                                {formatRupiah(total)} /{" "}
                                {formatRupiah(item.budget)}
                            </span>

                            <span
                                className={
                                    total > item.budget &&
                                    !title.includes("Pemasukan")
                                        ? "text-red-500 font-semibold"
                                        : ""
                                }
                            >
                                {Math.round(progress[index])}%
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

    return (
        <>
            <div className="p-1 container mx-auto w-full mt-5">
                <div className="bg-white shadow-md rounded-xl p-3 sm:p-6">
                    <div className="flex items-center gap-2 mb-6">
                        <FaWallet className="text-yellow-500 text-xl" />
                        <h2 className="text-lg font-semibold text-gray-800">
                            Pengaturan Budget
                        </h2>
                    </div>
                    <div className="mb-5">
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Kategori
                        </label>
                        <select
                            name="kategori"
                            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 bg-gray-100"
                            value={selectBudget}
                            onChange={(e) => {
                                setSelectBudget(e.target.value);
                                setBudgetValue("");
                            }}
                        >
                            <option value="">Pilih Kategori</option>
                            {kategoriAll.map((key) => (
                                <option
                                    value={key.kategori_id}
                                    key={key.kategori_id}
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
                    {selectBudget && (
                        <>
                            <form
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    addBudget();
                                }}
                                className="space-y-4 animate-fadeIn"
                            >
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-3">
                                        Nama Kategori :{" "}
                                        {kategoriAll
                                            .find(
                                                (opt) =>
                                                    opt.kategori_id ==
                                                    selectBudget
                                            )
                                            ?.name.toUpperCase()}
                                    </label>
                                    <input
                                        type="text"
                                        inputMode="numeric"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        placeholder="masukan biaya budget planning anda"
                                        value={budgetValue}
                                        onChange={angkaNumber}
                                    />
                                </div>
                                <button className="w-auto py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition cursor-pointer">
                                    Simpat Budget
                                </button>
                            </form>
                        </>
                    )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
                    <ListProgres
                        title="Budget Pengeluaran"
                        data={budgetPengeluaran}
                        color="bg-blue-500"
                    />
                    <ListProgres
                        title="Budget Pemasukan/Tabungan"
                        data={budgetPemasukan}
                        color="bg-green-500"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-12 gap-8">
                     <div className="bg-white shadow-md rounded-xl p-3 sm:p-6 w-full md:col-span-2">
                        <h4 className="font-semibold mb-2">Data Budget Kategori</h4>
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-3 sm:p-6 w-full md:col-span-1">
                        aa
                    </div>
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
                            onChange={(e) => setKategoriBaru(e.target.value)}
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
        </>
    );
};
export default ViewBudget;
