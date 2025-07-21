
import '../../assets/style.css'
import Banner from '../../components/banner';
import Bio from '../../components/bio';
import Services from '../../components/services';
import Projects from '../../components/Projects';
import Timeline from '../../components/Timeline';
import WorkData from '../../components/workData';
import Review from '../../components/Review';
import ContactForm from '../../components/contactForm';

const Home = () => {
    return(
        <>
        <Banner />
        <Bio />
        <Services/>
        <Projects/>
        <Timeline/>
        <WorkData/>
        <Review/>
        <ContactForm/>
        </>
    )
}

export default Home;