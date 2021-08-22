import React from "react"
import EditorContainer from "../../containers/Editor/editorContainer";
import EditorLayout from "../../layouts/Editor";
import HeaderContainer from "../../containers/Header/HeaderContainer";
const Edit = () =>{
    return (
        <>
            <HeaderContainer/>
            <EditorLayout>
                <EditorContainer/>
            </EditorLayout>
        </>

    )
}

export default Edit