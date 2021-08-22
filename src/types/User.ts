import {Role} from "./Auth";

export type User = {
    id: string | null,
    email: string | null,
    nickname: string | null,
    role: Role
}