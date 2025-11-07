// src/service/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
import axios from "axios";
const firebaseConfig = {
    apiKey: "AIzaSyBVvQbF0e2VZgLMwlWwyOYYicWsyd527qw",
    authDomain: "appcashflow-24596.firebaseapp.com",
    projectId: "appcashflow-24596",
    storageBucket: "appcashflow-24596.firebasestorage.app",
    messagingSenderId: "1063434393739",
    appId: "1:1063434393739:web:79aadcabdb225692179c8e",
    measurementId: "G-XFCWT8FG5V",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const messaging = getMessaging(app);
export const API_URL = import.meta.env.VITE_API_URL || "http://127.0.0.1:8000"; 
export const BE_OCR= import.meta.env.VITE_BE_OCR || "http://localhost:3001/";


export const permissionToken = async (user) => {
    try {
        const notificationPermission = await Notification.requestPermission();
        if (notificationPermission !== "granted") {
            Swal.fire({
                title: "Notifikasi tidak di izinkan",
                icon: "info",
                showConfirmButton: false,
                timer: 12500,
            });
            return;
        }
        const tokenFCM = await getToken(messaging, {
            vapidKey: import.meta.env.VAPID_KEY,
        });
        if (!tokenFCM) {
            Swal.fire({
                title: "gagal ambil token",
                icon: "info",
                showConfirmButton: false,
                timer: 12500,
            });
            return;
        }
        const idToken = await user.getIdToken();
        const res = await axios.post(
            `${API_URL}/token-fcm`,
            {
                user_id: user.uid,
                token: tokenFCM,
            },
            {
                headers: {
                    Authorization: `Bearer ${idToken}`,
                    "Content-Type": "application/json",
                },
            }
        );
        if (res.status !== 200) {
            throw new Error(`Gagal simpan token: ${res.status}`);
        }
    } catch (error) {
        console.log(error);
    }
};
export const messageListener = () =>
    new Promise((resolve, reject) => {
        try {
            onMessage(messaging, (payload) => {
                resolve(payload);
            });
        } catch (e) {
            reject(e);
        }
    });
if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/firebase-messaging-sw.js")
        // .then((reg) => console.log("Firebase SW registered:", reg))
        // .catch((err) => console.error("Firebase SW error:", err));
}
