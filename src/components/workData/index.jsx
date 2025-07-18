import { worksData } from "../../utils/data";
const WorkData = () => {
    return(
        <section className="workData bg-white py-5">
            <div className="container py-3">
                <div className="row">
                    {
                        worksData.map(workData => {
                            return(
                                <div className="col-3 text-center" key={workData.id}>
                                    <h1 className='ff p-0 m-0'>{workData.counter}</h1>
                                    <p>{workData.title}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}
export default WorkData;