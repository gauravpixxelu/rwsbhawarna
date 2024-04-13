import Image from "next/image"
import AdmissionStyle from './admission.module.css'

const services = [
    {
        id: 1,
        image: '/images/overview/dummy-img.jpg',
        title: 'Bus Service',
        text: 'Transport managers can view the whole school bus transportation process and control different aspects of vehicles easily.',
    },
    {
        id: 2,
        image: '/images/overview/dummy-img.jpg',
        title: 'Sports',
        text: 'The Rainbow World School provides a number of indoor and outdoor sports facilities to the students. Gymnastic, Taekwondo and Archery are the main attractions.',
    },
    {
        id: 3,
        image: '/images/overview/dummy-img.jpg',
        title: 'Teachers',
        text: 'The teaching staff is highly competent and qualified with a number of added skills to their testimonials.',
    },
    {
        id: 4,
        image: '/images/overview/dummy-img.jpg',
        title: 'Class Rooms',
        text: 'The School has well furnished, spacious and well ventilated class rooms with white boards, lecture platforms',
    },
    {
        id: 5,
        image: '/images/overview/dummy-img.jpg',
        title: 'Language',
        text: 'Beside English and Hindi, German is also offered as a foreign language which broadens the empathy and imaginative factuality and cultural outlook of children.',
    }
];

const AdminssionServicesSection = () => {
    return (
        <>
            <section className={AdmissionStyle.ourdream_sec}>
                <div className="container">
                    <div className={AdmissionStyle.ourdream_sec_hdng}>
                        <h3>The Dream Of Yesterday Is The Hope Of Today & <span>The Reality Of Tomorrow</span></h3>
                    </div>
                    <div className={`${AdmissionStyle.row} row`}>
                        {services.map((services) => (
                            <div className="col-md-3" key={services.id}>
                                <div className={AdmissionStyle.ourdream_boxes}> 
                                    <Image
                                        src={services.image}
                                        alt="Icons"
                                        width={1000}
                                        height={1000}
                                        style={{ width: '100%', height: 'auto'}}
                                    />
                                    <h6>{services.title}</h6>
                                    <p>{services.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default AdminssionServicesSection