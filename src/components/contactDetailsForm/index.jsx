
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const ContactDetailForm = ({title, body, icon}) => {
    return(
        <div className="contactDetail">
            <FontAwesomeIcon icon={icon} size='3x' color='orangered'/>
            <p className="p-0 m-0">{title}</p>
            <p className='cursiveFont'>{body}</p>
        </div>
    )
}

export default ContactDetailForm;