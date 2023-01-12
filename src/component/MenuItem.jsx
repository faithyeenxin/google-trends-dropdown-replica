import React, { useState } from "react";
import DropdownMenuItem from "./DropdownMenuItem";

export const MenuItem = ({ item, depthLevel }) => {
  const [display, setDisplay] = useState(false);

  const onMouseEnter = () => {
    setDisplay(true);
  };

  const onMouseLeave = () => {
    setDisplay(false);
  };
  return (
    <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {item.submenu ? (
        <>
          <div className="menu-item" onClick={() => setDisplay(!display)}>
            {item.title}
            {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
          </div>
          <div>
            {item.submenu ? (
              <DropdownMenuItem
                display={display}
                items={item.submenu}
                depthLevel={depthLevel}
              />
            ) : (
              ""
            )}
          </div>
        </>
      ) : (
        <>
          <div className="menu-item" onClick={() => setDisplay(!display)}>
            {item.title}
          </div>
          <div>
            {item.submenu ? (
              <DropdownMenuItem
                display={display}
                items={item.submenu}
                depthLevel={depthLevel}
              />
            ) : (
              ""
            )}
          </div>
        </>
      )}
    </div>
  );
};
