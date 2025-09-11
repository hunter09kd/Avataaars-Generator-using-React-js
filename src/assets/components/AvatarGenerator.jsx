import {useEffect, useReducer} from "react";
import {avatarReducer, initialState} from "../reducers/avatarReducer";
import SelectOption from "./SelectOption.jsx";
import ActionButton from "./ActionButton.jsx";

export default function AvatarGenerator() {
    const [state, dispatch] = useReducer(avatarReducer, initialState);

    useEffect(() => {
        dispatch({type: "GENERATE_AVATAR"});
    }, [state.selectedOption]);

    return (
        <div
            className="w-full max-w-md rounded-2xl shadow-xl backdrop-blur-xl border border-slate-70 p-10 flex flex-col items-center gap-8 animate__animated animate__slideInUp animate__faster">
            <img src={state.imageUrl} alt="Avatar Image"
                 className="w-32 h-32 rounded-full border-4 border-slate-700 shadow-lg object-cover"/>
            <div className="text-center">
                <h1 className="text-3xl font-bold tracking-wide">Avatar Generator</h1>
                <p className="text-slate-300">Generate unique avatars with ease. Customize your look and express
                    your style!</p>
            </div>
            <div className="w-full space-y-4">
                <SelectOption options={state.options} value={state.selectedOption}
                              onOptionChange={(val) => dispatch({type: "SET_OPTION", payload: val})}/>
                <div
                    className="w-full bg-slate-900/60 text-white rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-slate-500">
                    {state.imageUrl}
                </div>
            </div>
            <div className="w-full flex justify-center gap-4">
                <ActionButton
                    label="Change"
                    icon="ri-arrow-right-up-line"
                    onClick={() => dispatch({type: "GENERATE_AVATAR"})}
                    variant="change"
                />
                <ActionButton
                    label="Download"
                    icon="ri-download-line"

                    variant="download"
                />

                <ActionButton
                    label={state.copied ? "Copied!" : "Copy"}
                    icon="ri-file-copy-line"

                    variant="copy"
                />
            </div>
        </div>
    )
}