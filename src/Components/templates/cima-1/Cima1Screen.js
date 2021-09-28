import React from 'react'
import { Carrousel } from './Carrousel'
import { Intro } from './Intro'
import { NavBarCima1 } from './NavBarCima1'
import { Temary } from './Temary'

export const Cima1Screen = () => {
    return (
        <div>
            <NavBarCima1 />
            <Carrousel />
            <Intro />
            <Temary />
        </div>
    )
}
