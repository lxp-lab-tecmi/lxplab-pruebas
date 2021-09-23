import React from 'react'
import { Carrousel } from './Carrousel'
import { Intro } from './Intro'
import { NavBarCima1 } from './NavBarCima1'

export const Cima1Screen = () => {
    return (
        <div>
            <NavBarCima1 />
            <Carrousel />
            <Intro />
        </div>
    )
}
