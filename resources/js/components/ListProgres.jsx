import { useEffect, useState } from "react";
import { formatRupiah } from "../pages/Dasboard";

export const ListProgres = ({ title, data }) => {
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
        }, 200);
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
                                style={{ width: `${progress[index]}%` }}
                            />
                        </div>

                        <div className="flex justify-between text-sm text-gray-600">
                            <span>
                                {formatRupiah(total)} / {formatRupiah(item.budget)}
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
