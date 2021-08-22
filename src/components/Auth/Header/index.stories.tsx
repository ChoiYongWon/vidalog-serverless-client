import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Header  from './index';

export default {
    title: 'Auth/Register/Header',
    component: Header,
    decorators: [
        (Story) => (
            <div style={{ width : '500px' }}>
                <Story/>
            </div>
        ),
    ],
} as ComponentMeta<typeof Header>;

export const Default : React.VFC<{}> = () => {
    return <Header></Header>
}