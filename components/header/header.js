import React, { useState, useEffect } from 'react';
import Image from "next/image";
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
            <section className={`website-header${isSticky ? ' sticky' : ''}`}>
                <div className="container">
                    <div className="header-box">
                        <Image
                            src="/images/logo.png"
                            alt="Logo"
                            width={300}
                            height={100}
                        />
                        <HamburgerNavbar />
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;
