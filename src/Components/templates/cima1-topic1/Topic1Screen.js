import React from 'react'
import { NavBarCima1 } from '../cima-1/NavBarCima1'
import { BackButton } from './BackButton'
import { DescriptT1 } from './DescriptT1'
import { ImageTopic1 } from './ImageTopic1'
import { TitleTopic1 } from './TitleTopic1'
import { CarrouselT1 } from './CarrouselT1'

export const Topic1Screen = () => {
    return (
        <div>
            <NavBarCima1 />
            <BackButton />
            <TitleTopic1 />
            <ImageTopic1 />
            <DescriptT1 />
            <CarrouselT1 />
        </div>
    )
}
