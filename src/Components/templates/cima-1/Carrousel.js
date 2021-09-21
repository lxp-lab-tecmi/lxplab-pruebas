import React from 'react'
import { Carousel } from 'react-bootstrap'

import group2X2 from '../../../assets/Group2x2.jpg'
import group48X2 from '../../../assets/Group48x2.jpg'

export const Carrousel = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="carrousel__img"
                        src={group2X2}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carrousel__img"
                        src={group48X2}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
