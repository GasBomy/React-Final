import React from 'react'
import styles from '../stylesheets/Skills.module.css'


function Skills(){
    return(
        <div className={styles.body}>
	        <h1 className={styles.h1}>My <span className={styles.skills} >Skills</span></h1>
	        <section className={styles.section}>
		        <div className={styles.caja1}>
			        <h2 className={styles.h2}>Coding Skills</h2>
			        <div className={styles.caja2}>
			            <div className={styles.caja3}>
				            <div className={styles.caja4}>
					            <span className={styles.span}>Html</span>
					            <span className={styles.span}>90%</span>
				            </div>
				            <div className={styles.barra}>
					            <div className={styles.rellenoHtml}></div>
				            </div>
			            </div>
			            <div className={styles.caja3}>
				            <div className={styles.caja4}>
					            <span className={styles.span}>Css</span>
					            <span className={styles.span}>60%</span>
				            </div>
				            <div className={styles.barra}>
					            <div className={styles.rellenoCss}></div>
				            </div>
			            </div>
			            <div className={styles.caja3}>
				            <div className={styles.caja4}>
					            <span className={styles.span}>JavaScript</span>
					            <span className={styles.span}>30%</span>
				            </div>
				            <div className={styles.barra}>
					            <div className={styles.rellenoJs}></div>
				            </div>
			            </div>
			            <div className={styles.caja3}>
				            <div className={styles.caja4}>
					            <span className={styles.span}>React</span>
					            <span className={styles.span}>30%</span>
				            </div>
				            <div className={styles.barra}>
					            <div className={styles.rellenoReact}></div>
				            </div>
			            </div>	
			        </div>
		        </div>
		        <div className={styles.caja1}>
			        <h2 className={styles.h2}>Personality</h2>
			        <div className={styles.caja2}>
			            <div className={styles.caja3}>
				            <div className={styles.caja4}>
					            <span className={styles.span}>Introvert</span>
					            <span className={styles.span}>Extrovert</span>        
				            </div>
				            <div className={styles.barra}>
					            <div className={styles.relleno1}></div>
				            </div>
			            </div>
			            <div className={styles.caja3}>
				            <div className={styles.caja4}>
					            <span className={styles.span}>Analitical</span>
					            <span className={styles.span}>Creative</span>        
				            </div>
				            <div className={styles.barra}>
					            <div className={styles.relleno2}></div>
				            </div>
			            </div>
			            <div className={styles.caja3}>
				            <div className={styles.caja4}>
					            <span className={styles.span}>Loyal</span>
					            <span className={styles.span}>Fickle</span>
				            </div>        
				            <div className={styles.barra}>
					            <div className={styles.relleno3}></div>
				            </div>
			            </div>
			            <div className={styles.caja3}>
				            <div className={styles.caja4}>
					            <span className={styles.span}>Passive</span>
					            <span className={styles.span}>Active</span>
				            </div>
				            <div className={styles.barra}>
					            <div className={styles.relleno4}></div>
				            </div>
			            </div>	
			        </div>
		        </div>	
            </section>
        </div>
    )
}
export default Skills