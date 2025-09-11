export default function ActionButton({label, icon, onClick, variant}) {
    const variantClasses = {
        change:
            "bg-gradient-to-tr from-rose-500 to-orange-600 hover:from-rose-600 hover:to-orange-700",
        download:
            "bg-gradient-to-tr from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700",
        copy:
            "bg-gradient-to-tr from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700",
    };

    return (
        <button
            onClick={onClick}
            className={`text-white px-4 py-1.5 rounded-full flex items-center gap-2 shadow-lg transform hover:scale-105 transition-transform duration-300 ${variantClasses[variant]}`}
        >
            {icon && <i className={icon}></i>}
            <span>{label}</span>
        </button>
    );
}