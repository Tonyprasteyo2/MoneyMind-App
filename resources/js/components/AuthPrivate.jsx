import { onAuthStateChanged } from "firebase/auth";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../service/firebase";
import { Navigate } from "react-router-dom";
import { motion } from "framer-motion";

const AuthContext = createContext();

// route private
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const subAuth = onAuthStateChanged(auth, (userfirebase) => {
            setUser(userfirebase);
            setLoading(false);
        });
        return () => subAuth();
    }, []);
    return (
        <AuthContext.Provider value={{ user, loading }}>
            {children}
        </AuthContext.Provider>
    );
};
export const userAuth = () => useContext(AuthContext);

export const RoutePrivate = ({ children }) => {
    const { user, loading } = userAuth();
    if (loading) {
        const LoadingText = "memuat...";
        return (
            <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
                <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                <div className="mt-5 flex space-x-1 text-3xl font-semibold capitalize">
                    {LoadingText.split("").map((char, i) => (
                        <motion.span
                            key={i}
                            initial={{ y: 0 }}
                            animate={{ y: [-5, 0, -5] }}
                            transition={{
                                duration: 0.6,
                                repeat: Infinity,
                                repeatDelay: LoadingText.length * 0.08,
                                delay: i * 0.08,
                            }}
                            className="inline-block text-sky-600"
                        >
                            {char}
                        </motion.span>
                    ))}
                </div>
            </div>
        );
    }
    if (!user) {
        return <Navigate to="/" replace />;
    }
    return children;
};
