import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrows } from "react-bootstrap-icons";

    const PressGallery = () => {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            adaptiveHeight: true,
            arrows: true,
            responsive: [
                {
                    breakpoint: 1024, // screens smaller than 1024px
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 768, // screens smaller than 768px
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 480, // screens smaller than 480px
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: false
                    }
                }
            ]
        };

    const images = [
        "/images/press/no-1.png",
        "/images/press/no-2.png",
        "/images/press/no-3.png",
        "/images/press/no-4.png",
        "/images/press/no-5.png",
        "/images/press/no-6.png",
        "/images/press/no-7.png",
        "/images/press/no-8.png",
        "/images/press/no-9.png",
        "/images/press/no-10.png",
        "/images/press/no-11.png",
        "/images/press/no-12.png",
        "/images/press/no-13.png",
        "/images/press/no-14.png",
        "/images/press/no-15.png",
        "/images/press/no-16.png",
        "/images/press/no-17.png",
        "/images/press/no-18.png",
        "/images/press/no-19.png",
        "/images/press/no-20.png",
    ];

    return (
        <section className="PressGallery_sec">
            <div className="container">
                <Slider {...settings}>
                    {images.map((src, index) => (
                        <div key={index} className="slider-image">
                            <Image src={src} alt={`view-press-${index + 1}`} width={300} height={300} />
                            <Image src={src} alt={`view-press-${index + 2}`} width={300} height={300} />
                        </div>
                    ))}
                </Slider>
            </div>
            
        </section>
    );
};

export default PressGallery;