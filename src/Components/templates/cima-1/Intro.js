import React from 'react'
import { Link } from 'react-router-dom'

export const Intro = () => {
    return (
        <section class="main-hero--data">
            <h1>Lorem Impsum</h1>
            <p class="hero-context">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure
            </p>
            <Link className="hero-next" to="/cima1-topic1">Comenzar <span></span></Link>
        </section>
    )
}
