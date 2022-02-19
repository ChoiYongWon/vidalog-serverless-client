import {useEffect} from "react"
import { recoil_Post } from "../../recoils"
import { useResetRecoilState } from "recoil"

const HomeContainer = () => {

    const setPostInfo = useResetRecoilState(recoil_Post.post)

    useEffect(()=>{
        setPostInfo()
    }, [setPostInfo])

    return <></>
}

export default HomeContainer