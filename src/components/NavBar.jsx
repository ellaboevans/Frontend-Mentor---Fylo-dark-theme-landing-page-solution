import { useState } from "react";
import logo from "../assets/logo.svg";
const NavBar = () => {
  const [isActive, setIsActive] = useState("home");

  return (
    <header>
      <nav className="flex items-center px-4 py-10 md:px-28 md:py-16">
        <div className="float-left flex-1">
          <img src={logo} alt="" width={100} />
        </div>
        <div className="text-neutral-white space-x-3 duration-100 transition-all  ">
          <a
            href="#"
            className={`hover:underline ${
              isActive === "home" && "underline font-bold"
            }`}
            onClick={() => setIsActive("home")}
          >
            Features
          </a>
          <a
            href="#"
            className={`hover:underline ${
              isActive === "team" && "underline font-bold"
            }`}
            onClick={() => setIsActive("team")}
          >
            Team
          </a>
          <a
            href="#"
            className={`hover:underline ${
              isActive === "signIn" && "underline font-bold"
            }`}
            onClick={() => setIsActive("signIn")}
          >
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
