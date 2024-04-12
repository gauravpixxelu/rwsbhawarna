import Image from "next/image"
import FounderStyle from "../founder.module.css";

const PrincipalData = () => {
    return (
        <section className={FounderStyle.founder_sec}>
            <div className="container">
                <Image
                    src="/images/headMembers/principal.jpg"
                    alt="Icons"
                    width={1920}
                    height={430}
                    style={{ width: '100%', height: 'auto' }}
                />
                <h3>Education is the passport to the future , for tomorrow belongs to those who prepare for it today . – ( Malcom X)</h3>
                <p>As we look ahead to the future , we envision Rainbow World School as an Institution par-excellence in education. The school has crossed immeasurable milestones and has become a dream destination for more than a thousand students from Nursery to Grade 12 . The school is already accredited with the British council and the worlds most prominent German language is also part of the school curriculum . Besides yoga, sports like gymnastics , athletics , archery and boxing are also promoted under the guidance of expert coaches . The school is also equipped with state of art facilities like Science labs,Computer labs and also has the privilege to have been sanctioned ,Atal Tinkering Lab, by NITI AYOG ( Govt of INDIA) . NCC and Scouts and Guides is also promoted in school .</p>
                <p>Our endeavor is to empower our students with strong, open , discerning minds and develop as confident individuals to make a mark in the world as successful and compassionate human beings . We are proud of what we have accomplished and look towards a brighter future . The school has carved a niche for itself not only in Bhawarna but far and wide. We inculcate in the students, core values like respect , responsibility , kindness, honesty , discipline , courtesy and above all, love for traditional values and the rich culture of the country.</p>
                <p>Considering the importance of English as a global language much emphasis is given to hone the English speaking skills of students through declamations ,elocutions and extempore which are conducted in school from time to time.</p>
                <p>Parents are the most strengthening power in molding the future of children and we consider ourselves lucky for their cooperation and constant support which empowers us to move ahead . Our heartfelt gratitude to them for their faith in us. Rainbow World School will continue to provide students with platforms to reach greater heights .</p>
                <h6>Ms. Suzana David</h6>
                <p className={FounderStyle.designation}>Principal</p>
            </div>
        </section>
    );
};

export default PrincipalData;