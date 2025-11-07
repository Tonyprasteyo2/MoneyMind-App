import { useEffect, useState, useContext } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import { userAuth } from "./AuthPrivate";
import { API_URL } from "../service/firebase";
import { KategoriList } from "./KategoriList";
import { FaTrashAlt } from "react-icons/fa";

const Modal = ({ transaksi, onClose, onSave, onDeleted, onEditmode }) => {
    const { user } = userAuth();
    const { kategoriAll } = useContext(KategoriList);
    const [note, setNote] = useState(transaksi.note);
    const [amount, setAmount] = useState(transaksi.amount);
    const [type, setType] = useState(transaksi.type);
    const [kategori, setKategori] = useState(
        transaksi.list_kategori?.kategori_id ?? ""
    );
    useEffect(() => {
        if (transaksi?.list_kategori?.kategori_id) {
            setKategori(transaksi.list_kategori.kategori_id);
        }
    }, [transaksi]);
    const handleSave = async () => {
        if (!kategori) {
            Swal.fire({
                icon: "warning",
                text: "Kategori belum dipilih!",
                showConfirmButton: false,
                timer: 1500,
            });
            return;
        }
        const token = await user.getIdToken();
        try {
            const updatedData = {
                note,
                amount: parseInt(amount),
                type,
                kategori: parseInt(kategori),
            };
            await axios.post(
                `${API_URL}/transaksi-update/${transaksi.id}`,
                updatedData,
                {
                    headers: { Authorization: `Bearer ${token}` },
                }
            );
            Swal.fire({
                icon: "success",
                text: "Transaksi berhasil diperbarui!",
                showConfirmButton: false,
                timer: 1500,
            });
            onSave();
            onEditmode(false);
            onClose();
        } catch (error) {
            Swal.fire({
                icon: "error",
                text:
                    error.response?.data?.message ||
                    "Terjadi kesalahan saat update transaksi.",
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    const handleDelete = async () => {
        const token = await user.getIdToken();
        Swal.fire({
            title: "Apakah anda ingin menghapus list transaksi anda?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Ya",
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axios.delete(
                        `${API_URL}/remove-transaksi/${transaksi.id}`,
                        {
                            headers: {
                                Authorization: `Bearer ${token}`,
                                Accept: "application/json",
                            },
                        }
                    );
                    Swal.fire({
                        icon: "success",
                        text: res.data.message,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    onClose();
                    onDeleted();
                } catch (error) {
                    Swal.fire("Error", "Gagal menghapus transaksi", "error");
                }
            }
        });
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-xl shadow-lg w-11/12 max-w-md">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-t-xl p-4">
                    <h2 className="text-lg font-semibold">Detail Catatan</h2>
                    <p className="text-sm text-blue-100">
                        Edit Detail Transaksi Anda
                    </p>
                </div>

                <div className="p-3 space-y-2">
                    <label className="block font-medium mb-2">Catatan</label>
                    <textarea
                        value={note}
                        className="w-full border border-indigo-600 rounded p-2 mb-2 h-25 resize-none"
                        onChange={(e) => setNote(e.target.value)}
                    ></textarea>

                    <label className="block font-medium mb-2">
                        Jumlah Nominal
                    </label>
                    <input
                        type="number"
                        className="w-full border border-indigo-600 rounded p-2 mb-2"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <div className="grid grid-cols-2 gap-2 mb-2">
                        <div>
                            <label className="block font-medium mb-2">
                                Tipe
                            </label>
                            <select
                                value={type}
                                onChange={(e) => setType(e.target.value)}
                                className="w-full border border-indigo-600 rounded mb-2 p-2"
                            >
                                <option value="pemasukan">Pemasukan</option>
                                <option value="pengeluaran">Pengeluaran</option>
                            </select>
                        </div>

                        <div>
                            <label className="block font-medium mb-2">
                                Kategori
                            </label>
                            <select
                                value={kategori}
                                onChange={(e) =>
                                    setKategori(parseInt(e.target.value))
                                }
                                className="w-full border border-indigo-600 rounded p-2 bg-gray-100 uppercase"
                            >
                                <option value="">Pilih kategori</option>
                                {kategoriAll.map((k) => (
                                    <option
                                        key={k.kategori_id}
                                        value={k.kategori_id}
                                    >
                                        {k.name.toUpperCase()}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                <div className="flex justify-between items-center p-3">
                    <button
                        className="text-2xl text-red-600 hover:scale-110"
                        onClick={handleDelete}
                    >
                        <FaTrashAlt />
                    </button>
                    <div className="flex gap-2">
                        <button
                            className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                            onClick={onClose}
                        >
                            Batal
                        </button>
                        <button
                            className="px-4 py-2 bg-green-500 text-white rounded-lg"
                            onClick={handleSave}
                        >
                            Update
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
