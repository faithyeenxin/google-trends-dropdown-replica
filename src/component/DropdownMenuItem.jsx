import React, { useState } from "react";
import { MenuItem } from "./MenuItem";

const DropdownMenuItem = ({ items, display, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "submenu-dropdown" : "submenu";
  return (
    <div className={` ${display ? "show" : ""} ${dropdownClass} `}>
      {items.map((item) => {
        return <MenuItem item={item} depthLevel={depthLevel} />;
      })}
    </div>
  );
};

export default DropdownMenuItem;
