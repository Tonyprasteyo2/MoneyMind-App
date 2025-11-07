import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-blue-800 to-blue-600 text-white px-4 overflow-hidden">
            <motion.h1
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{
                    scale: [1, 1.1, 1],
                    y: [0, -10, 0],
                    opacity: 1,
                    textShadow: [
                        "0 0 20px rgba(255,255,255,0.4)",
                        "0 0 60px rgba(255,255,255,0.7)",
                        "0 0 20px rgba(255,255,255,0.4)",
                    ],
                }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="text-[9rem] md:text-[12rem] font-extrabold drop-shadow-lg text-white select-none"
            >
                404
            </motion.h1>
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
                className="mt-6 bg-white/10 backdrop-blur-lg px-8 py-6 rounded-2xl shadow-lg text-center max-w-md w-full"
            >
                <h2 className="text-2xl font-semibold mb-2 text-white">
                    Halaman Tidak Ditemukan
                </h2>
                <p className="text-gray-200 mb-6">
                    Halaman yang Anda cari tidak ada atau telah dipindahkan ke
                    lokasi lain.
                </p>

                <Link
                    to="/"
                    className="inline-block bg-white text-blue-700 font-semibold px-6 py-2 rounded-lg shadow hover:bg-gray-100 transition duration-300"
                >
                    Kembali ke Beranda
                </Link>
            </motion.div>
        </div>
    );
};
