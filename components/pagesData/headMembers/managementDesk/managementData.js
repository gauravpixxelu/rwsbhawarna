import Image from "next/image"
import FounderStyle from "../founder.module.css";

const ManagementData = () => {
    return (
        <section className={FounderStyle.founder_sec}>
            <div className="container">
                <Image
                    src="/images/mandatoryDisclosure/mandatory-banner.jpg"
                    alt="Icons"
                    width={1920}
                    height={430}
                    style={{ width: '100%', height: 'auto' }}
                />
                <h3>While educating the minds of our youth, we must not forget to educate their heart.</h3>
                <p>Success comes to those who work hard and stays with those who do not rest on past laurels. Rainbow World School is an amalgamation of exceptionally dedicated and talented teachers, an experienced and efficient management, and a safe and nurturing environment that is spread across academics, sports, artistic and social opportunities for its students.</p>
                <p>We believe in creating a culture within the school where all our stakeholders are confident in receiving the best in education.</p>
                <p>Since our student population is multi-cultural and multi linguistic, we teach our students, the importance of love, respect and acceptance for each other’s language and culture. Discipline, values and integrity are the foundations of this Institution. We always encourage, persuade and mentor our students to achieve their highest potential and our mission is to provide a platform for the same. Rainbow World School, Bhawarna has a vision to produce conscientious, confident and productive humans who will go out into the world and lead.</p>
                <h6>Dr. J.R. Kashyap</h6>
                <p className={FounderStyle.designation}>Founder and Visionary</p>
            </div>
        </section>
    );
};

export default ManagementData;