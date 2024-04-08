import Link from "next/link";
import { useState } from "react";

const HamburgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" className="header-hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`menu-bar${isOpen ? ' active' : ''}`}>
        <ul className="open-menu">
          <li><Link href="#">test</Link></li>
          <li><Link href="#">test</Link></li>
          <li><Link href="#">test</Link></li>
          <li><Link href="#">test</Link></li>
          <li><Link href="#">test</Link></li>
          <li><Link href="#">test</Link></li>
        </ul>
      </div>
    </>
  );
};

export default HamburgerNavbar;
