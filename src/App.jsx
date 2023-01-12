import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { MenuItem } from "./component/MenuItem";
import { menuItems } from "./menuItems";
function App() {
  return (
    <div className="App">
      <header>
        <div className="nav-area">
          <div className="nav-item logo">Logo</div>
          <div className="nav-item bar">
            {menuItems.map((item, idx) => {
              const depthLevel = 0;
              return (
                <div key={idx}>
                  <MenuItem item={item} depthLevel={depthLevel} />
                </div>
              );
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
