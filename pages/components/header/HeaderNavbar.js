import React, { useState } from "react";
import HeaderDropdownMenuItems from "./HeaderDropdownMenuItems";
import { FaBars, FaTimes } from "react-icons/fa"; // Import the icons

import Image from "next/image";
import Link from "next/link";

const HeaderNavbar = ({ menuItem }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <>
      <nav className="border border-gray-200 shadow-md bg-white">
        <div className="logo">
          <Link
            href="/"
            className="no-underline text-black text-lg font-extrabold"
          >
            Almuflihoon
          </Link>
        </div>
        <div className="mobile-menu-button" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`menus ${mobileMenuOpen ? "open" : ""}`}>
          <div className="menu-logo">
            <div className="logo">
              <Link
                href="/"
                className="no-underline text-black text-lg font-extrabold"
              >
                Almuflihoon
              </Link>
            </div>
          </div>

          {menuItem &&
            menuItem.length > 0 &&
            menuItem.map((menu, index) => {
              const depthLevel = 0;
              return (
                <HeaderDropdownMenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                  mobileMenuOpen={mobileMenuOpen}
                  setMobileMenuOpen={setMobileMenuOpen}
                />
              );
            })}
        </ul>
      </nav>
    </>
  );
};

export default HeaderNavbar;
