import { useRecoilValue } from "recoil";
import ImageViewer from "../../components/Post/ImageViewer";
import {recoil_Post} from "../../recoils/index"


const ImageViewerContainer = () => {
    const postInfo = useRecoilValue(recoil_Post.post)

    return <ImageViewer imageUrls={postInfo.images}/>
}

export default ImageViewerContainer