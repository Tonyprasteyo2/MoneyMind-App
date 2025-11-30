const TrenGrafik = ({ data }) => {
    if (!data || !data.tren_7_hari) {
        return (
            <div className="w-full max-w-sm bg-white shadow-sm p-5 rounded-2xl border border-gray-100">
                <p className="text-gray-500 text-sm">Memuat grafik...</p>
            </div>
        );
    }
    const dayMap = {
        Sunday: "minggu",
        Monday: "senin",
        Tuesday: "selasa",
        Wednesday: "rabu",
        Thursday: "kamis",
        Friday: "jumat",
        Saturday: "sabtu",
    };
    const trenConverted = {};
    Object.keys(data.tren_7_hari).forEach((hariEnglish) => {
        const hIndo = dayMap[hariEnglish] || hariEnglish.toLowerCase();
        trenConverted[hIndo] = data.tren_7_hari[hariEnglish];
    });
    const hari = [
        "minggu",
        "senin",
        "selasa",
        "rabu",
        "kamis",
        "jumat",
        "sabtu",
    ];

    const short = {
        minggu: "Minggu",
        senin: "Senin",
        selasa: "Selasa",
        rabu: "Rabu",
        kamis: "Kamis",
        jumat: "Jumaat",
        sabtu: "Sabtu",
    };
    const maxValue = Math.max(...Object.values(trenConverted));
    const highestDayID =
        dayMap[data.highest_day] || data.highest_day.toLowerCase();

    return (
        <div className="w-full bg-white shadow-sm p-5 rounded-2xl border border-gray-100 h-full">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Tren Pengeluaran 7 Hari
            </h3>

            <div className="flex justify-between items-end h-32 mb-5">
                {hari.map((d) => {
                    const amount = trenConverted[d] || 0;
                    const height =
                        maxValue > 0 ? (amount / maxValue) * 80 + 8 : 8;

                    return (
                        <div
                            key={d}
                            className="flex flex-col justify-end items-center gap-2"
                        >
                            <div
                                className={`w-3 rounded-full transition-all duration-300 ${
                                    d === highestDayID
                                        ? "bg-red-500"
                                        : amount > 0
                                        ? "bg-blue-500"
                                        : "bg-gray-300"
                                }`}
                                style={{ height: `${height}px` }}
                            />
                            <span className="text-[11px] text-gray-600">
                                {short[d]}
                            </span>
                        </div>
                    );
                })}
            </div>

            <p className="text-sm text-gray-700">
                Tertinggi:{" "}
                <span className="font-semibold text-red-500">
                    {short[highestDayID]}
                </span>
            </p>
        </div>
    );
};

export default TrenGrafik;
