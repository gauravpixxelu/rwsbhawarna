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

  const handleSubMenuEnter = (index) => {
    setSubMenuOpen(index);
  };

  const handleSubMenuLeave = (index) => {
    setSubMenuOpen(index === subMenuOpen ? null : index);
  };

  return (
    <>
      <div className={`menu-bar${isOpen ? ' active' : ''}`}>
        <ul className="open-menu">
          <li>
            <Link href="#">test<span onMouseEnter={() => handleSubMenuEnter(0)} onMouseLeave={() => handleSubMenuLeave(0)}>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="#">test<span onMouseEnter={() => handleSubMenuEnter(1)} onMouseLeave={() => handleSubMenuLeave(1)}>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="#">test<span onMouseEnter={() => handleSubMenuEnter(2)} onMouseLeave={() => handleSubMenuLeave(2)}>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="#">test<span onMouseEnter={() => handleSubMenuEnter(3)} onMouseLeave={() => handleSubMenuLeave(3)}>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="#">test<span onMouseEnter={() => handleSubMenuEnter(4)} onMouseLeave={() => handleSubMenuLeave(4)}>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="#">test<span onMouseEnter={() => handleSubMenuEnter(5)} onMouseLeave={() => handleSubMenuLeave(5)}>
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