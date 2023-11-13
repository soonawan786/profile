import React, { useState, useEffect, useRef } from "react";
import HeaderDropdown from "./HeaderDropdown";
import Link from "next/link";
import { titleCase } from "title-case";

const HeaderDropdownMenuItems = ({
  items,
  depthLevel,
  mobileMenuOpen,
  setMobileMenuOpen,
}) => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    if (window.innerWidth > 960 && items.submenu) {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth > 960 && items.submenu) {
      setDropdown(false);
    }
  };

  return (
    <>
      <li
        className="menu-items"
        ref={ref}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        {items && (
          <>
            {items.submenu && items.submenu.length > 0 ? (
              <>
                <button
                  type="button"
                  aria-haspopup="menu"
                  aria-expanded={dropdown ? "true" : "false"}
                  onClick={() => setDropdown((prev) => !prev)}
                  className="text-center"
                >
                  {titleCase(items.title.toLowerCase())}{" "}
                  {depthLevel > 0 && <span>&raquo;</span>}
                </button>
                {dropdown && (
                  <HeaderDropdown
                    depthLevel={depthLevel}
                    submenus={items.submenu}
                    dropdown={dropdown}
                  />
                )}
              </>
            ) : (
              <Link
                href={items.link}
                className="text-center"
                onClick={() => {
                  // Close the mobile menu when a menu item is clicked
                  if (mobileMenuOpen) {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                {titleCase(items.title.toLowerCase())}
              </Link>
            )}
          </>
        )}
      </li>
    </>
  );
};

export default HeaderDropdownMenuItems;
