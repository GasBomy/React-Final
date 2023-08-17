import React from "react";
import styles from'../stylesheets/About.module.css'
import yobla from '../images/yoblack4.png'
import { useState } from 'react'


function About(){
	const [read, setRead] = useState (false)
	const [Texto, setTexto]= useState('Read More')
	const [Texto2, setTexto2]= useState('Read Less')


	const toggleRead = (e)=>{
		
		setRead(!read)
	}



    return(
        <div className={styles.body}>
	        <main className={styles.main}>
		        <h1 className={styles.h1}>About <span className={styles.span}>Me</span> </h1>
		        <div className={styles.contenedorImg}><img className={styles.img} src={yobla} alt="fotoface"/></div>
		        <h3 className={styles.h3}>Frontend Developer!</h3>
		        <p className={`${styles.p} ${read ? `${styles.active}` : ''}`}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dolorum necessitatibus porro similique et, temporibus at inventore vel distinctio rem provident explicabo officia unde aspernatur, suscipit ipsam, omnis quae. Ut? Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis dolorum necessitatibus porro similique et, temporibus at inventore vel distinctio rem provident explicabo officia unde aspernatur, suscipit ipsam, omnis quae. Ut? Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. 	</p>
		        <button className={styles.button}   onClick={ ()=>{ toggleRead() }}>{read ? Texto2 : Texto}</button>
	        </main>
        </div>
    )
}
export default About