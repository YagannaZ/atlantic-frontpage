import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import Alogo from './logo.png'

export default function Header({ contenido }) {

    const {menu, logo, userOptions} = contenido
    return (
        <div className="header">
            
                <div className="izquierda">
                    
                    <div className="icons">
                        <FontAwesomeIcon icon={faBars} />
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </div>
                    
                    
                    <a>{menu[0]}</a>
                    <a>{menu[1]}</a>
                    <a>{menu[2]}</a>
                </div>
    
                <div className="logo">
                    <img src={Alogo}></img>
                    <h1>{logo}</h1>
                    
                </div>
    
                <div className="derecha">
                    <a>{userOptions[0]}</a>
                    <btn className="btnSub">{userOptions[1]}</btn>
                </div>


        </div>
    )
}