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
        localStorage.setItem('selecterTheme', 'dark')
}
const LightMode =()=>{
    document.querySelector('body').setAttribute('d-theme', 'light')
    localStorage.setItem('selecterTheme', 'light')
}

const selecterTheme = localStorage.getItem('selecterTheme')
if (selecterTheme === 'light'){
    LightMode()
} /* else {
    DarkMode()
} */

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
    onChange={toggleThemes}
    defaultChecked={selecterTheme}/>
    <label htmlFor='activar' className={styles.label} onClick={ tsun } > { sl ? <MdOutlineDarkMode className={styles.sol} /> : <MdSunny className={styles.luna} />}</label>
</>
)
}
export default ChangesThemes
