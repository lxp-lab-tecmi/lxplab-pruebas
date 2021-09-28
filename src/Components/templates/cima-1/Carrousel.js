import React from 'react'
import { Carousel } from 'react-bootstrap'

import group2X2 from '../../../assets/Group2x2.jpg'
import group48X2 from '../../../assets/Group48x2.jpg'

const items = [{ image: group2X2 }, { image: group48X2 }]

export const Carrousel = () => {
    return (
        <div>
            <Carousel>
                {
                    items.map(item => (
                        <Carousel.Item>
                            <img
                                className="carrousel__img"
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
