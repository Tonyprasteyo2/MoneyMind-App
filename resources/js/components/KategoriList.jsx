import { createContext, useEffect, useState } from "react";
import { userAuth } from "./AuthPrivate";
import axios from "axios";
import Swal from "sweetalert2";
import { API_URL } from "../service/firebase";

export const KategoriList = createContext();

export const ListKategoriProvider = ({ children }) => {
    const { user } = userAuth();
    const [kategoriBaru, setKategoriBaru] = useState("");
    const [kategoriAll, setKategoriAll] = useState([]);
    const [selectedIcon, setSelectedIcon] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
 
    const getKategoriAll = async () => {
        const token = await user.getIdToken();
        try {
            const res = await axios.get(`${API_URL}/list-kategori`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });
            setKategoriAll(res.data.data);
        } catch (error) {
            // console.log(error);
        }
    };

    const addKategori = async () => {
        const token = await user.getIdToken();
        if (!kategoriBaru || !selectedIcon) {
            Swal.fire({
                icon: "info",
                text: "kategori & icon harap di isi",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        const data = { name: kategoriBaru, icon: selectedIcon };
        try {
            const response = await axios.post(
                `${API_URL}/tambah-kategori`,
                data,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            if (response.data.success) {
                Swal.fire({
                    icon: "success",
                    title: "Kategori berhasil ditambahkan",
                    showConfirmButton: false,
                    timer: 1500,
                });
                setShowPopup(false);
                setKategoriBaru("");
                setSelectedIcon(null);
                getKategoriAll();
            }
        } catch (error) {
            if (error.response) {
                Swal.fire({
                    icon: "error",
                    text: error.response.data.message,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        }
    };

    useEffect(() => {
        if (user) getKategoriAll();
    }, [user]);

    return (
        <KategoriList.Provider
            value={{
                kategoriBaru,
                setKategoriBaru,
                kategoriAll,
                addKategori,
                selectedIcon,
                setSelectedIcon,
                showPopup,
                setShowPopup,
            }}
        >
            {children}
        </KategoriList.Provider>
    );
};
