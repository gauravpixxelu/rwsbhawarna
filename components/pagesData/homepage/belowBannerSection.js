import React from 'react';
import HomeCss from './home.module.css';

const BelowBannerSection = () => {
    return (
        <>
            <section className={HomeCss.belowbanner_sec}>
                    <marquee behavior="scroll" direction="left" className={HomeCss.school_bells}>
                        <ul>
                            <li>School bells are ringing loud and clear, vacation over, school is here </li>
                            <li>School bells are ringing loud and clear, vacation over, school is here </li>
                            <li>School bells are ringing loud and clear, vacation over, school is here </li>
                            <li>School bells are ringing loud and clear, vacation over, school is here </li>
                            <li>School bells are ringing loud and clear, vacation over, school is here </li>
                        </ul>
                    </marquee>
            </section>
        </>
    );
};

export default BelowBannerSection;