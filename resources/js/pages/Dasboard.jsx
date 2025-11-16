import { FaArrowDown, FaArrowUp, FaWallet } from "react-icons/fa";
import { TransaksiUser } from "../components/TransaksiList";

export const formatRupiah = (data) => {
    if(data === null || data=== undefined) return "Rp.0";
    const number =Number(data);
    if(isNaN(number)) return"Rp.0";
    return number.toLocaleString("id-ID", {
        style: "currency",
        currency: "IDR",
        minimumFractionDigits:0
    });
};
const Dashboard = () => {
    const {
        totalTransaksi,
        totalPemasukan,
        totalPengeluaran,
        loading,
        getTransaksi,
        listTransaksi,
    } = TransaksiUser();
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
                <div className="bg-white rounded-xl p-6 shadow-sm mt-3">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-lg font-semibold text-gray-800">
                            Budget
                        </h2>
                        <a
                            href="#"
                            className="text-blue-600 text-sm font-medium"
                        >
                            Atur →
                        </a>
                    </div>
                    <div class="mb-6">
                        <p className="text-gray-700 mb-1">Makanan</p>
                        <div className="w-full bg-gray-200 h-2 rounded-full mb-1">
                            <div
                                className="bg-blue-500 h-2 rounded-full"
                                style={{ width: "12%" }}
                            ></div>
                        </div>
                        <div className="flex justify-between text-sm text-gray-600">
                            <span>Rp 115k / 1.0jt</span>
                            <span>12%</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Dashboard;
