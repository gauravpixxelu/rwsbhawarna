import Link from "next/link";
import { useState } from "react";
import { ArrowRight } from 'react-bootstrap-icons';

const HamburgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [subMenuOpen, setSubMenuOpen] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setSubMenuOpen(null); 
  };

  const toggleSubMenu = (index) => {
    setSubMenuOpen(subMenuOpen === index ? null : index);
  };

  return (
    <>
      <div className={`menu-bar${isOpen ? ' active' : ''}`}>
        <ul className="open-menu">
          <li>
            <Link href="#">test<span onClick={() => toggleSubMenu(0)}>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="#">test<span onClick={() => toggleSubMenu(1)}>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="#">test<span onClick={() => toggleSubMenu(2)}>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="#">test<span onClick={() => toggleSubMenu(3)}>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="#">test<span onClick={() => toggleSubMenu(4)}>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="#">test<span onClick={() => toggleSubMenu(5)}>
              <ArrowRight />
            </span>
            </Link>

          </li>
        </ul>        
      </div>
      <div className="sub-menu-item">
          {subMenuOpen === 0 && (
            <ul className="sub-menu">
              <li><Link href="#">Submenu Item 1</Link></li>
              <li><Link href="#">Submenu Item 2</Link></li>
              <li><Link href="#">Submenu Item 3</Link></li>
            </ul>
          )}
          {subMenuOpen === 1 && (
            <ul className="sub-menu">
              <li><Link href="#">Submenu 2 Item 1</Link></li>
              <li><Link href="#">Submenu 2 Item 2</Link></li>
              <li><Link href="#">Submenu 2 Item 3</Link></li>
            </ul>
          )}
          {subMenuOpen === 2 && (
            <ul className="sub-menu">
              <li><Link href="#">Submenu 3 Item 1</Link></li>
              <li><Link href="#">Submenu 3 Item 2</Link></li>
              <li><Link href="#">Submenu 3 Item 3</Link></li>
            </ul>
          )}
          {subMenuOpen === 3 && (
            <ul className="sub-menu">
              <li><Link href="#">Submenu 4 Item 1</Link></li>
              <li><Link href="#">Submenu 4 Item 2</Link></li>
              <li><Link href="#">Submenu 4 Item 3</Link></li>
            </ul>
          )}
          {subMenuOpen === 4 && (
            <ul className="sub-menu">
              <li><Link href="#">Submenu 5 Item 1</Link></li>
              <li><Link href="#">Submenu 5 Item 2</Link></li>
              <li><Link href="#">Submenu 5 Item 3</Link></li>
            </ul>
          )}
          {subMenuOpen === 5 && (
            <ul className="sub-menu">
              <li><Link href="#">Submenu 6 Item 1</Link></li>
              <li><Link href="#">Submenu 6 Item 2</Link></li>
              <li><Link href="#">Submenu 6 Item 3</Link></li>
            </ul>
          )}
        </div>

      <button type="button" className="header-hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </>
  );
};

export default HamburgerNavbar;
