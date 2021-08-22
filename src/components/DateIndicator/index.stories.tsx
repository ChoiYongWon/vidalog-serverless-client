import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import DateIndicator from './index';

export default {
    title: 'Components/DateIndicator',
    component: DateIndicator,
    decorators: [
        (Story) => (
            <div style={{ width : '830px' }}>
                <Story/>
            </div>
        ),
    ],
} as ComponentMeta<typeof DateIndicator>;

export const Default : React.VFC<{}> = () => {
    const dateBubble = [
        "2021-8-5",
        "2021-7-4"
    ]
    return <DateIndicator dateBubble={dateBubble}/>
}


