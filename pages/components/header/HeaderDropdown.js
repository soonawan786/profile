import React from "react";
import HeaderDropdownMenuItems from "./HeaderDropdownMenuItems";

const HeaderDropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "infodropdown-submenu" : "";
  return (
    <>
      <div>
        <ul
          className={`infodropdown ${dropdownClass} ${dropdown ? "show" : ""}`}
        >
          {submenus &&
            submenus.length > 0 &&
            submenus.map((submenu, index) => (
              <HeaderDropdownMenuItems
                items={submenu}
                key={index}
                depthLevel={depthLevel}
              />
            ))}
        </ul>
      </div>
    </>
  );
};

export default HeaderDropdown;
