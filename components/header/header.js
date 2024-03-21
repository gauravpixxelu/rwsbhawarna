import React from "react";
import Image from "next/image";
import HeaderStyle from "./header.module.css";

function Header() {
    return (
        <>
        <section className={HeaderStyle.website_header}>
            <div className="container">
                <Image
                    src="/images/logo.png"
                    alt="Logo"
                    width={300}
                    height={100}
                    
                />
            </div>  
        </section>
        </>
    );
}

export default Header