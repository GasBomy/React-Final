import React from "react";
import styles from '../stylesheets/Header.module.css'
import { Link } from 'react-router-dom'
import { TiThMenuOutline } from 'react-icons/ti';
import { useState } from 'react'

function Header(){

    const [menu,setMenu ] = useState (false)
    const toggleMenu =()=>{
        setMenu(!menu)
    }



    return(
        
	<header className={styles.cabecera}>
        <nav className={styles.navegador}>
            <span className={styles.span}><Link className={styles.logo} to={'/Home'}>BOMY.CODE</Link></span>
            <button className={styles.hamburguesa}
            onClick={ toggleMenu }>
                <TiThMenuOutline className={styles.menu} />
            </button>
            <ul className={`${styles.lista} ${menu ? `${styles.isActive}` : ''}`} >
                <li><Link to={'/home'}>Home</Link></li>
                <li><Link to={'/about'}>About</Link></li>
                <li><Link to={'/skills'}>Skills</Link></li>
                <li className={styles.navBar2}><Link>MyWorks</Link>
                    <ul>
                        <li><a  href='https://gasbomy.github.io/trabajos-para-proyecto/apis/' target="_blank" rel="noopener noreferrer">1-Api de Rick and Morty</a></li>
                        <li><a href='https://gasbomy.github.io/trabajos-para-proyecto/formulario%20para%20mi%20portafolio/' target="_blank" rel="noopener noreferrer">2-Formulario Nativo Js</a></li>
                        <li><a href='https://gasbomy.github.io/trabajos-para-proyecto/objetivo/' target="_blank"  rel="noopener noreferrer">3-Trabajo Maquetasion Tutoria</a></li>
                        <li><a href='https://gasbomy.github.io/trabajos-para-proyecto/nuevo%20objetivoo/' target="_blank" rel="noopener noreferrer">3-Trabajo Maquetasion 2 Tutoria</a></li>
                    </ul>
                </li>
                <li><Link to={'/contact'}>Contact</Link></li>
            </ul>
        </nav>
    </header>
 

    )
}
export default Header;