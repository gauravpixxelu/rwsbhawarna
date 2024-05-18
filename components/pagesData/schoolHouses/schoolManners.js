import React from 'react';
import SchoolHouseStyle from './house.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const schoolBox = {
    icon: '/images/schoolhouse/teacher-holding.jpg',
};

const SchoolHouse = () => {
    return (
        <section className={SchoolHouseStyle.studentholding}>
            <div className='container'>
            <div className={`row ${SchoolHouseStyle.inlinesection}`}>
                    <div className='col-md-6'>
                        <div className={SchoolHouseStyle.teachermanners}>
                            <img
                                src={schoolBox.icon}
                                alt="Icons"
                                width={600}
                                height={450}
                            />
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={SchoolHouseStyle.dottedborder}>
                            <h3>Teaching Your Child Some Good Manners</h3>
                            <p>While role modeling is one of the best basics for teaching your child how to behave in society, there are some social graces and etiquette you can teach them as they grow.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SchoolHouse;