import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Calendar from './index';

export default {
    title: 'Components/Calendar',
    component: Calendar,

} as ComponentMeta<typeof Calendar>;

export const Default : React.VFC<{}> = () => {

    return <Calendar viewMonth={9} loading={true}/>
}


