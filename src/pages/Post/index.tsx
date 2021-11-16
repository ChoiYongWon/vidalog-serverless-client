import React from "react"
import HeaderContainer from "../../containers/Header/HeaderContainer";
import PostLayout from "../../layouts/Post";
import ImageViewerContainer from "../../containers/Post/ImageViewerContainer";

const Post = () =>{
    return (
        <>
            <HeaderContainer/>
            <PostLayout>
                <ImageViewerContainer/>
            </PostLayout>


        </>
    )
}

export default Post