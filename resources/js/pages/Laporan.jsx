import { userAuth } from "../components/AuthPrivate";
import { useContext, useEffect, useState } from "react";
import { KategoriList } from "../components/KategoriList";
import { API_URL } from "../service/firebase";
import axios from "axios";
import DataTable from "react-data-table-component";
import { FaSpinner } from "react-icons/fa";
import { ChartKategori, DougChartKategori } from "../components/ChartKategori";
import { formatRupiah } from "./Dasboard";
const Laporan = () => {
    const { user } = userAuth();
    const { kategori, setKategori, kategoriAll } = useContext(KategoriList);
    const [periode, setPeriode] = useState("30 Hari Terakhir");
    const [jenis, setJenis] = useState("All");
    const [laporan, setLaporan] = useState([]);
    const [loading, setLoading] = useState(false);
    const [totalPemasukan, setTotalPemasukan] = useState(0);
    const [totalPengeluaran, setTotalPengeluaran] = useState(0);

    const submitLaporan = async () => {
        const token = await user.getIdToken();
        setLoading(true);
        try {
            const data = {
                periode,
                jenis,
                kategori,
            };
            const res = await axios.post(`${API_URL}/filter-laporan`, data, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            setLaporan(res.data.data);
            const totalmasuk = res.data.data
                .filter((total) => total.type === "pemasukan")
                .reduce((sum, total) => sum + parseInt(total.amount), 0);
            const totalkeluar = res.data.data
                .filter((total) => total.type === "pengeluaran")
                .reduce((sum, total) => sum + parseInt(total.amount), 0);
            setTotalPemasukan(totalmasuk);
            setTotalPengeluaran(totalkeluar);
        } catch (error) {
            // console.log(error);
        } finally {
            setLoading(false);
        }
    };
    const columns = [
        {
            name: "Tanggal",
            selector: (row) =>
                new Date(row.created_at).toLocaleDateString("id-ID", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                }),
            sortable: true,
            width: "120px",
        },
        {
            name: "Keterangan",
            selector: (row) => row.note,
            sortable: true,
            wrap: true,
        },
        {
            name: "Kategori",
            selector: (row) => row.list_kategori.name,
            sortable: true,
        },
        {
            name: "Status",
            sortable: true,
            selector: (row) => row.type,
            width:"150px",
            cell: (row) => (
                <span
                    className={`rounded-full text-white ${
                        row.type === "pemasukan" ? "bg-green-500" : "bg-red-500"
                    } py-1 px-3`}
                >
                    {row.type.toUpperCase()}
                </span>
            ),
        },
        {
            name: "Nominal",
            selector: (row) => row.amount,
            sortable: true,
            cell: (row) => (
                <span>Rp {parseInt(row.amount).toLocaleString("id-ID")}</span>
            ),
        },
    ];
    useEffect(() => {
        const checkUpdate = () => {
            const updated = localStorage.getItem("dataTransaksiUpdated");
            if (updated === "true" && user) {
                submitLaporan();
                localStorage.removeItem("dataTransaksiUpdated");
            }
        };
        window.addEventListener("focus", checkUpdate);
        checkUpdate();
        return () => {
            window.removeEventListener("focus", checkUpdate);
        };
    }, [user]);

    return (
        <>
            <div className="container mx-auto mt-2">
                <div className="md:p-2 p-0">
                    <div className="bg-white shadow-md rounded-xl p-3 md:p-5">
                        <h2 className="text-lg font-bold mb-2">
                            Filter Laporan
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Periode
                                </label>
                                <select
                                    className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    onChange={(e) => setPeriode(e.target.value)}
                                >
                                    <option value="All">All Periode</option>
                                    <option value="30 Hari Terakhir">
                                        30 Hari Terakhir
                                    </option>
                                    <option value="7 Hari Terakhir">
                                        7 Hari Terakhir
                                    </option>
                                    <option value="Bulan Ini">Bulan Lalu</option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Jenis Transaksi
                                </label>
                                <select
                                    className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    onChange={(e) => setJenis(e.target.value)}
                                >
                                    <option value="All">All</option>
                                    <option value="pemasukan">Pemasukan</option>
                                    <option value="pengeluaran">
                                        Pengeluaran
                                    </option>
                                </select>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-600 mb-1">
                                    Kategori
                                </label>
                                <select
                                    className="w-full border rounded-lg px-3 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    name="kategori"
                                    value={kategori}
                                    onChange={(e) =>
                                        setKategori(e.target.value)
                                    }
                                >
                                    <option value="All" key="All">
                                        All
                                    </option>
                                    {kategoriAll.map((reskt) => (
                                        <option
                                            key={reskt.kategori_id}
                                            value={reskt.kategori_id}
                                        >
                                            {reskt.name.toUpperCase()}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <button
                                className="mt-1 w-50 px-5 py-2.5 bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-semibold rounded-lg shadow cursor-pointer"
                                onClick={(e) => {
                                    e.preventDefault();
                                    submitLaporan();
                                }}
                            >
                                {loading ? "Memproses..." : "Generate Laporan"}
                            </button>
                        </div>
                    </div>
                </div>
                <div className="p-1 md:p-2 mt-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4 p-3">
                        <div className="bg-white p-4 rounded-xl shadow text-center">
                            <p className="text-sm">Total Pemasukan</p>
                            <p className="text-xl font-bold text-green-600">
                                {loading ? (
                                    <FaSpinner className="animate-spin text-gray-400 inline-block" />
                                ) : (
                                    formatRupiah(totalPemasukan) // format rupiah
                                )}
                            </p>
                        </div>
                        <div className="bg-white p-4 rounded-xl shadow text-center">
                            <p className="text-sm">Total Pengeluaran</p>
                            <p className="text-xl font-bold text-red-600">
                                {loading ? (
                                    <FaSpinner className="animate-spin text-gray-400 inline-block" />
                                ) : (
                                    formatRupiah(totalPengeluaran)
                                )}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-xl shadow">
                        <h3 className="font-semibold mb-2">Detai Transaksi</h3>
                        <DataTable
                            columns={columns}
                            data={laporan}
                            progressPending={loading}
                            progressComponent={
                                <div className="flex items-center justify-center py-6 text-gray-500">
                                    <FaSpinner className="animate-spin text-blue-500 mr-2" />
                                    Sabar ya lagi memuat data...
                                </div>
                            }
                            pagination
                            highlightOnHover
                            striped
                            paginationPerPage={10}
                            noDataComponent="Tidak ada data laporan ditemukan"
                        />
                    </div>
                    <div className="bg-white p-5 rounded-xl shadow ">
                        <ChartKategori />
                    </div>
                </div>
                <div className="bg-white p-5 rounded-xl shadow ">
                    <DougChartKategori data={laporan} />
                </div>
            </div>
        </>
    );
};

export default Laporan;
