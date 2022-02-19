import React from "react"
import HeaderContainer from "../../containers/Header/HeaderContainer";
import PostLayout from "../../layouts/Post";
import ImageViewerContainer from "../../containers/Post/ImageViewerContainer";
import TextViewerContainer from "../../containers/Post/TextViewerContainer";
import PostContainer from "../../containers/Post/PostContainer"

const Post = () =>{
    return (
        <>
            <HeaderContainer/>
            <PostLayout>
                <PostContainer/>
                <ImageViewerContainer/>
                <TextViewerContainer/>
            </PostLayout>


        </>
    )
}

export default Post