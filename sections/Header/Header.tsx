import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-row w-screen">
      <Image src={"/img/logo.png"} alt="Logo" width="100" height="40%" />
    </div>
  );
};

export default Header;
