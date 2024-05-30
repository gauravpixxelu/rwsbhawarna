import React from 'react';
import ChildrenStyle from './children.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Image from 'next/image'

const ChildrenScienceSlider = () => {
    // Settings for the slider
    const sliderSettings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 4000,
        autoplayInterval: 4000,
        slidesToScroll: 1
    };

    return (
        <section className={ChildrenStyle.childrens_slider}>
            <div className='container'>
                <div className='row congress-view'>
                    <div className='col-md-6'>
                        <div className={ChildrenStyle.slider_science}>
                            {/* Slider Component */}
                            <Slider {...sliderSettings}>
                                <div className={ChildrenStyle.slide_fade}>
                                    <Image
                                        src="/images/children-science/hood-1.jpg"
                                        alt="Logos"
                                        width={800}
                                        height={800}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>
                                <div className={ChildrenStyle.slide_fade}>
                                    <Image
                                        src="/images/children-science/hood-2.jpg"
                                        alt="Logos"
                                        width={800}
                                        height={800}
                                        style={{ width: '100%', height: 'auto' }}
                                    />
                                </div>

                            </Slider>
                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className={ChildrenStyle.top_slider_content}>
                            <h3>Children Science Congress (2023-24)</h3>
                            <ul>
                                <li><span>1</span>Yashika (IX) selected for State level Scientific Survey Report</li>
                                <li><span>2</span>Selected for District level Science Activity Corner -Prameeti Sood (X), Tamish (Vlll), Kashish (Xll)</li>
                                <li><span>3</span>Selected for District level Maths Olympiad -Saanvi Sood (VIII), Vaishnavi (XII) and Utkarsh (X)</li>
                                <li><span>4</span>Selected for District Level Senior Quiz Competition –  Aaryaman Singh (X) and Gourav Patyal (X)</li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ChildrenScienceSlider;