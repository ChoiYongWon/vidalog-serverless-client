import { useRecoilValue } from "recoil";
import TextViewer from "../../components/Post/TextViewer";
import {recoil_Post} from "../../recoils/index"


const TextViewerContainer = () => {
    const postInfo = useRecoilValue(recoil_Post.post)

    return <TextViewer content={postInfo.content} date={postInfo.date} location={postInfo.location}/>
}

export default TextViewerContainer