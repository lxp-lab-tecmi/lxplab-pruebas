import React from 'react'
import { ExpertsData } from './ExpertsData'

import img from '../../../assets/Group 39x2.jpg'

const dataExperts = [{
    images:img,
    name: 'Ines Galvan',
    carreer:'Diseñadora Grafica',
    dataExpert:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qui.'
},
{
    images:img,
    name: 'Maria Ortiz',
    carreer:'Contadora',
    dataExpert:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qui.'
},
{
    images:img,
    name: 'Carmen Avilez',
    carreer:'Arquitecta',
    dataExpert:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, qui.'
}]

export const Experts = () => {
    return (
        <div>
            <h2 className='h2s'>Expertos</h2>
            {dataExperts.map(inf => (
                <ExpertsData expert={inf}/>
            ))}   
        </div>
    )
}
