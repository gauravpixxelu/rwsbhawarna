import React from "react";
import Image from "next/image";

function Header() {
    return (
        <>
            <section className="website-header">
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