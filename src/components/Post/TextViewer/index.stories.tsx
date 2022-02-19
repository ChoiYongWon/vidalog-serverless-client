import React from 'react';
import { ComponentMeta } from '@storybook/react';

import TextViewer from './index';

export default {
    title: 'TextViewer',
    component: TextViewer,
} as ComponentMeta<typeof TextViewer>;

export const Default : React.VFC<{}> = () => {

    return <TextViewer content={"일기"} date={"2022-02-20"} location={"대구"}/>
}


