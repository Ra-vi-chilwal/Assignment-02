import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="col-md-12 bg-dark py-2">
      <button className="navbar bg-dark navbar-dark">
        <Link to={"/"} className="navbar-brand ml-5">
         Enrollment App                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
        </Link>
      </button>
    </div>
  );
};

export default Navbar;
