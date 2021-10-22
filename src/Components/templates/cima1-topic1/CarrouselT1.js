import React from 'react'
import { Carousel } from 'react-bootstrap'

import group2X2 from '../../../assets/Group2x2.jpg'

const itemT1 = [{image:group2X2}, {image:group2X2}, {image:group2X2}]

export const CarrouselT1 = () => {
    return (
        <div className='carouselT1-content'>
            <Carousel>
            {
                    itemT1.map(item => (
                        <Carousel.Item>
                            <img
                                className="carrouselT1"
                                src={item.image}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}
