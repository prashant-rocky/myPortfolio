
import { eduacations } from "../../utils/data";
import { experiences } from "../../utils/data";
import Exprience from "../expriences";
import timelineBanner from '../../assets/timelineBanner.jpg'
import Eduacations from "../eduacations";

const Timeline = () => {
    return (
        <section className="timeline py-5 position-relative" style={{ backgroundImage: `url(${timelineBanner})` }}>
            <div className="container text-white position-relative">
                <div className="row">
                    <div className="col-md-6">
                        <h1 className='ff'>Eduacations</h1>
                        {
                            eduacations.map(education => {
                                return (

                                    <div className="col-md-12" key={education.id}>
                                         <Eduacations
                                            date={education.date}
                                            title={education.title}
                                            body={education.body}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-md-6">
                        <h1 className='ff'>expriences</h1>
                        {
                            experiences.map(experience => {
                                return (
                                    <div className="col-md-12" key={experience.id}>

                                        <Exprience
                                            date={experience.date}
                                            title={experience.title}
                                            body={experience.body}
                                        />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline;