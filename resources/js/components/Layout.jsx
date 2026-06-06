import Navbar from "./Navbar"
import { Outlet } from "react-router-dom";


const Layout = ()=>{
    return(
        <>
        <Navbar/>
        <main className="app-csh">
             <Outlet />
<<<<<<< HEAD
        </main>
=======
        </main>   
>>>>>>> beta-versi
        </>
    )
}
export default Layout;