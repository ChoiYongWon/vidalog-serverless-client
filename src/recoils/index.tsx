import {
    authenticate,
    role,
    auth_status,
    login_id,
    login_pw,
    login_btnStatus,
    register_status,
    email_email,
    email_availableEmail,
    email_availableCode,
    email_authorization,
    email_btnStatus,
    email_authCode,
    id_availableId,
    id_id,
    id_btnStatus,
    pw_pw,
    pw_rePw,
    pw_availablePw,
    pw_btnStatus
} from "./auth"

import {
    user
} from "./user"

import {
    editDate
} from "./home";

export const recoil_Home = {
    editDate
}

export const recoil_User = {
    user
}

export const recoil_Auth = {
    authenticate,
    role,
    auth_status,
    login_id,
    login_pw,
    login_btnStatus,
    register_status,
    email_email,
    email_availableEmail,
    email_availableCode,
    email_authorization,
    email_btnStatus,
    email_authCode,
    id_availableId,
    id_id,
    id_btnStatus,
    pw_pw,
    pw_rePw,
    pw_availablePw,
    pw_btnStatus
}