import {atom} from "recoil"
import {Auth, Enum_AuthStatus, Enum_RegisterProgress, Role} from "../types/Auth";

export const authenticate = atom<Auth>({
    key : "auth",
    default : Auth.LOGOUT,
})

export const role = atom<Role>({
    key : "role",
    default : Role.GUEST,
})
//Auth 상태
export const auth_status = atom<Enum_AuthStatus>({
    key : "authStatus",
    default : Enum_AuthStatus.Login
})

// 로그인 관련 상태
export const login_id = atom<string>({
    key : "login_id",
    default : ""
})

export const login_pw = atom<string>({
    key : "login_pw",
    default : ""
})

export const login_btnStatus = atom<boolean>({
    key : "loginBtnStatus",
    default : false
})

export const register_status = atom<Enum_RegisterProgress>({
    key : "registerStatus",
    default : Enum_RegisterProgress.EMAIL
})

export const email_email = atom<string>({
    key : "emailEmail",
    default : ""
})

export const email_availableEmail = atom<boolean>({
    key : "emailAvailableEmail",
    default : false
})

export const email_availableCode = atom<boolean>({
    key : "emailAvailableCode",
    default : false
})

export const email_authorization = atom<boolean>({
    key : "emailAuthorization",
    default : false
})

export const email_authCode = atom<string>({
    key : "emailAuthCode",
    default : ""
})

export const email_btnStatus = atom<boolean>({
    key : "emailBtnStatus",
    default : false
})

export const id_id = atom<string>({
    key : "idId",
    default : ""
})

export const id_availableId = atom<boolean>({
    key : "idAvailableId",
    default : false
})

export const id_btnStatus = atom<boolean>({
    key : "idBtnStatus",
    default : false
})

export const pw_pw = atom<string>({
    key : "pwPw",
    default : ""
})

export const pw_rePw = atom<string>({
    key : "pwRePw",
    default : ""
})


export const pw_availablePw = atom<boolean>({
    key : "pwAvailablePw",
    default : false
})

export const pw_btnStatus = atom<boolean>({
    key : "pwBtnStatus",
    default : false
})
