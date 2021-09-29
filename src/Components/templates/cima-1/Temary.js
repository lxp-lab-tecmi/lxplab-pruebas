import React from 'react'
import { TemaryCard } from './TemaryCard'

import image from '../../../assets/Tema1imgx3.png'
import image2 from '../../../assets/Tema2imgx3.png'
import book from '../../../assets/Book.svg'
import video from '../../../assets/Video.svg'
import microphone from '../../../assets/microphone.svg'
import checklist from '../../../assets/Circul-check.svg'

const dataTemaries = [{
    noTopic: 1,
    title: "Tema 1",
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
    schedule: "00:00",
    image: image,
    book: book,
    video: video,
    microphone: microphone,
    checklist: checklist
},
{
    noTopic: 2,
    title: "Tema 2",
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
    schedule: "01:00",
    image: image2,
    book: book,
    video: video,
    microphone: microphone,
    checklist: checklist
},
{
    noTopic: 3,
    title: "Tema 3",
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
    schedule: "03:00",
    image: image2,
    book: book,
    video: video,
    microphone: microphone,
    checklist: checklist
},
{
    noTopic: 4,
    title: "Tema 4",
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit ",
    schedule: "04:00",
    image: image,
    book: book,
    video: video,
    microphone: microphone,
    checklist: checklist
}]

export const Temary = () => {
    return (
        <div className="temary__container">
            <h2>temario</h2>
            {dataTemaries.map(data => (
                <TemaryCard topic={data}/>
            ))}
        </div>
    )
}
