import React from 'react'
import blackLogo from '../../../assets/black-logo.svg'

export const NavBarCima1 = () => {
    return (
        <>
            <section className="header">
                <div className="linitia">
                    <div className="header-logo">
                        <img src={blackLogo} alt="" />
                    </div>
                    <div className="header-simbles" id="header-simbles">
                        <span className="profile"></span>
                        <div className="img-hamburguer" id="img-js">
                            <img className="hamburguer" src="./assets/hamburguer-menu.svg" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
