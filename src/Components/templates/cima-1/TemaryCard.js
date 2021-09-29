import React from 'react'



export const TemaryCard = ({topic}) => {
    return (
        <article className="main-temario--container">
            <section class="main-temario--container-top">
                <img src={topic.image} alt="" />
                <div>
                <h3 class ="tema-name">{topic.title}</h3>
                <p class ="tema-description">{topic.description} </p>
                </div>
            </section>
            <section class="main-temario--container-bottom">
                    <p class="time">{topic.schedule} hrs</p>
                    <div>
                        <span class="book"></span>
                        <span class="video"></span>
                        <span class="microphone"></span>
                        <span class="checklist"></span>
                    </div>
                    {/*<a href=""><span class="start-topic"></span></a>*/}
                </section>
        </article>
    )
}
