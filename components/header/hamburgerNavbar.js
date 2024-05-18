import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, ArrowLeft } from 'react-bootstrap-icons';

const HamburgerNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setActiveSubMenu(null);
  };

  const handleSubMenuClick = (index) => {
    if (activeSubMenu === index) {
      setActiveSubMenu(null);
    } else {
      setActiveSubMenu(index);
    }
  };

  const handleBackClick = () => {
    setActiveSubMenu(null);
  };


  return (
    <>
      <div className={`menu-bar${isOpen ? ' active' : ''}`}>
        <ul className="open-menu">
          <li>
            <Link href="" onClick={() => handleSubMenuClick(0)}>About Us<span>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="" onClick={() => handleSubMenuClick(1)}>Admission<span>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="" onClick={() => handleSubMenuClick(2)}>Academics<span>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="" onClick={() => handleSubMenuClick(3)}>Activities<span>
              <ArrowRight />
            </span>
            </Link>
          </li>
          <li>
            <Link href="/galleries">Galleries</Link>
          </li>
          <li>
            <Link href="/press-review">Press Releases</Link>
          </li>
        </ul>

        <div className="menu-info">
          <ul>
            <li>Central Board of Secondary Education</li>
            <li>Department of Elementary Education</li>
            <li>Admission Number</li>
          </ul>
        </div>

        <div className="header-social-icons">
          <ul>
            <li><Link href="#" target="_blank"><Image src="/images/icon1.svg" alt="Logo" width={40} height={40} /></Link></li>
            <li><Link href="#" target="_blank"><Image src="/images/icon2.svg" alt="Logo" width={40} height={40} /></Link></li>
            <li><Link href="#" target="_blank"><Image src="/images/icon3.svg" alt="Logo" width={40} height={40} /></Link></li>
            <li><Link href="#" target="_blank"><Image src="/images/icon4.svg" alt="Logo" width={40} height={40} /></Link></li>
          </ul>
        </div>
      </div>


      <button type="button" className="header-hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </button>

      <div className={`sub-menu-item${activeSubMenu !== null ? ' active' : ''}`}>
        {activeSubMenu !== null && (
          <>
            <p onClick={handleBackClick}><ArrowLeft />Back</p>
        {activeSubMenu === 0 && (
          <ul className="sub-menu">
            <li><Link href="/about-us/overview">Overview</Link></li>
            <li><Link href="/about-us/founder-visionary">Founder & Visionary</Link></li>
            <li><Link href="/about-us/management-desk">Management Desk</Link></li>
            <li><Link href="/about-us/principal">Principal</Link></li>
            <li><Link href="/about-us/chairperson">Chairperson</Link></li>
            <li><Link href="/about-us/teacher-staff">Teacher Staff</Link></li>
            <li><Link href="/about-us/mandatory-disclosure">Mandatory Disclosure</Link></li>
          </ul>
        )}
        {activeSubMenu === 1 && (
          <ul className="sub-menu">
            <li><Link href="/admission/admission-process">Admission Process</Link></li>
            <li><Link href="#">Fee Structure</Link></li>
          </ul>
        )}
        {activeSubMenu === 2 && (
          <ul className="sub-menu">
            <li><Link href="/academics/facilities">Facilities</Link></li>
            <li><Link href="/academics/calender">Calender</Link></li>
          </ul>
        )}
        {activeSubMenu === 3 && (
          <ul className="sub-menu">
            <li><Link href="#">Co-curricular Activities</Link></li>
            <li><Link href="#">Pre-Nur to UKG Activity</Link></li>
            <li><Link href="#">Student Council</Link></li>
            <li><Link href="#">British Council</Link></li>
            <li><Link href="#">Children Science Congress</Link></li>
            <li><Link href="/activities/school-house">School Houses</Link></li>
            </ul>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default HamburgerNavbar;