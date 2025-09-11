import AvatarGenerator from "./assets/components/AvatarGenerator.jsx";
import {ToastContainer} from "react-toastify";

export default function App() {
    return (
        <>
            <div
                className="min-h-screen px-2 md:px-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center text-white overflow-hidden animate__animated animate__fadeIn">
                <AvatarGenerator/>
            </div>
            <ToastContainer/>
        </>
    )
}