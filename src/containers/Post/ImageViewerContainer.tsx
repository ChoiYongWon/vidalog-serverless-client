import React, {useEffect, useState} from "react"
import {useLocation} from "react-router-dom"
import ImageViewer from "../../components/Post/ImageViewer";
import {PostAPI} from "../../api/PostAPI";

const ImageViewerContainer = () => {
    const location = useLocation()
    const [images, setImages] = useState([])

    useEffect(()=>{
        const query = location.search.split("=")[1]
        PostAPI.getPostByDate(query).then(res=>res.json()).then((res)=>{
            console.log(res)
            setImages(res.imageUrls)
        })
        console.log(location)
    },[])

    return <ImageViewer imageUrls={images}/>
}

export default ImageViewerContainer