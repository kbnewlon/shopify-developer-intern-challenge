import React from 'react';
import '@shopify/polaris';
import {Image} from 'cloudinary-react';

export default function Gallery(){
    return(
        <Image cloudName="kaylanewlon" publicId="sample" width="300" crop="scale"/>
    )
}