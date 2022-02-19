import {useEffect} from "react"
import {useSetRecoilState} from "recoil"
import {useLocation} from "react-router-dom"
import {PostAPI} from "../../api/PostAPI";
import {recoil_Post} from "../../recoils/index"

const PostContainer = () => {
    const location = useLocation()
    const setPostInfo = useSetRecoilState(recoil_Post.post)

    useEffect(()=>{
        const query = location.search.split("=")[1]
        PostAPI.getPostByDate(query).then(res=>res.json()).then((res)=>{
            setPostInfo({
                date: query,
                location: res.location,
                content: res.content,
                images: res.imageUrls
            })
        })
    },[location, setPostInfo])

    return <></>
}

export default PostContainer