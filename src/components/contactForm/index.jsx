import { contactDetails } from "../../utils/data";
import ContactDetailForm from "../contactDetailsForm";
const ContactForm = () => {
    const submitPage = (e) => {
        e.preventdefault();
    }
    return (
        <section className="contact text-center py-5">
            <div className="container px-md-5">
                <h4 className='bioHeading'>Have Question?</h4>
                <h1 className='ff'>Contact Me Now</h1>
                <form>
                    <div className="row px-md-5 pb-3">
                        <div className="col-md-6">
                            <input type="text" placeholder="Your name" className="formBox w-100 p-2 px-5  my-3" required/>
                            <input type="email" placeholder="your email" className="formBox w-100 p-2  px-5 my-3" required/>
                            <input type="tel" placeholder="your phone number" className="formBox w-100 p-2 px-5  my-3" required/>
                        </div>
                        <div className="col-md-6">
                            <textarea rows={7} className="formBox w-100 mt-md-3 p-3" placeholder="your message" required></textarea>
                        </div>
                    </div>
                        <input type="submit" className="mybtn d-lg-inline" onSubmit={submitPage}/>
                </form>
                <div className="row pt-5">
                    {
                        contactDetails.map(contactDetail => {
                            return (
                                <div className="col-md-4" key={contactDetail.id}>
                                    <ContactDetailForm
                                    title = {contactDetail.title}
                                    body = {contactDetail.body}
                                    icon={contactDetail.icon}
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
export default ContactForm;