import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import HamburgerNavbar from "./hamburgerNavbar";

function Header() {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            setIsSticky(scrollTop > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <header className={`website-header${isSticky ? ' sticky' : ''}`}>
                <div className="header-box">
                    <Link href="/"><Image
                        src="/images/logo.png"
                        alt="Logo"
                        width={300}
                        height={100}
                    />
                    </Link>
                    <div className="header-btns">
                        <Link href="#" className="custom-btn black-btn"><span>Quick Links</span></Link>
                        <Link href="/contact-us" className="custom-btn black-btn"><span>Contact Us</span></Link>
                        <Link href="/download-app" className="custom-btn black-btn"><span>Download App</span></Link>
                    </div>
                    <HamburgerNavbar />
                </div>
            </header>
        </>
    );
}

export default Header;
