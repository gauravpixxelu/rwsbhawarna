import Image from "next/image"
import ContactStyle from './contact.module.css'
import ContactForm from "./contactForm";

const ContactData = () => {
    return (
        <section className={ContactStyle.contact_sec}>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className={ContactStyle.form_block}>
                            <h3>Contact us</h3>
                            <p>We welcome your questions, comments, and inquiries. Please feel free to reach out to us using the information below.</p>
                            <ContactForm />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <Image
                            src="/images/contact/contact.jpg"
                            alt="Contact"
                            className={ContactStyle.image_cnt}
                            width={800}
                            height={800}
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <div className={ContactStyle.contactdata_sec}>
                            <div className={ContactStyle.details_box}>
                                <Image
                                    src="/images/contact/phone.svg"
                                    alt="Icons"
                                    width={800}
                                    height={800}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div className={ContactStyle.details_box_data}>
                                    <h5>Phone Number</h5>
                                    <p>01894-248111, 9882588999</p>
                                </div>
                            </div>

                            <div className={ContactStyle.details_box}>
                                <Image
                                    src="/images/contact/mail.svg"
                                    alt="Icons"
                                    width={800}
                                    height={800}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div className={ContactStyle.details_box_data}>
                                    <h5>Email Address</h5>
                                    <p>rainbowworldschool@gmail.com</p>
                                </div>
                            </div>

                            <div className={ContactStyle.details_box}>
                                <Image
                                    src="/images/contact/map.svg"
                                    alt="Icons"
                                    width={800}
                                    height={800}
                                    style={{ width: '100%', height: 'auto' }}
                                />
                                <div className={ContactStyle.details_box_data}>
                                    <h5>Location</h5>
                                    <p>RWS, Village Bari, P.O Bhawarna, Teh. Palampur , District Kangra,Himachal Pradesh.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactData;