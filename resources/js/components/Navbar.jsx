import { userAuth } from "./AuthPrivate";
import { auth } from "../service/firebase";
import { signOut } from "firebase/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { AiOutlineLogout } from "react-icons/ai";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { MdAddHome } from "react-icons/md";
export default function Navbar() {
    const { user } = userAuth();
    const navigate = useNavigate();
    const locationmenu = useLocation();
    const isActivemenu = (path) => locationmenu.pathname === path;
    const Keluar = async () => {
        await signOut(auth);
        navigate("/", { replace: true });
    };
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 p-1 rounded-b-lg mb-1 w-auto sm:max-7xl">
                <div className="p-4 container lg:mx-auto sm:w-full ">
                    <div className="flex justify-between items-center">
                        <h1 className="text-white text-xl font-bold flex items-center gap-2">
                            <FaMoneyBillTransfer className="text-green-400 text-2xl" />
                            <span>Money Tracker</span>
                        </h1>
                        <button
                            onClick={Keluar}
                            className="
                                    text-white 
                                    text-4xl         
                                    sm:text-2xl       
                                    xs:text-xl        
                                    mr-3 sm:mr-6       
                                    relative  sm:top-0    
                                    cursor-pointer 
                                    hover:text-gray-200 
                                    transition-all duration-200
                                "
                        >
                            <AiOutlineLogout />
                        </button>
                    </div>
                    <p className="text-white text-sm xs:text-base">
                        Kendalikan uang, pahami keuangan Anda
                    </p>
                </div>
            </div>
            <div className="bg-white shadow-lg rounded-lg mx-auto mb-3 container relative">
                <div className="flex flex-wrap items-center justify-start p-3 gap-2 sm:gap-4 relative">
                    <button
                        onClick={() => navigate("/dasboard")}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${isActivemenu("/dasboard")
                                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <MdAddHome
                            className={`size-6 ${isActivemenu("/dasboard")
                                    ? "text-white"
                                    : "text-blue-600"
                                }`}
                        />
                        <span className="text-sm sm:text-base">Dashboard</span>
                    </button>
                    <button
                        onClick={() => navigate("/laporan")}
                        className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 cursor-pointer ${isActivemenu("/laporan")
                                ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow"
                                : "text-gray-700 hover:bg-gray-100"
                            }`}
                    >
                        <HiOutlineDocumentReport
                            className={`size-6 ${isActivemenu("/laporan")
                                    ? "text-white"
                                    : "text-blue-600"
                                }`}
                        />
                        <span className="text-sm sm:text-base">Laporan</span>
                    </button>
                    <div className="absolute right-4 top-2 sm:top-3 flex items-center gap-2">
                        <img
                            src={`${user?.photoURL}`}
                            className="rounded-full size-8 sm:size-10"
                        />
                        <p className="hidden sm:block text-sm sm:text-base">
                            {user?.displayName}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
