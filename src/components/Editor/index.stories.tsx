import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Editor from './index';

export default {
    title: 'Components/Editor',
    component: Editor,

} as ComponentMeta<typeof Editor>;

export const Default : React.VFC<{}> = () => {

    return <Editor/>
}


