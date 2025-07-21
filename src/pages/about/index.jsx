
import '../../assets/style.css'
import bgBanner from '../../assets/allBg.webp'
import Bio from "../../components/Bio";

const About = () =>{
    return(
        <>
        <section style={{backgroundImage : `url(${bgBanner})` }} className="allBanner pt-5">  
            <div className="container pt-5">
                <h2 className='display-1 text-capitalize text-white ff fw-bolder'>About Me.</h2>
            </div> 
        </section>
        <Bio />
        </>
    )
}
export default About;
