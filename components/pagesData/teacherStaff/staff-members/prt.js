import Image from "next/image"
import TeacherStyle from "../teacher.module.css";

const prtimages = [
    {
        id: 1,
        image: '/images/teacherstaff/prt/AMITA.jpg',
        name: 'Ms. Amita Pathania',
    },
    {
        id: 2,
        image: '/images/teacherstaff/prt/ANITA.jpg',
        name: 'Ms. ANITA PATHANIA',
    },
    {
        id: 3,
        image: '/images/teacherstaff/prt/ANUPAMA.jpg',
        name: 'Ms. ANUPAMA',
    },
    {
        id: 4,
        image: '/images/teacherstaff/prt/CHAUDHARY.jpg',
        name: 'Ms. CHAUDHARY RESHMA',
    },
    {
        id: 5,
        image: '/images/teacherstaff/prt/MADHUMITA.jpg',
        name: 'Ms. MADHUMITA',
    },
    {
        id: 6,
        image: '/images/teacherstaff/prt/MONICA.jpg',
        name: 'Ms. MONICA MANHAS',
    },
    {
        id: 7,
        image: '/images/teacherstaff/prt/MONIKA.jpg',
        name: 'Ms. MONIKA THAKUR',
    },
    {
        id: 8,
        image: '/images/teacherstaff/prt/NEELAM.jpg',
        name: 'Ms. NEELAM KUMARI',
    },
    {
        id: 9,
        image: '/images/teacherstaff/prt/PRIYANKA.jpg',
        name: 'Ms. PRIYANKA PARMAR',
    },
    {
        id: 10,
        image: '/images/teacherstaff/prt/RASHI.jpg',
        name: 'Ms. RASHI KATOCH',
    },
    {
        id: 11,
        image: '/images/teacherstaff/prt/RISHU.jpg',
        name: 'Ms. RISHU GULERIA',
    },
    {
        id: 11,
        image: '/images/teacherstaff/prt/SAFNA.jpg',
        name: 'Ms. SAFNA JAGGI',
    },
    {
        id: 11,
        image: '/images/teacherstaff/prt/SHALLU.jpg',
        name: 'Ms. SHALLU RANA',
    },
    {
        id: 11,
        image: '/images/teacherstaff/prt/UMA.jpg',
        name: 'Ms. UMA SHARMA',
    },
    {
        id: 11,
        image: '/images/teacherstaff/prt/ARVIND.jpg',
        name: 'Mr. ARVIND KUMAR',
    }
];

const PRT = () => {
    return (
        <div className={TeacherStyle.staff_member}>
            {prtimages.map((prtimages) => (
                <div className={TeacherStyle.member_box} key={prtimages.id}>
                    <Image
                        src={prtimages.image}
                        alt="Icons"
                        width={1920}
                        height={430}
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <h6>{prtimages.name}</h6>
                </div>
            ))}
        </div>
    );
};

export default PRT;