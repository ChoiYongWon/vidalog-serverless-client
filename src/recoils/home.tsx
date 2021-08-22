import dayjs from 'dayjs'
import {atom} from "recoil"

export const editDate = atom({
    key : "editor/date",
    default : {
        year: dayjs().year(),
        month: dayjs().month() + 1,
        date: dayjs().date(),
    },
})
