import { ProjectImg } from "../../utils/data";
import '../../assets/style.css'
const Projects = () => {
    return (
        <section>
            <div className="container text-center py-5">
                <h4 className='bioHeading'>Portfolio</h4>
                <h1 className='ff'>I love what i do</h1>
                <div className="row">
                    {
                        ProjectImg.map(project => {
                            return (
                                <div className="col-md-4" key={project.id}>
                                    <div className="projectBox position-relative text-center m-1"
                                        style={{ backgroundImage: `url(${project.ImgSrc})` }}>
                                        <a href={project.webLink}>
                                            <div className="hoverBox bg-black position-absolute top-0 start-0 h-100 w-100 text-white pt-5">
                                                <p className="pt-5">{project.name}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            </div>
        </section>
    )
}

export default Projects;