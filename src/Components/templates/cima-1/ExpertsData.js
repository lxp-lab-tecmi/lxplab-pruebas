import React from 'react'

export const ExpertsData = ({expert}) => {
    return (
        <>
        <section className="footer-experts">
            <article className="footer-experts--information">
                <img src={expert.images} alt='Experto'/>
                <div>
                    <h3>{expert.name}</h3>
                    <p className="subtitle">{expert.carreer}</p>
                    <p className="expert-info">{expert.dataExpert}</p>
                </div>
            </article>
        </section>
        </>
    )
}
