import React from "react";
import styles from '../stylesheets/Home.module.css'
import htmlilogo from '../images/htmli.svg'
import cssilogo from '../images/cssi.svg'
import jsilogo from '../images/jsi.svg'
import reactilogo from '../images/reacti.svg'
/* import yopixel from '../images/yo_pixel.png' */
import logper from '../images/logopersonal.jpeg'





function Home(){
    return(
        <div className={styles.cuerpo}>
	        <main className={styles.principal}>
		        <section className={styles.seccion1}>
			        <h1 className={styles.h1} >Hi, I'm Gaston Quiroga</h1>
			        <h2 className={styles.h2}>Frontend Developer</h2>
			        <p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia iste assumenda dignissimos, sunt ea eligendi modi minus consectetur neque quasi minima illum cum, optio, laboriosam officia non nulla perspiciatis magnam.</p>

			        <div>
				        <button className={styles.button}>Hire Me</button>
				        <button className={styles.button}>Let's Talk</button>
			        </div>
		        </section>
		        <section className={styles.seccion2}>
			        <picture className={styles.picture}>
				        <img className={styles.img} src={logper} alt="imagenpixel"/>
			        </picture>
		        </section>
	        </main>
	        <div className={styles.pro}>
		        <img className={styles.sv} src={htmlilogo} alt="logohtml"/>
		        <img className={styles.sv} src={cssilogo} alt="logocss"/>
		        <img className={styles.sv} src={jsilogo} alt="logojavascript"/>
		        <img className={styles.sv} src={reactilogo} alt="logoreact"/>
	        </div>
        </div>
    )
}
export default Home;