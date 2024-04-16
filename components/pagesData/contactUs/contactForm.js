import FormInput from "@/components/comman/form/input";
import FormTextarea from "@/components/comman/form/textarea";
import ContactStyle from './contact.module.css'

const ContactForm = () => {
    return (
        <form className={ContactStyle.form_sec}>
            <div className="row">
                <div className="col-md-6">
                    <FormInput labelname="First Name" type="text" name="fname" placeholder="First Name" values="" required />
                </div>

                <div className="col-md-6">
                    <FormInput labelname="Last Name" type="text" name="lname" placeholder="Last Name" values="" required />
                </div>

                <div className="col-md-12">
                    <FormInput labelname="Email Address" type="email" name="email" placeholder="Email Address" values="" required />
                </div>

                <div className="col-md-12">
                    <FormInput labelname="Phone Number" type="tel" name="phonenumber" placeholder="Phone Number" values="" required />
                </div>

                <div className="col-md-12">
                    <FormInput labelname="Subject" type="text" name="subject" placeholder="Subject" values="" />
                </div>

                <div className="col-md-12">
                    <FormTextarea labelname="Message" name="message" placeholder="Leave us Message" values="" />
                </div>

                <div className="col-md-12">
                    <div className="form-button">
                        <button type="submit" className="custom-btn"><span>Submit</span></button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default ContactForm;