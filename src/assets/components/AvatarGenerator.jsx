export default function AvatarGenerator() {
    return (
        <div
            className="w-full max-w-md rounded-2xl shadow-xl backdrop-blur-xl border border-slate-70 p-10 flex flex-col items-center gap-8 animate__animated animate__slideInUp animate__faster">
            <img src="" alt="Vite Logo"
                 className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"/>
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-wide">Avater Generator</h1>
                <p className="text-slate-300">Generate unique avatars with ease. Customize your look and express
                    your style!</p>
            </div>
            <div className="w-full space-y-4">

                <div
                    className="w-full bg-slate-900/60 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500">

                </div>
            </div>
            <div className="w-full flex justify-center gap-4">

            </div>
        </div>
    )
}