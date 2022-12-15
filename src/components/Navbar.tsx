const Navbar = () => {
  return (
    <nav className="bg-custom-background-primary font-dmsans text-white">
      <div className="content-container">
        <div className="flex justify-between ">
          {/* logo */}
          <div>
            <h1 className="text-3xl"> Roy Kim </h1>
          </div>

          {/* menu items */}
          <div className="space-x-10 pt-2">
            <a className="nav-items">
              Home
            </a>
            <a className="nav-items">
              Projects
            </a>
            <a className="nav-items">
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
