import {atom} from "recoil"

export const post = atom({
    key : "post",
    default : {
        content: "",
        images: [],
        location: "",
        date: ""
    },
})

