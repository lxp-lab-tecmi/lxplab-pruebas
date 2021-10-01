import React from 'react'
import { ExpertsData } from './ExpertsData'

import img from '../../../assets/Group 39x2.jpg'

const dataExperts = [{
    image:img,
    name: 'Ines Galvan'
},
{
    image:img
},
{
    image:img
}]

export const Experts = () => {
    return (
        <>
            <h2 className>Expertos</h2>
            {dataExperts.map(data => (
                <ExpertsData topic={data} />
            ))}   
        </>
    )
}
