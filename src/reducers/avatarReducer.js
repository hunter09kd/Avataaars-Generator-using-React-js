import {avatarOptions} from "../data/avatar-option.js";
import DefaultAvatar from "../assets/images/avater.png";

export const initialState = {
    imageUrl: DefaultAvatar,
    options: avatarOptions,
    selectedOption: "male",
    copied: false,
};

export function avatarReducer(state, action) {
    switch (action.type) {
        case "SET_OPTION":
            return {...state, selectedOption: action.payload};
        case "GENERATE_AVATAR": {
            const avatarObj = initialState.options.find(option => option.value === state.selectedOption);
            let newImageUrl = DefaultAvatar;

            if (state.selectedOption === "male" || state.selectedOption === "female") {
                newImageUrl = `${avatarObj.url}/${Math.floor(Math.random() * 99)}.jpg`;
            } else {
                newImageUrl = `${avatarObj.url}${Date.now()}`;
            }

            return {...state, imageUrl: newImageUrl};
        }
        case "COPY":
            return {...state, copied: true};

        case "RESET_COPY":
            return {...state, copied: false};
        default:
            return state;
    }
}