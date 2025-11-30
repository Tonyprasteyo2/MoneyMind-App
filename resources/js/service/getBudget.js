import axios from "axios";
import { API_URL } from "./firebase";

export const getBudget = async (user) => {
    if (!user) return { pemasukan: [], pengeluaran: [] };
    const token = await user.getIdToken();
    const result = await axios.get(`${API_URL}/budget-planing`, {
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
    });

    if (result.data.status !== 200) return { pemasukan: [], pengeluaran: [] };

    const all = result.data.data;

    const pengeluaran = all.filter((item) => item.total_pengeluaran > 0);
    const pemasukan = all.filter((item) => item.total_pemasukan > 0);

    return {
        pemasukan,
        pengeluaran,
    };
};
