import Image from "next/image"
import OverviewStyle from "./overview.module.css";

const OverviewSection = () => {
    return (
        <section className={OverviewStyle.overview_sec}>
            <div className="container">
                <h3>Vision & <span>Foresight</span></h3>
                <p>Rainbow World School, Bhawarna is situated in the salubrious climate at the foothills of Dhauladhar range at Bhawarna. Rainbow World School, established in 2015, is a co-educational , English medium school affiliated to the Central Board of Secondary Education(CBSE),Delhi. The school was founded by Dr.J.R Kashyap, founder and Director of Rainbow Group of schools Delhi and Himachal Pradesh. A child’s first step, first word, first School are milestones that remain etched in every parents heart. At Rainbow World School, the child will enter the world of letters to take great strides towards success in life. In the past eight years, Rainbow World School has come up as one of the most dedicated and diligent school in Kangra. The aim of the school is to preserve moral, spiritual and ethical values in every student so that they not only excel academically but also have a heightened sense of morality.</p>
                <p>The school has been providing an ambience that escalates the learning process and with the scientific methods followed by the teacher’s by judging every student psychological and mental ability, they manage to be exceptional guides for students. With continued aptitude tests that school conducts to judge the potential of students accurately, it helps them carve a niche in the field of their interest. The school is reputed for its high standards in value education, good work-ethics and discipline, while maintaining the highest standards of Academic and sporting excellence. School accommodates brightly lit and well ventilated class rooms. It provides an environment that encourages a questioning mind and gives students many avenues for expressing their creativity and building their skills. Physical activity along with studies, is an essential ingredient of life in Rainbow. The school is accredited with British Council under which many international exchange programs are being held as per the schedule. Rainbow World School is the best school around Kangra. Rainbowites have entered records in various activities as they are the youngest team and the best school in Himachal Pradesh. School has also been selected under the Atal Innovation Mission for establishing Atal Tinkering lab. All these points add to the simple fact that Rainbow World School Bhawarna, is one of the top notch schools in Himachal Pradesh.</p>
            </div>
        </section>
    );
};

export default OverviewSection;