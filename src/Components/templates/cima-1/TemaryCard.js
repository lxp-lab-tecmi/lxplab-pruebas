import React from 'react'



export const TemaryCard = ({topic}) => {
    return (
        <article className="main-temario--container">
            <section className="main-temario--container-top">
                <img src={topic.image} alt="" />
                <div>
                <h3 className ="tema-name">{topic.title}</h3>
                <p className ="tema-description">{topic.description} </p>
                </div>
            </section>
            <section className="main-temario--container-bottom">
                    <p className="time">{topic.schedule} hrs</p>
                    <div>
                        <span className="book"></span>
                        <span className="video"></span>
                        <span className="microphone"></span>
                        <span className="checklist"></span>
                    </div>
                    {/*<a href=""><span class="start-topic"></span></a>*/}
                </section>
        </article>
    )
}