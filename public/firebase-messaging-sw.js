importScripts(
    "https://www.gstatic.com/firebasejs/10.14.0/firebase-app-compat.js"
);
importScripts(
    "https://www.gstatic.com/firebasejs/10.14.0/firebase-messaging-compat.js"
);
firebase.initializeApp({
    apiKey: "AIzaSyBVvQbF0e2VZgLMwlWwyOYYicWsyd527qw",
    authDomain: "appcashflow-24596.firebaseapp.com",
    projectId: "appcashflow-24596",
    storageBucket: "appcashflow-24596.firebasestorage.app",
    messagingSenderId: "1063434393739",
    appId: "1:1063434393739:web:79aadcabdb225692179c8e",
    measurementId: "G-XFCWT8FG5V",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
    const notificationTitle = payload.notification?.title || "Notifikasi";
    const notificationOptions = {
        body: payload.notification?.body,
        icon: "/logo192.png",
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});
