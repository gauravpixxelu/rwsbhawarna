import Image from "next/image"
import TeacherStyle from "../teacher.module.css";

const germanimages = [
    {
        id: 1,
        image: '/images/teacherstaff/german/Tanmay.jpg',
        name: 'Mr. Tanmay',
    }
];

const GermanLanguage = () => {
    return (
        <div className={TeacherStyle.staff_member}>
            {germanimages.map((germanimages) => (
                <div className={TeacherStyle.member_box} key={germanimages.id}>
                    <Image
                        src={germanimages.image}
                        alt="Icons"
                        width={1920}
                        height={430}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <h6>{germanimages.name}</h6>
                </div>
            ))}
        </div>
    );
};

export default GermanLanguage;