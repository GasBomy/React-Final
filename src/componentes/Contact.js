import React from "react";
import styles from '../stylesheets/Contact.module.css'
import { useState } from 'react';


function Contact(){

const [username, setUsername] = useState("")
const [email, setEmail] = useState("")
const [movil, setMovil] = useState("")
const [emailsub, setEmailsub] = useState("")
const [asunto, setAsunto] = useState("")
const [error, setError] = useState(false)

const handleSubmit =(e)=>{
	e.preventDefault()


	if ( username === "" && email === "" && movil === "" && emailsub === "" && asunto === ""){
		setError(true)
		return
	}

}


    return(
        <div className={styles.body}>
	        <main className={styles.main}>
		        <h1 className={styles.h1}>Contact Me!</h1>
		        <form className={styles.form} onSubmit={handleSubmit}>
			        <div className={styles.caja1}>
				        <div className={styles.caja2}>
					        <label className={styles.label} htmlFor="username" >Full Name</label>
					        <input className={styles.input} type="text" value={username} id="username" placeholder="UserName"
							onChange={e=>setUsername(e.target.value)}/>
				        </div>
				        <div className={styles.caja2}>
					        <label className={styles.label} htmlFor="email">Email Address</label>
					        <input className={styles.input} type="email" value={email} id="email" placeholder="Email"
							onChange={e=>setEmail(e.target.value)}/>
				        </div>
			        </div>
			        <div className={styles.caja1}>
				        <div className={styles.caja2}>
					        <label className={styles.label} htmlFor="movil">Mobile Number</label>
					        <input className={styles.input} type="number" value={movil} id="movil" placeholder="Movil"
							onChange={e=>setMovil(e.target.value)}/>
				        </div>
				        <div className={styles.caja2}>
					        <label className={styles.label} htmlFor=" emailsub">Email Subject</label>
					        <input className={styles.input} type="email" value={emailsub} id="emailsub" placeholder="EmailSubject"
							onChange={e=>setEmailsub(e.target.value)}/>
				        </div>
			        </div>
			        <div className={styles.cajatext1}>
				        <div className={styles.cajatext2}>
					        <textarea className={styles.textarea} value={asunto} id="asunto" placeholder="Asunto" onChange={e=>setAsunto(e.target.value)}></textarea>
				        </div>
				
			        </div>
			        <div>
				        <button className={styles.button} type="submit">Submit</button>
				        <button className={styles.button} type="reset">Reset</button>
			        </div>
					{error && <p className={styles.label}> Todos los campos son necesarios</p>}
		        </form>
	        </main>
        </div> 
    )
}
export default Contact;