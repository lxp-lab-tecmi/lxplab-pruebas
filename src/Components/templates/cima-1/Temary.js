import React from 'react'
import { TemaryCard } from './TemaryCard'

import image from '../../../assets/Tema1imgx3.png'
import image2 from '../../../assets/Tema2imgx3.png'

const dataTemaries = [{
    noTopic: 1,
    title: "Tema 1",
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
    schedule: "00:00",
    image: image

},
{
    noTopic: 2,
    title: "Tema 2",
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
    schedule: "01:00",
    image: image2

},
{
    noTopic: 3,
    title: "Tema 3",
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
    schedule: "03:00",
    image: image2
},
{
    noTopic: 4,
    title: "Tema 4",
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
    schedule: "04:00",
    image: image

}]

export const Temary = () => {
    return (
        <div className="temary__container">
            <h2 className="h2s">temario</h2>
            {dataTemaries.map(data => (
                <TemaryCard topic={data}/>
            ))}
        </div>
    )
}
