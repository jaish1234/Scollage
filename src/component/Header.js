import React from "react";
import scollageLogo from "../assets/svg/scollageLogo.svg"

function Header() {
  return (
    <div className="flex justify-center">
      <img src={scollageLogo} alt="Not Found" className="bg-red-200" />
    </div>
  );
}

export default Header;
