import React from 'react'
import { ExpertsData } from './ExpertsData'
import { Link } from 'react-router-dom'


import img from '../../../assets/Group 39x2.jpg'
import { Carousel } from 'react-bootstrap'

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
            <Carousel>
            {dataExperts.map(inf => (
                <Carousel.Item>
                    <ExpertsData expert={inf}/>
                </Carousel.Item>
            ))}
            </Carousel>   
            <Link className="hero-next" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Comenzar <span></span></Link>
        </div>
    )
}
