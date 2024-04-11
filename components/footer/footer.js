import React from "react";
import Image from "next/image";
import Link from "next/link";

function Footer() {
    return (
        <>
            <footer className="website-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="copyright-text">
                                <p>Copyright 2024 © Rainbow World School. All rights reserved.</p>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="social-icons">
                                <ul>
                                    <li><Link href="#" target="_blank"><Image src="/images/facebook.svg" alt="Logo" width={26} height={26} /></Link></li>
                                    <li><Link href="#" target="_blank"><Image src="/images/instagram.svg" alt="Logo" width={26} height={26} /></Link></li>
                                    <li><Link href="#" target="_blank"><Image src="/images/twitter.svg" alt="Logo" width={26} height={26} /></Link></li>
                                    <li><Link href="#" target="_blank"><Image src="/images/youtube.svg" alt="Logo" width={26} height={26} /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer