import React from "react";
import "../css/app.css";
import { createRoot } from "react-dom/client";
import Dashboard from "./pages/Dasboard";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
    useLocation,
} from "react-router-dom";
import Login from "./pages/Login";
import { AuthProvider, RoutePrivate } from "./components/AuthPrivate";
import Laporan from "./pages/Laporan";
import Layout from "./components/Layout";
import { useEffect } from "react";
import { ProviderTransaksi } from "./components/TransaksiList";
import { ListKategoriProvider } from "./components/KategoriList";
import { registerSW } from "virtual:pwa-register";
import { messageListener } from "./service/firebase";
import Swal from "sweetalert2";
import { NotFound } from "./pages/NotFound";
import FormTransaksi from "./pages/FormTransaksi";
import ViewBudget from "./pages/ViewBudget";
const TitleHandler = () => {
    const location = useLocation();
    useEffect(() => {
        const titles = {
            "/": "Login ",
            "/dasboard": "Dashboard",
            "/laporan": "Laporan ",
            "/transaksi": "Transaksi ",
            "/budget": "Budget ",
            "*":"404 Not Found"
        };
        document.title = titles[location.pathname] || "404 Not Found | CashFlow";
    }, [location]);
    return null;
};

const App = () => {
    useEffect(() => {
        messageListener()
            .then((payload) =>
                Swal.fire({
                    icon: "info",
                    text: `${payload.notification.title}: ${payload.notification.body}`,
                    showConfirmButton: false,
                    timer: 1500,
                })
            )
            .catch((err) => console.log(err));
    }, []); 
    return (
        <AuthProvider>
            <ProviderTransaksi>
                <ListKategoriProvider>
                    <Router>
                        <TitleHandler />
                        <Routes>
                            <Route path="/" element={<Login />} />
                            <Route
                                element={
                                    <RoutePrivate>
                                        <Layout />
                                    </RoutePrivate>
                                }
                            >
                                <Route
                                    path="/dasboard"
                                    element={<Dashboard />}
                                />
                                <Route path="/laporan" element={<Laporan />} />
                                <Route path="/transaksi" element={<FormTransaksi />} />
                                <Route path="/budget" element={<ViewBudget />} />
                            </Route> 

                           <Route path="*" element={<NotFound />} />
                        </Routes>
                    </Router>
                </ListKategoriProvider>
            </ProviderTransaksi>
        </AuthProvider>
    );
};

const root = createRoot(document.getElementById("app"));
root.render(<App />);

const updateSW = registerSW({
    onNeedRefresh() {
        if (confirm("Versi baru tersedia. Muat ulang sekarang?")) {
            updateSW(true);
        }
    },
    onOfflineReady() {
        console.log("Aplikasi siap digunakan secara offline!");
    },
});
