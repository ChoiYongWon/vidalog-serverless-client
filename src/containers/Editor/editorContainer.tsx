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

    
    const dataURLtoFile = useCallback((dataurl:any, fileName:string) => {
 
        let arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), 
            n = bstr.length, 
            u8arr = new Uint8Array(n);
            
        while(n--){
            u8arr[n] = bstr.charCodeAt(n);
        }
    
        return new File([u8arr], fileName, {type:mime});
        // eslint-disable-next-line
    },[])

    //이미지 리사이즈 및 최적화
    const optimizeImage = useCallback((image: any, file: any)=>{
        let canvas: any = document.createElement("canvas"),
        max_size = 1280,
        width = image.width,
        height = image.height;

        if (width > height) {
            if (width > max_size) {
            height *= max_size / width;
            width = max_size;
            }
        } else {
            if (height > max_size) {
            width *= max_size / height;
            height = max_size;
            }
        }
        canvas.width = width;
        canvas.height = height;
        canvas.getContext("2d").drawImage(image, 0, 0, width, height);
        const dataUrl = canvas.toDataURL(file.type);
        return dataURLtoFile(dataUrl, file.name)
        // eslint-disable-next-line
    }, [])
    


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




    //이미지 추가
    const onFileChange = useCallback((e:ChangeEvent<any>) => {

        let fileList = Array.prototype.slice.call(e.target.files)
        let promises = []
        for(let i=0;i<fileList.length;i++){
            promises.push(
                new Promise((resolve, reject)=>{
                    const reader:any  = new FileReader()
                    reader.onload = (e: any) => {
                    
                        const image = new Image();
                        image.className = "img-item";
                        image.src = e.target.result;
                        image.onload = (imageEvent) => {
                            // Resize the image
                            let optimized = optimizeImage(image, fileList[i]);
                            resolve({key: fileList[i].name, value: optimized})
                        }
                    }
                    reader.readAsDataURL(fileList[i]);
                })
            )
        }
        Promise.all(promises).then((data:any)=>{
            setImageFiles(data)
        })
            
            
            // arr.push({key: i.name, value: i})
            //중복이미지 제거 --> 아이폰은 안됨
            // if(!stagedImg.includes(i.name))
            //     arr.push({key: i.name, value: i})

        // setImageFiles((state)=>{
        //     let arr:any = []
        //     // let stagedImg = state.map(data=>data.key)
        //     for(let i of e.target.files){
        //         console.log(i)
        //         const reader:any  = new FileReader()
        //         reader.onload = (e: any) => {
        //             const image = new Image();
        //             image.className = "img-item";
        //             image.src = e.target.result;
        //             image.onload = (imageEvent) => {
        //               // Resize the image
        //               console.log("load")
        //               let optimized = optimizeImage(image, i);
        //               arr.push({key: i.name, value: optimized})
        //             };
        //             console.log("reader load")
        //         };
        //         reader.readAsDataURL(i);
                
        //         // arr.push({key: i.name, value: i})
        //         //중복이미지 제거 --> 아이폰은 안됨
        //         // if(!stagedImg.includes(i.name))
        //         //     arr.push({key: i.name, value: i})
        //         }
        //     return [...state, ...arr]
        // })
        // eslint-disable-next-line
    },[])

    //이미지 삭제
    const onDelete = useCallback((e:any) => {
        setImageFiles((state)=>{
            return state.filter((data, index)=>!checkedImage.includes(index+""))
        })
    }, [checkedImage])

    //미리보기 이미지 클릭시
    const onImageCheck = useCallback((e:any) => {
        const checkedData = e.currentTarget.dataset.key
        setCheckedImage((state)=>{
            return (state.includes(checkedData)) ? state.filter((data)=>data!==checkedData) : [...state, checkedData]
        })
    }, [])

    //취소, 뒤로가기
    const onCancelClick = useCallback(async (e:any)=>{
        e.preventDefault()
        history.push("/")
    }, [history])

    //업로드
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
            addNotification({text: "업로드 실패", duration: 3, status: "ERROR"})


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