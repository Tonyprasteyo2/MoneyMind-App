import { createContext, useContext, useEffect, useState } from "react";
import { userAuth } from "./AuthPrivate";
import { API_URL } from "../service/firebase";
import axios from "axios";

const TransaksiList = createContext();
export const ProviderTransaksi = ({ children }) => {
    const { user } = userAuth();
    const [listTransaksi, setListTransaksi] = useState([]);
    const [totalTransaksi, setTotalTransaksi] = useState(0);
    const [totalPemasukan, setTotalPemasukan] = useState(0);
    const [totalPengeluaran, setTotalPengeluaran] = useState(0);
    const [loading, setLoading] = useState(true);

    const getTransaksi = async () => {
        if (!user) return;
        const token = await user.getIdToken();
        try {
            const res = await axios.get(`${API_URL}/list-transaksi`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            const data = res.data.data;
            const pemasukan = data
                .filter((t) => t.type === "pemasukan")
                .reduce((sum, t) => sum + parseInt(t.amount), 0);

            const pengeluaran = data
                .filter((t) => t.type === "pengeluaran")
                .reduce((sum, t) => sum + parseInt(t.amount), 0);
            setListTransaksi(data);
            setTotalPemasukan(pemasukan);
            setTotalPengeluaran(pengeluaran);
            setTotalTransaksi(pemasukan + pengeluaran);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };  
    useEffect(() => {
        getTransaksi();
    }, [user]);
    return (
        <TransaksiList.Provider
            value={{
                listTransaksi,
                totalTransaksi,
                totalPemasukan,
                totalPengeluaran,
                loading,
                getTransaksi,
            }}
        >
            {children}
        </TransaksiList.Provider>
    );
};
export const TransaksiUser = () => useContext(TransaksiList);


