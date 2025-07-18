import '../../assets/style.css'
import aboutImg from '../../assets/about.webp';
import '../../assets/style.css'
import resume from '../../assets/prashant resume.pdf'
import MyWork from '../work';
import Data from '../../utils/data';

const Bio = () => {
    return (
        <>
            <section>
                <div className="container py-5">
                    <div className="row py-md-5">
                        <div className="col-md-5">
                            <img src={aboutImg} alt="error" className="aboutImg" />
                        </div>
                        <div className="col-md-7">
                            <h4 className='bioHeading'>about me</h4>
                            <h1 className='ff'>A QUICK BIO</h1>
                            <p>I am a passionate frontend developer with hands-on experience in building responsive and user-friendly web interfaces. I recently completed an internship at Factonix Technologies, where I worked on real-world projects using modern web technologies like HTML, CSS, JavaScript, and React.</p>

                            <p>I am a 2024 graduate with a background in science, having completed my 12th in 2021 and 10th in 2019. Alongside my academic journey, I’ve developed strong skills in frontend development, with hands-on experience through an internship at Factonix Technologies.</p>

                            <button className='mybtn'><a href={resume} download className='mybtn text-decoration-none'>DOWNLOAD PDF</a></button>
                        </div>
                    </div>
                    <div className="row">
                        {
                            Data.map((el, i) => {
                                return (
                                    <div className='col-md-4' key={el.id}>
                                        <MyWork
                                            title={el.workName}
                                            exprience={el.workExprience}
                                            progress={el.workExprience}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>

        </>
    )
}

export default Bio;