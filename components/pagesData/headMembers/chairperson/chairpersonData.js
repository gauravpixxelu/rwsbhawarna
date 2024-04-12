import Image from "next/image"
import FounderStyle from "../founder.module.css";

const ChairpersonData = () => {
    return (
        <section className={FounderStyle.founder_sec}>
            <div className="container">
                <Image
                    src="/images/headMembers/chairperson.jpg"
                    alt="Icons"
                    width={1920}
                    height={430}
                    style={{ width: '100%', height: 'auto' }}
                />
                <h3>All round development of the child “is construed to be the primary constituent of a “good education.</h3>
                <p>Every Child is like a seed which has the potential to grow if it is nourished with love and care under the right guidance. In the current challenging times it is essential that children should not only excel in academics but should also develop courtesy, discipline, smart personality, social sensitivity and be imbibed with the traditional values and culture of our country .Childhood is the best time to lay the foundation of the core values essential for the overall development of the future citizens of tomorrow. Rainbow World School is a friendly School where each and every student is understood, valued and attended to. Our students are provided with the state of the art facilities like well equipped Science laboratory, computer laboratory and audio visual rooms. Equal attention is given to the development of the children both in academics and in extracurricular activities . Year by year the efforts of all our staff and students have taken the school forward in terms of excellence. The school has progressed in leaps and bounds . We offer our students a stress free learning environment which encourages creativity and critical thinking.</p>
                <p>At RWS we are dedicated to exhaustive quality learning and are utterly committed to a continuous process of improvement for the all-round development of the students. We are always open to refreshing views and suggestions which can add more value to the students of our school.</p>
                <h6>Mrs. Sunita Kashyap</h6>
                <p className={FounderStyle.designation}>Chairperson</p>
            </div>
        </section>
    );
};

export default ChairpersonData;