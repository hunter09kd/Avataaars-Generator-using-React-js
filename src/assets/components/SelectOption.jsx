export default function SelectOption({options, value, onOptionChange}) {
    return (
        <select name="" id=""
                className="w-full bg-slate-900/60 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500"
                value={value}
                onChange={(e) => onOptionChange(e.target.value)}
        >
            {options.map(option => (
                <option key={option.id} value={option.value}>{option.label}</option>
            ))}
        </select>
    )
}