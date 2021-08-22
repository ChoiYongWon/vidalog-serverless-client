import {atom} from "recoil"
import {User} from "../types/User";
import {Role} from "../types/Auth";

export const user = atom<User>({
    key : "user",
    default : {
        id: null,
        email: null,
        nickname: null,
        role: Role.GUEST
    },
})
