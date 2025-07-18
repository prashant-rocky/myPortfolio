import React from "react";
import '../../assets/style.css'
import serviceBanner from '../../assets/desk.jpg'
import { ServiceData } from "../../utils/data";
import ServiceCard from "../serviceCard";

const Services = () => {
    return (
        <section className="service position-relative" style={{ backgroundImage: `url(${serviceBanner})` }}>
            <div className="container text-center py-5">
                <h4 className='bioHeading'>Services</h4>
                <h1 className='ff text-white'>I'm Available For Hire</h1>
                <div className="row">
                    {
                        ServiceData.map(service => {
                            return(
                                <div className="col-md-4" key={service.id}>
                                    <ServiceCard
                                        icon = {service.icon}
                                        heading = {service.heading}
                                        description = {service.description}
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Services;