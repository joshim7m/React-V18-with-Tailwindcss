import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MasterLayout = () => {
    return (
        <>
        <Navbar />
        <Outlet />
        </>
    )
}

export default MasterLayout;