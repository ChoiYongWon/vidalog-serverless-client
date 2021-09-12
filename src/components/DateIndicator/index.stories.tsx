import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DateIndicator from './index';

export default {
    title: 'Components/DateIndicator',
    component: DateIndicator,

} as ComponentMeta<typeof DateIndicator>;

export const Default : React.VFC<{}> = () => {
    const dateBubble = [
        "2021-8-5",
        "2021-9-12"
    ]
    return <DateIndicator dateBubble={dateBubble}/>
}


