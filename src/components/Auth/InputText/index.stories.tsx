import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import InputText  from './index';

export default {
    title: 'Auth/InputText',
    component: InputText,
    decorators: [
        (Story) => (
            <div style={{ width : '200px' }}>
                <Story/>
            </div>
        ),
    ],
} as ComponentMeta<typeof InputText>;

export const Text : React.VFC<{}> = () => {
    const [text, setText] = useState("")

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    return <InputText onChange={onChange} value={text} width={"100%"} label={"이름"} autoFocus={true} type={"text"}/>
}

export const Password : React.VFC<{}> = () => {
    const [text, setText] = useState("")

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    return <InputText onChange={onChange} value={text} width={"100%"} label={"비밀번호 확인"} autoFocus={true} type={"password"}/>
}

export const Error : React.VFC<{}> = () => {
    const [text, setText] = useState("")

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value)
    }
    return <InputText error={true} errorMsg={"알맞지 않는 형식입니다."} onChange={onChange} value={text} width={"100%"} label={"이메일"} autoFocus={true} type={"text"}/>
}


