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
    FaEdit,
    FaTrash,
} from "react-icons/fa";
import Swal from "sweetalert2";
import { LuWalletCards } from "react-icons/lu";
import { userAuth } from "../components/AuthPrivate";
import axios from "axios";
import { API_URL, BE_OCR } from "../service/firebase";
import { formatRupiah } from "./Dasboard";
import DataTable from "react-data-table-component";
import { IoWarningOutline } from "react-icons/io5";
import { getBudget } from "../service/getBudget";
import { ListProgres } from "../components/ListProgres";

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
    const [jumlah, setJumlah] = useState(0);
    const [targetBulan,setTargetBulan] = useState("");
    const [dataBudget, setDataBudget] = useState([]);
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
    const [editBudgetID, setEditBudgetID] = useState(null);
    const [editBudgetValue, setEditBudgetValue] = useState("");
    const [dataKomentar, setDataKomenta] = useState([]);
    const [budgetPengeluaran, setBudgetPengeluaran] = useState([]);
    const [budgetPemasukan, setBudgetPemasukan] = useState([]);
    const [loading, setLoading] = useState(false);
    const loadBudget = async () => {
        if (!user) return;
        const { pemasukan, pengeluaran } = await getBudget(user);
        setBudgetPemasukan(pemasukan);
        setBudgetPengeluaran(pengeluaran);
    };
    const showDataBudget = async () => {
        const token = await user.getIdToken();
        try {
            const res = await axios.get(`${API_URL}/budget-all`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.data.status === 200) {
                setDataBudget(res.data.data);
            }
        } catch (error) {
            // console.log(error);
        }
    };
    const columns = [
        {
            name: "Kategori",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Jenis",
            selector: (row) => {
                const firstTrx = row.transactions?.[0];
                return firstTrx?.type === "pengeluaran"
                    ? "Pengeluaran"
                    : "Pemasukan";
            },
        },
        {
            name: "Budget Planning",
            selector: (row) =>
                editBudgetID == row.get_budget?.id_budget ? (
                    <input
                        type="number"
                        className="border p-1 rounded w-24"
                        value={editBudgetValue}
                        onChange={(e) => setEditBudgetValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        autoFocus
                    />
                ) : (
                    formatRupiah(row.get_budget?.budget_planing)
                ),
            sortable: true,
        },
        {
            name: "Terpakai",
            selector: (row) => {
                const hasil = row.transactions?.reduce(
                    (total, trx) => total + Number(trx.amount ?? 0),
                    0
                );
                return formatRupiah(hasil);
            },
            sortable: true,
        },
        {
            name: "Sisa",
            selector: (row) => {
                const budget = Number(row.get_budget?.budget_planing ?? 0);
                const terpakai = row.transactions?.reduce(
                    (total, trx) => total + Number(trx.amount ?? 0),
                    0
                );
                return formatRupiah(budget - terpakai);
            },
            sortable: true,
        },
        {
            name: "Progress",
            cell: (row) => {
                const budget = Number(row.get_budget?.budget_planing ?? 0);
                const terpakai = row.transactions?.reduce(
                    (total, trx) => total + Number(trx.amount ?? 0),
                    0
                );
                const persen =
                    budget > 0
                        ? Math.min(Math.round((terpakai / budget) * 100), 100)
                        : 0;
                const warna = row.transactions?.[0];
                return (
                    <div className="w-full">
                        <div className="h-2 bg-gray-200 rounded">
                            <div
                                className={`h-2 rounded ${
                                    warna?.type === "pengeluaran"
                                        ? "bg-red-500"
                                        : "bg-green-500"
                                }`}
                                style={{ width: `${persen}%` }}
                            />
                        </div>
                        <span className="text-xs">{persen}%</span>
                    </div>
                );
            },
        },
        {
            name: "Aksi",
            cell: (row) => (
                <div className="flex gap-2">
                    <FaEdit
                        className=" text-lg text-sky-300 cursor-pointer"
                        onClick={() => handleEdit(row)}
                    />
                    <FaTrash
                        className="text-red-500 cursor-pointer text-lg"
                        onClick={() => handleRemove(row.get_budget.id_budget)}
                    />
                </div>
            ),
        },
    ];
    const handleEdit = async (row) => {
        setEditBudgetID(row.get_budget.id_budget);
        setEditBudgetValue(row.get_budget?.budget_planing || "");
    };
    const handleRemove = async (row) => {
        const token = await user.getIdToken();
        try {
            const res = await axios.get(`${API_URL}/delete-budget/${row}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (res.status === 200) {
                Swal.fire({
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false,
                    title: "Berhasil Hapus Budget",
                });
                await showDataBudget();
                await getBudget();
                await loadBudget();
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Gagal Menghapus",
                text: error?.response?.data?.message || "Terjadi kesalahan.",
            });
        }
    };

    const updateDataBudget = async () => {
        const token = await user.getIdToken();
        const data = {
            idBudget: editBudgetID,
            budget_planing: editBudgetValue,
        };
        const result = await axios.post(
            `${API_URL}/update-budget-planing`,
            data,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            }
        );
        if (result.status == 200) {
            Swal.fire({
                icon: "success",
                title: "Berhasil",
                text: "Update Budget Planning Berhasil",
                showConfirmButton: false,
                timer: 1500,
            });
            setEditBudgetID(null);
            await showDataBudget();
            await getBudget();
            await loadBudget();
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === "Tab" || e.key === "Enter") {
            e.preventDefault();
            updateDataBudget();
        }
    };
    const komentarPedas = async () => {
        try {
            const token = await user.getIdToken();
            const result = await axios.get(`${API_URL}/komentar-pedas`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            });
            if (result.data.status == 200) {
                const gaskomen = await axios.post(
                    `${BE_OCR}/komentar-pedas`,
                    {
                        peringatan: result.data.data,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Content-Type": "application/json",
                        },
                    }
                );
                setDataKomenta(gaskomen.data.komentar);
            }
        } catch (error) {
            // console.log(error);
        }
    };
    const addBudget = async () => {
        const token = await user.getIdToken();
        setLoading(true);
        try {
            if (parseInt(selectBudget)) {
                let data = {
                    id_kategori: selectBudget,
                    budgetPlaning: jumlah,
                    targetBulan:targetBulan
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
                    await showDataBudget();
                    await getBudget();
                    await loadBudget();
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
    const extractPercent = (text) => {
        if (!text || typeof text !== "string") return;
        const match = text.match(/(\d+(\.\d+)?)%/);
        return match ? parseFloat(match[1]) : null;
    };
    useEffect(() => {
        loadBudget();
        showDataBudget();
        komentarPedas();
    }, [user]);
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
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div className="flex flex-col">
                                            <label className="mb-1 font-medium">
                                                Target Budget Planning
                                            </label>
                                            <input
                                                type="text"
                                                inputMode="numeric"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Masukkan biaya budget planning anda"
                                                value={budgetValue}
                                                onChange={angkaNumber}
                                            />
                                        </div>
                                        <div className="flex flex-col">
                                            <label className="mb-1 font-medium">
                                                Target
                                            </label>
                                            <input
                                                type="number"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                placeholder="Masukkan target selesai-nya" onChange={(e)=>setTargetBulan(e.target.value)}
                                            />
                                        </div>
                                    </div>
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
                    <div className="bg-white shadow-md rounded-xl p-3 sm:p-6 w-full md:col-span-2 capitalize">
                        <h4 className="font-semibold mb-2">
                            Data Budget Planning Kategori
                        </h4>
                        <DataTable
                            paginationPerPage={10}
                            striped
                            pagination
                            columns={columns}
                            data={dataBudget}
                        />
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-3 sm:p-6 w-full md:col-span-1">
                        <div className="flex items-center gap-2 mb-5">
                            <IoWarningOutline className="text-yellow-500 text-xl" />
                            <h4 className="text-lg font-semibold text-gray-800">
                                Peringatan Budget Pengeluaran
                            </h4>

                            <style>
                                {`
                @keyframes fadeSlide {
                    0% { opacity: 0; transform: translateY(10px); }
                    100% { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeSlide { animation: fadeSlide 0.4s ease-out forwards; }

                @keyframes shakeBrutal {
                    0% { transform: translate(0px, 0px) rotate(0deg); }
                    20% { transform: translate(-4px, 2px) rotate(-1deg); }
                    40% { transform: translate(4px, -2px) rotate(1deg); }
                    60% { transform: translate(-4px, 2px) rotate(-1deg); }
                    80% { transform: translate(4px, -2px) rotate(-1deg); }
                    100% { transform: translate(0px, 0px) rotate(0deg); }
                }
                .animate-shakeBrutal { animation: shakeBrutal 0.35s ease-in-out; }
            `}
                            </style>
                        </div>
                        <style>
                            {`
        @keyframes fadeSlide {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeSlide {
            animation: fadeSlide 0.4s ease-out forwards;
        }

        @keyframes shakeBrutal {
            0% { transform: translate(0px, 0px) rotate(0deg); }
            20% { transform: translate(-3px, 2px) rotate(-1deg); }
            40% { transform: translate(3px, -2px) rotate(1deg); }
            60% { transform: translate(-3px, 2px) rotate(-1deg); }
            80% { transform: translate(3px, -2px) rotate(-1deg); }
            100% { transform: translate(0px, 0px) rotate(0deg); }
        }
        .animate-shakeBrutal {
            animation: shakeBrutal 0.35s ease-in-out;
        }
        `}
                        </style>
                        {Array.isArray(dataKomentar) &&
                            dataKomentar.length > 0 &&
                            dataKomentar.map((item, i) => {
                                const persen = extractPercent(
                                    item.normal_message
                                );
                                return (
                                    <div
                                        key={i}
                                        className={`
                mt-2 p-4 rounded-xl border text-sm leading-relaxed
                ${
                    persen !== null && persen >= 90
                        ? "bg-red-50 border-red-300 text-red-700 animate-shakeBrutal"
                        : "bg-orange-50 border-orange-300 text-orange-700 animate-fadeSlide"
                }
            `}
                                    >
                                        <p className="font-semibold">
                                            {item.normal_message}
                                        </p>
                                        <p className="font-semibold">
                                            {item.sisa_budget}
                                        </p>
                                        <p className="mt-2">
                                            {item.komentar_pedas}
                                        </p>
                                    </div>
                                );
                            })}
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
