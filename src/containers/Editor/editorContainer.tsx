import React, {ChangeEvent, useCallback, useEffect, useMemo, useRef, useState} from "react"
import Editor from "../../components/Editor";
import {PostAPI} from "../../api/PostAPI"
import {useHistory} from "react-router-dom";
import {useRecoilValue, useResetRecoilState, useSetRecoilState} from "recoil";
import {recoil_Home, recoil_Notification} from "../../recoils";
import dayjs from 'dayjs'
type ImageFilesType = {
    key: string, //파일명
    value: any
}

const EditorContainer = () => {
    //blob URL을 담고있음
    const [imageUrls, setImageUrls] = useState<string[]>([])
    //File 객체를 담고있음
    const [imageFiles, setImageFiles] = useState<ImageFilesType[]>([])
    const [textBoxStatus, setTextBoxStatus] = useState("stable")
    const [locationBoxStatus, setLocationBoxStatus] = useState("stable")
    const [checkedImage, setCheckedImage] = useState<string[]>([])
    const [isSending, setIsSending] = useState<boolean>(false)
    const FileInputRef = useRef<any>(null)
    const TextInputRef = useRef<any>(null)
    const LocationInputRef = useRef<any>(null)
    const editDate = useRecoilValue(recoil_Home.editDate)
    const resetEditDate = useResetRecoilState(recoil_Home.editDate)
    const addNotification = useSetRecoilState(recoil_Notification.notification_status)
    const history = useHistory()


    useEffect(()=>{
        return ()=>{
            resetEditDate()
        }
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{
        let time: any;
        if(textBoxStatus==="error"){
            time = setTimeout(()=>{
                setTextBoxStatus("stable")
            }, 200)
        }
        return ()=>{
            clearInterval(time)
        }
    }, [textBoxStatus])

    useEffect(()=>{
        let time: any;
        if(locationBoxStatus==="error"){
            time = setTimeout(()=>{
                setLocationBoxStatus("stable")
            }, 200)
        }
        return ()=>{
            clearInterval(time)
        }
    }, [locationBoxStatus])

    useEffect(()=>{
        FileInputRef.current.value = ""
        return ()=>{
            //unmount 될때 메모리 누수 방지
            imageUrls.forEach((url)=> URL.revokeObjectURL(url))
        }
        // eslint-disable-next-line
    }, [imageUrls])

    useEffect(()=>{
        setImageUrls((state)=>{
            const arr : string[] = []
            for(let i in imageFiles){
                arr.push(URL.createObjectURL(imageFiles[i].value))
            }
            return arr
        })
        setCheckedImage([])
    }, [imageFiles])

    const getDateToString = useMemo(()=>{
        const dateTemplate = `${editDate.year}-${editDate.month}-${editDate.date}`
        const days = ["일", "월", "화", "수", "목", "금", "토"]
        const tmpDate = dayjs(dateTemplate)
        const day =  days[tmpDate.day()]
        return `${editDate.year}. ${editDate.month}. ${editDate.date} ${day}`
    }, [editDate])

    const onFileChange = useCallback((e:ChangeEvent<any>) => {
        setImageFiles((state)=>{
            let arr = []
            // let stagedImg = state.map(data=>data.key)
            for(let i of e.target.files){
                arr.push({key: i.name, value: i})
                //중복이미지 제거 --> 아이폰은 안됨
                // if(!stagedImg.includes(i.name))
                //     arr.push({key: i.name, value: i})
            }
            return [...state, ...arr]
        })
    },[])

    const onDelete = useCallback((e:any) => {
        setImageFiles((state)=>{
            return state.filter((data, index)=>!checkedImage.includes(index+""))
        })
    }, [checkedImage])

    const onImageCheck = useCallback((e:any) => {
        const checkedData = e.currentTarget.dataset.key
        setCheckedImage((state)=>{
            return (state.includes(checkedData)) ? state.filter((data)=>data!==checkedData) : [...state, checkedData]
        })
    }, [])

    const onCancelClick = useCallback(async (e:any)=>{
        e.preventDefault()
        history.push("/")
    }, [history])

    const onSuccessClick = useCallback(async (e:any)=>{
        e.preventDefault()
        if(!TextInputRef.current.value || !imageFiles.length){
            addNotification({text: "일기를 작성해주세요", duration: 3, status: "ERROR"})
            setTextBoxStatus("error")
            return
        }
        if(!LocationInputRef.current.value){
            addNotification({text: "장소를 설정해주세요", duration: 3, status: "ERROR"})
            setLocationBoxStatus("error")
            return
        }
        const data = new FormData()
        for(let image in imageFiles){
            // console.log(imageFiles[image])
            data.append("images", imageFiles[image].value)
        }
        data.append("content", TextInputRef.current.value)
        data.append("date", `${editDate.year}-${editDate.month}-${editDate.date}`)
        data.append("location", LocationInputRef.current.value)
        setIsSending(true)
        PostAPI.uploadPost(data).then(()=>{
            addNotification({text: "업로드 완료", duration: 3, status: "SUCCESS"})
            history.push("/")
        }).catch(async (res:Response)=>{
            setIsSending(false)
            console.log("res2", res)
            if(res.status===413) addNotification({text: "업로드 실패, 용량이 너무 큽니다", duration: 3, status: "ERROR"})
            else addNotification({text: "업로드 실패", duration: 3, status: "ERROR"})


        })
        // eslint-disable-next-line
    }, [imageFiles, history, editDate])

    return <Editor
        editDate={getDateToString}
        imageUrls={imageUrls}
        onFileChange={onFileChange}
        onImageCheck={onImageCheck}
        onDelete={onDelete}
        checkedImage={checkedImage}
        onCancelClick={onCancelClick}
        onSuccessClick={onSuccessClick}
        fileInputRef = {FileInputRef}
        textInputRef = {TextInputRef}
        locationInputRef={LocationInputRef}
        textBoxStatus={textBoxStatus}
        locationBoxStatus={locationBoxStatus}
        isSending={isSending}
    />
}

export default EditorContainer