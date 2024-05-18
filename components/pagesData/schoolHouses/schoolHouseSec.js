import React from 'react';
import Image from 'next/image';
import SchoolHouseStyle from './house.module.css';

const SchoolHouse = () => {
    const SchoolboxesContent = [
        {
            id: 1,
            icon: '/images/schoolhouse/garnet.jpg',
            title: 'G – GARNET',
        },
        {
            id: 2,
            icon: '/images/schoolhouse/emerald.jpg',
            title: 'E – EMERALD',
        },
        {
            id: 3,
            icon: '/images/schoolhouse/morganite.jpg',
            title: 'M – MORGANITE',
        },
        {
            id: 4,
            icon: '/images/schoolhouse/Saphire.jpg',
            title: 'S – SAPPHIRE',
        },
    ];

    return (
        <section className={SchoolHouseStyle.schoolhouse}>
            <div className='container'>
                <div className={SchoolHouseStyle.schoolhousetitle}>
                    <h3>Houses of Rainbow World School</h3>
                </div>
                <div className={SchoolHouseStyle.schoolhousedes}>
                    <p>The house system is an integral and vibrant part of school culture. GEMS, Garnet, Emerald, Morganite and Sapphire are the four houses of the school. The houses system aims to give students an identity and sense of pride in supportive and secure environment .This system provides a positive competition and closer support between students and teachers. Rainbow World school is a community of learners and the house system aims to reflect and promote core values viz. Value of fair play, teamwork ,citizenship ,mutual responsibilities ,self discipline ,initiative and resilience etc. In fact in Rainbow World School house system is a vibrant part of school life.</p>
                </div>
                <div className="row">
                    {SchoolboxesContent.map((schoolBox) => (
                        <div className="col-md-3" key={schoolBox.id}>
                            <div className={SchoolHouseStyle.mission_boxes}>
                                <Image
                                    src={schoolBox.icon}
                                    alt="Icons"
                                    width={400}
                                    height={400}
                                />
                                <div className={SchoolHouseStyle.flowhouse}>
                                    <span>{schoolBox.title}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SchoolHouse;