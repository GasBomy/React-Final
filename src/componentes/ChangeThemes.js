import React from 'react'
import styles from '../stylesheets/ChangesThemes.module.css'
import { MdOutlineDarkMode, MdSunny } from 'react-icons/md'

import { useState } from 'react'


function ChangesThemes(){ 

const [sl, setSl] = useState(false)

const tsun =()=>{
    setSl(!sl)
}


const DarkMode =()=>{
        document.querySelector('body').setAttribute('d-theme', 'dark')
}
const LightMode =()=>{
    document.querySelector('body').setAttribute('d-theme', 'light')
}

const toggleThemes=(e)=>{
    if(e.target.checked) LightMode();
    else DarkMode()
}


return(
<>
    <input
    id='activar'
    type='checkbox'
    className={styles.button} 
    onChange={toggleThemes}/>
    <label htmlFor='activar' className={styles.label} onClick={ tsun } > { sl ? <MdOutlineDarkMode className={styles.sol} /> : <MdSunny className={styles.luna} />}</label>
</>
)
}
export default ChangesThemes
