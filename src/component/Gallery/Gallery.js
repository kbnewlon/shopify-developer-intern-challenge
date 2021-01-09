import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';

export default function Gallery() {

    const [gallery, setGallery] = useState([])

    useEffect(() => {
        axios
            .get('https://res.cloudinary.com/kaylanewlon/image/upload/v1610168313/ShopifyInternshipChallenge')
            .then(res => {
                console.log(res)
                setGallery(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <CloudinaryContext cloudName="kaylanewlon">

            {
                gallery.map(data => {
                    return (
                        <div className="responsive" key={data.public_id}>
                            <div className="img">
                                <a target="_blank" href={`http://res.cloudinary.com/kaylanewlon/image/upload/${data.public_id}.jpg`}>
                                    <Image publicId={data.public_id}>
                                        <Transformation
                                            crop="scale"
                                            width="300"
                                            height="200"
                                            dpr="auto"
                                            responsive_placeholder="blank"
                                        />
                                    </Image>
                                </a>

                            </div>
                        </div>)
                })
            }
        </CloudinaryContext>
    )
}
