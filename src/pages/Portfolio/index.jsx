import React from "react";
import Projects from "../../components/Projects";
import bgBanner from '../../assets/allBg.webp'
import '../../assets/style.css'

const Portfolio = () =>{
    return(
         <>
        <section style={{backgroundImage : `url(${bgBanner})` }} className="allBanner py-5">  
            <div className="container py-5">
                <h2 className='display-1 text-capitalize text-white ff fw-bolder'>My Work.</h2>
            </div> 
        </section>
        <Projects/>
        </>
    )
}
export default Portfolio;
