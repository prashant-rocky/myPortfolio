import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ServiceCard = ({icon, heading, description}) => {
    return(
        <div className="serviceCard text-center text-white position-relative p-3 m-2">
            <FontAwesomeIcon icon={icon} size='4x' color='orangered'/>
            <h2>{heading}</h2>
            <p>{description}</p>
        </div>
    )
}

export default ServiceCard;