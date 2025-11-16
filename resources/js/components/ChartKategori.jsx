import { useEffect, useMemo, useState } from "react";
import { userAuth } from "./AuthPrivate";
import axios from "axios";
import { API_URL } from "../service/firebase";
import { Bar, Line, Doughnut } from "react-chartjs-2";
import {
    ArcElement,
    CategoryScale,
    Chart,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    BarElement,
    plugins,
} from "chart.js";
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
} from "react-icons/fa";
import { LuWalletCards } from "react-icons/lu";
import ChartDataLabels from "chartjs-plugin-datalabels";
// import { formatRupiah } from "./Cards";
import Swal from "sweetalert2";
import DOMPurify from "dompurify";

Chart.register(
    LineElement,
    ArcElement,
    Tooltip,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    ChartDataLabels
);
export const ChartKategori = () => {
    const { user } = userAuth();
    const [getTransaksi, setGetTransaksi] = useState([]);
    const [loading, setLoading] = useState(true);
    const transaksiALL = async () => {
        const token = await user.getIdToken();
        try {
            const res = await axios.get(`${API_URL}/transaksi-all-line`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const dataALL = res.data.data;
            setGetTransaksi(dataALL);
        } catch (error) {
            // console.log(error);
        } finally {
            setLoading(false);
        }
    };
    const getLineTransaksi = useMemo(() => {
        const listKategori = {};
        getTransaksi.forEach((resLine) => {
            const date = new Date(resLine.created_at);
            const bulan = date.toLocaleDateString("id-ID", {
                year: "numeric",
                month: "short",
            });
            if (!listKategori[bulan])
                listKategori[bulan] = { pemasukan: 0, pengeluaran: 0 };
            const amont = parseFloat(resLine.amount) || 0;
            if (resLine.type === "pemasukan") {
                listKategori[bulan].pemasukan += amont;
            } else if (resLine.type === "pengeluaran") {
                listKategori[bulan].pengeluaran += amont;
            }
        });
        const urutBulan = Object.keys(listKategori).sort(
            (a, b) => new Date("1", a) - new Date("1", b)
        );
        return {
            labels: urutBulan,
            datasets: [
                {
                    label: "Pemasukan",
                    data: urutBulan.map((m) => listKategori[m].pemasukan),
                    borderColor: "#22f7b0ff",
                    backgroundColor: "rgba(13, 255, 174, 0.25)",
                    tension: 0.5,
                    fill: true,
                },
                {
                    label: "Pengeluaran",
                    data: urutBulan.map((m) => listKategori[m].pengeluaran),
                    borderColor: "#ef4444",
                    backgroundColor: "#ef4444",
                    tension: 0.5,
                    fill: true,
                },
            ],
        };
    }, [getTransaksi]);
    const optionLine = {
        responsive: true,
        plugins: {
            legend: {
                position: "top",
                labels: { usePointStyle: true, boxWidth: 25 },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.dataset.label || "";
                        const value = context.parsed.y || 0;
                        return `${label}: Rp ${value.toLocaleString("id-ID")}`;
                    },
                },
            },
            datalabels: {
                color: "#333",
                anchor: "end",
                align: "top",
                font: { weight: "bold", size: 13 },
                formatter: (value) => {
                    if (value === 0) return "";
                    return "Rp " + value.toLocaleString("id-ID");
                },
            },
        },

        scales: {
            y: {
                ticks: {
                    callback: (value) => "Rp." + value.toLocaleString("id-ID"),
                },
            },
        },
    };
    useEffect(() => {
        transaksiALL();
    }, [user]);
    return (
        <>
            <h3 className="font-semibold mb-2">
                Grafik Pemasukan vs Pengeluaran{" "}
                {new Date().toLocaleString("id-ID", {
                    year: "numeric",
                })}
            </h3>
            {loading ? (
                "Loading.."
            ) : (
                <Bar data={getLineTransaksi} options={optionLine} />
            )}
        </>
    );
};
// export default ChartKategori;
export const DougChartKategori = ({ data }) => {
    const [loading, setLoading] = useState(false);
    const [hasilAnalisis, setHasilAnalisis] = useState("");
    const { user } = userAuth();
    const grafikDougChart = useMemo(() => {
        const kategoriMap = {};
        const bulanSet = new Set();
        data.forEach((result) => {
            const kategori = result.list_kategori?.name || "Tanpa Kategori";
            const icon = result.list_kategori?.icon || "lain-lain";
            const tipeStatus = result.type;
            const nominal = parseFloat(result.amount) || 0;
            const tanggalDate = new Date(result.created_at);
            if (isNaN(tanggalDate)) return;

            const bulan = `${tanggalDate.getFullYear()} - ${String(
                tanggalDate.getMonth() + 1
            ).padStart(2, "0")}`;

            if (!kategoriMap[tipeStatus]) kategoriMap[tipeStatus] = {};
            if (!kategoriMap[tipeStatus][kategori])
                kategoriMap[tipeStatus][kategori] = { icon, perBulan: {} };

            kategoriMap[tipeStatus][kategori].perBulan[bulan] =
                (kategoriMap[tipeStatus][kategori].perBulan[bulan] || 0) +
                nominal;

            bulanSet.add(bulan);
        });

        const listBulan = Array.from(bulanSet).sort();
        const lastBulan = listBulan.at(-1);
        const prevBulan = listBulan.at(-2);
        const total = (tipeStatus, bulan) =>
            Object.values(kategoriMap[tipeStatus] || {}).reduce(
                (sum, val) => sum + (val.perBulan[bulan] || 0),
                0
            );
        const totalPengeluaran = total("pengeluaran", lastBulan);
        const prevTotalPengeluaran = total("pengeluaran", prevBulan);
        const totalPemasukan = total("pemasukan", lastBulan);
        const prevTotalPemasukan = total("pemasukan", prevBulan);
        const calcPersen = (curr, prev) => {
            if (prev === 0 && curr > 0) return 100;
            if (prev === 0 && curr === 0) return 0;
            return (((curr - prev) / prev) * 100).toFixed(1);
        };
        const totalPersenPengeluaran = calcPersen(
            totalPengeluaran,
            prevTotalPengeluaran
        );
        const totalPersenPemasukan = calcPersen(
            totalPemasukan,
            prevTotalPemasukan
        );
        const kategoriList = Object.entries(
            kategoriMap["pengeluaran"] || {}
        ).map(([kategori, value]) => ({
            kategori,
            nominal: value.perBulan?.[lastBulan] || 0,
            icon: value.icon,
        }));

        const persenPerkategori = kategoriList.map((item) => ({
            ...item,
            persen: totalPengeluaran
                ? ((item.nominal / totalPengeluaran) * 100).toFixed(1)
                : 0,
        }));
        return {
            kategoriList: persenPerkategori,
            lastBulan,
            prevBulan,
            totalPengeluaran,
            totalPersenPengeluaran,
            totalPemasukan,
            totalPersenPemasukan,
        };
    }, [data]);
    const {
        kategoriList,
        lastBulan,
        totalPengeluaran,
        totalPersenPengeluaran,
        totalPemasukan,
        totalPersenPemasukan,
    } = grafikDougChart;
    const icons = [
        { name: "transportasi", icon: FaCar, color: "#3B82F6" },
        { name: "makan", icon: FaUtensils, color: "#FACC15" },
        { name: "bill", icon: FaMoneyBill, color: "#22C55E" },
        { name: "tabun1", icon: FaGift, color: "#EC4899" },
        { name: "donasi", icon: FaDonate, color: "#8B5CF6" },
        { name: "lain-lain", icon: LuWalletCards, color: "#4084faff" },
    ];
    const findIconBackground = kategoriList.map((i) => {
        const found = icons.find((x) => x.name === i.icon) || icons.at(-1);
        return found.color;
    });
    const dataChart = {
        labels: kategoriList.map((i) => i.kategori),
        datasets: [
            {
                data: kategoriList.map((i) => i.nominal),
                backgroundColor: findIconBackground,
                borderWidth: 2,
                borderColor: "#fff",
            },
        ],
    };
    const option = {
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    usePointStyle: true,
                },
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || "";
                        const value = context.parsed || 0;
                        const persen =
                            kategoriList.find((kt) => kt.kategori === label)
                                ?.persen || 0;
                        return `${label}: ${value} (${persen}%)`; // format rupiah
                    },
                },
            },
        },
        responsive: true,
        maintainAspectRatio: false,
        cutout: "73%",
    };
    const formatBulanKategori = (databulan) => {
        if (databulan) {
            const [tahun, bulan] = databulan.split(" - ").map(Number);
            const date = new Date(tahun, bulan - 1);
            return date.toLocaleString("id-ID", {
                month: "long",
                year: "numeric",
            });
        }
        return "Tidak Ada Data";
    };
    const analisisAi = async () => {
        const token = await user.getIdToken();
        try {
            setLoading(true);
            const naik = grafikDougChart.kategoriList.filter(
                (n) => n.persen > 0
            );
            const turun = grafikDougChart.kategoriList.filter(
                (t) => t.persen < 0
            );
            const respon = await axios.post(
                `${API_URL}/analisis-laporan`,
                {
                    prev: formatBulanKategori(grafikDougChart.prevBulan),
                    last: formatBulanKategori(grafikDougChart.lastBulan),
                    naik,
                    turun,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );
            if (respon.data.kode === 200) {
                setHasilAnalisis(respon.data.message);
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Gagal Analisis",
                    text:
                        respon.data.message || "Terjadi kesalahan tak dikenal.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Analisis Gagal",
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <div>
            <h2 className="text-lg text-center font-semibold mb-5">
                Pengeluaran PerKategori {formatBulanKategori(lastBulan)}
            </h2>
            <div className="flex flex-col sm:flex-row justify-around mb-5 text-center mt-2">
                <div>
                    <p className="text-gray-500 text-sm">
                        Total Pemasukan Bulan Ini
                    </p>
                    <p className="text-2xl font-bold text-green-500">
                        {/* {totalPemasukan}  formatRupiah */}
                    </p>
                    <p
                        className={`text-sm ${
                            totalPersenPemasukan >= 0
                                ? "text-green-500"
                                : "text-red-500"
                        }`}
                    >
                        {totalPersenPemasukan >= 0 ? "+" : ""}
                        {totalPersenPemasukan}% dibanding bulan lalu
                    </p>
                </div>
                <div>
                    <p className="text-gray-500 text-sm">
                        Total Pengeluaran Bulan Ini
                    </p>
                    <p className="text-2xl font-bold text-red-500">
                        {formatRupiah(totalPengeluaran)}
                    </p>
                    <p
                        className={`text-sm ${
                            totalPersenPengeluaran >= 0
                                ? "text-red-500"
                                : "text-green-500"
                        }`}
                    >
                        {totalPersenPengeluaran >= 0 ? "+" : ""}
                        {totalPersenPengeluaran}% dibanding bulan lalu
                    </p>
                </div>
            </div>
            <div className="mt-4 mb-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                    <div className="relative flex justify-center items-center w-[250px] h-[250px] sm:w-[300px] sm:h-[300px]">
                        <Doughnut
                            data={dataChart}
                            options={{
                                ...option,
                                responsive: true,
                                maintainAspectRatio: false,
                            }}
                        />
                        {totalPengeluaran ? (
                            <button
                                onClick={(e) => {
                                    e.preventDefault();
                                    analisisAi();
                                }}
                                className="absolute text-white font-semibold rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 cursor-pointer"
                                style={{
                                    width: "35%",
                                    height: "35%",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%, -50%)",
                                    zIndex: 10,
                                    background:
                                        "linear-gradient(135deg, #6366F1, #EC4899, #F59E0B)",
                                    backgroundSize: "200% 200%",
                                    animation: "gradientMove 4s ease infinite",
                                }}
                            >
                                {loading ? "Loading..." : "Analisis"}
                            </button>
                        ) : null}

                        <style>
                            {`
                    @keyframes gradientMove {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                `}
                        </style>
                    </div>
                    <div className="w-full max-w-sm space-y-3 h-83 overflow-y-auto">
                        {kategoriList.map((nk, res) => {
                            const found =
                                icons.find(
                                    (x) =>
                                        x.name.toLowerCase() ===
                                        nk.kategori.toLowerCase()
                                ) || icons.at(-1);
                            const Icon = found.icon;
                            const warna = found.color;
                            return (
                                <div
                                    className="flex justify-between items-center bg-gray-50 px-4 py-3 rounded-xl shadow-sm hover:shadow-md transition"
                                    key={res}
                                >
                                    <div className="flex items-center gap-2">
                                        <Icon
                                            className="w-6 h-6 text-white p-1 rounded"
                                            style={{
                                                backgroundColor: warna,
                                            }}
                                        />
                                        <span className="font-medium text-sm sm:text-base">
                                            {nk.kategori}
                                        </span>
                                    </div>
                                    <div className="text-right text-sm sm:text-base">
                                        <p className="font-semibold">
                                            {nk.persen}%
                                        </p>
                                        <p className="text-gray-500">
                                            {/* {formatRupiah(nk.nominal)} formatRupiah */}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
                {hasilAnalisis ? ( <div
                    className="bg-white border border-gray-100 rounded-2xl shadow-sm p-5 text-sm leading-relaxed overflow-auto"
                    dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(hasilAnalisis),
                    }}
                />):null}
            </div>
        </div>
    );
};
