import logo from "../assets/logo.svg";
const NavBar = () => {
  return (
    <header>
      <nav className="flex items-center px-4 py-10 ">
        <div className="float-left flex-1">
          <img src={logo} alt="" width={100} />
        </div>
        <div className="text-neutral-white space-x-3 ">
          <a href="#" className="hover:underline duration-100 transition-all">
            Features
          </a>
          <a href="#" className="hover:underline duration-100 transition-all">
            Team
          </a>
          <a href="#" className="hover:underline duration-100 transition-all">
            Sign In
          </a>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
