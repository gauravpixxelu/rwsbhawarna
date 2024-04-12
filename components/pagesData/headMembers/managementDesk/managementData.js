import Image from "next/image"
import FounderStyle from "../founder.module.css";

const ManagementData = () => {
    return (
        <section className={FounderStyle.founder_sec}>
            <div className="container">
                <Image
                    src="/images/headMembers/management.jpg"
                    alt="Icons"
                    width={1920}
                    height={430}
                    style={{ width: '100%', height: 'auto' }}
                />
                <h3>The goal of education is advancement of knowledge and the dissemination of truth.</h3>
                <p>One of the most outstanding achievements of the past century has been the realization that education is an indispensable asset of every individual, every community and every nation. It can accelerate the march towards better and higher quality of life .Education alone can convert the dream of peace, freedom and social justice into a practical reality.</p>
                <p>My heart fills with utmost pleasure as I perceive the growth and accomplishments made at the school. The school has taken a dedicated approach towards developing its core infrastructure comprising of well-equipped facilities and a hub of other amenities for a quality education and has always been accountable and legitimate. We care about our children, provide them homely atmosphere, help them to come up as responsible citizens of the country as well as conscious about their dignity and identity. Rainbow World School strives to provide a platform where a child is holistically educated, encompassing physical, mental, social, emotional and spiritual growth. We accentuate learning by synergy and collaboration and this surely comes with a positive attitude towards life. Every student is given a voice and avenue where they are able to express their knowledge, dream and achieve big. Our co- curricular activities are designed to bring out the best in students and transforming them into loving, caring and responsible human beings.</p>
                <p>Rainbow group of schools and Institutes are committed to provide quality education as we have a vision that every rainbowite is a leader and our mission being to nurture multitalented and multitasking future leaders with deep-rooted value system.</p>
                <h6>Mrs. Meenakshi Kashyap</h6>
                <p className={FounderStyle.designation}>Management Desk</p>
            </div>
        </section>
    );
};

export default ManagementData;