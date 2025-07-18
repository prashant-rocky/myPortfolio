import React from "react";
import '../../assets/style.css'
import bgBanner from '../../assets/allBg.webp'
import ContactForm from "../../components/contactForm";

const Contact = () =>{
    return(
        <>
        <section style={{backgroundImage : `url(${bgBanner})` }} className="allBanner pt-5">  
            <div className="container pt-5">
                <h2 className='display-1 text-capitalize text-white ff fw-bolder'>Contact To me.</h2>
            </div> 
        </section>
        <ContactForm/>
        </>
    )
}
export default Contact;
