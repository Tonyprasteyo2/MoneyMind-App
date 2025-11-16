import Navbar from "./Navbar"
import { Outlet } from "react-router-dom";


const Layout = ()=>{
    return(
        <>
        <Navbar/>
        <main className="app-csh">
             <Outlet />
        </main>   
        </>
    )
}
export default Layout;