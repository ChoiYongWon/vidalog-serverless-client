import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import RegisterProgress from './index';

export default {
    title: 'Auth/RigisterProgress',
    component: RegisterProgress,

} as ComponentMeta<typeof RegisterProgress>;

const Template: ComponentStory<typeof RegisterProgress> = (args) => <RegisterProgress {...args} />;

export const Login_Step = Template.bind({});
Login_Step.args = {
    status : 0
};

export const Id_Step = Template.bind({});
Id_Step.args = {
    status : 1
};

export const Pw_Step = Template.bind({});
Pw_Step.args = {
    status : 2
};

export const Success_Step = Template.bind({});
Success_Step.args = {
    status : 3
};
