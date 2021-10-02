import React from 'react'

export const ExpertsData = ({expert}) => {
    return (
        <section className="footer-experts">
            <article>
                <img src={expert.images} alt='Experto'/>
                <div>
                    <h3>{expert.name}</h3>
                    <p>{expert.carreer}</p>
                    <p>{expert.dataExpert}</p>
                </div>
            </article>
        </section>
    )
}
