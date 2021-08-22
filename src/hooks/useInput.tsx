import React, {useState, useCallback} from "react";

export const useInput = (init: string) => {
    const [text, setText] = useState(init)
    const onChange = useCallback((e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setText(e.target.value)
    }, [])
    const onReset = useCallback((e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setText("")
    },[])
    return [text, onChange, onReset] as [string, typeof onChange, typeof onReset]
}