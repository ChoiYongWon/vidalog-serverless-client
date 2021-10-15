import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Notification from './index';
import RegisterProgress from "../Auth/RegisterProgress";

export default {
    title: 'Notification',
    component: Notification,
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

export const Success = Template.bind({});
Success.args = {
    status:"SUCCESS",
    text:"로그인 성공",
    duration:5,
    onUnMount: ()=>{}
};

export const Error = Template.bind({});
Error.args = {
    status:"ERROR",
    text:"업로드에 실패했습니다.",
    duration:5,
    onUnMount: ()=>{}
};

export const Warning = Template.bind({});
Warning.args = {
    status:"WARNING",
    text:"토큰이 만료되었습니다",
    duration:5,
    onUnMount: ()=>{}
};


