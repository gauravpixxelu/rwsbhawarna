import Image from "next/image"
import TeacherStyle from "../teacher.module.css";

const pgtimages = [
    {
        id: 1,
        image: '/images/teacherstaff/pgt/REETA.jpg',
        name: 'Ms. REETA KUMARI',
    },
    {
        id: 2,
        image: '/images/teacherstaff/pgt/RINI.jpg',
        name: 'Ms. RINI SARIKA CHAND',
    },
    {
        id: 3,
        image: '/images/teacherstaff/pgt/RITU.jpg',
        name: 'Ms. RITU SHARMA',
    },
    {
        id: 4,
        image: '/images/teacherstaff/pgt/Shilpa.jpg',
        name: 'Ms. Shilpa Dogar',
    },
    {
        id: 5,
        image: '/images/teacherstaff/pgt/Samita.jpg',
        name: 'Ms. Samita Rana',
    },
    {
        id: 6,
        image: '/images/teacherstaff/pgt/SANDEEP.jpg',
        name: 'Mr. SANDEEP',
    },
];

const PGT = () => {
    return (
        <div className={TeacherStyle.staff_member}>
            {pgtimages.map((pgtimages) => (
                <div className={TeacherStyle.member_box} key={pgtimages.id}>
                    <Image
                        src={pgtimages.image}
                        alt="Icons"
                        width={1920}
                        height={430}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <h6>{pgtimages.name}</h6>
                </div>
            ))}
        </div>
    );
};

export default PGT;