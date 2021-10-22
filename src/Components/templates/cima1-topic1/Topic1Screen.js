import React from 'react'
import { NavBarCima1 } from '../cima-1/NavBarCima1'
import { BackButton } from './BackButton'
import { TitleTopic1 } from './TitleTopic1'

export const Topic1Screen = () => {
    return (
        <div>
            <NavBarCima1 />
            <BackButton />
            <TitleTopic1 />
        </div>
    )
}
