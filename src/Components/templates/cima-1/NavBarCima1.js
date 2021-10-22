import React from 'react'
import blackLogo from '../../../assets/black-logo.svg'
import profile from '../../../assets/profile.svg'
import hamburguer from '../../../assets/hamburguer-menu.svg'

export const NavBarCima1 = () => {
    return (
        <>
            <section className="header">
                <div className="linitia">
                    <div className="header-logo">
                        <img src={blackLogo} alt="" />
                    </div>
                    <div className="header-simbles" id="header-simbles">
                        <div className="img-profile">
                            <img className="profile" src={profile} alt="" />
                        </div>
                        <div className="img-hamburguer">
                            <img className="hamburguer" src={hamburguer} alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
