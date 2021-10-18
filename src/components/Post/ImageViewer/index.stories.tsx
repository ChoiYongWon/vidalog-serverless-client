import React from 'react';
import { ComponentMeta } from '@storybook/react';

import ImageViewer from './index';

export default {
    title: 'ImageViewer',
    component: ImageViewer,
} as ComponentMeta<typeof ImageViewer>;

export const Default : React.VFC<{}> = () => {
    const dummyUrl = [
        "https://vidalog-img-storage.s3.ap-northeast-2.amazonaws.com/postImage/363c4327-c5c7-4c91-bcc1-94a907daeed0.JPG",
        "https://vidalog-img-storage.s3.ap-northeast-2.amazonaws.com/postImage/363c4327-c5c7-4c91-bcc1-94a907daeed0.JPG",
        "https://vidalog-img-storage.s3.ap-northeast-2.amazonaws.com/postImage/363c4327-c5c7-4c91-bcc1-94a907daeed0.JPG",
    ]
    return <ImageViewer imageUrls={dummyUrl}/>
}


