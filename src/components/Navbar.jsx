import { useState } from "react";
import { Link } from "react-router-dom";
import { navbarMenu } from "./data/data";
import { CiSearch } from "react-icons/ci";
import { FaDumbbell } from "react-icons/fa";
import { MdMenu } from "react-icons/md";
import { PiShoppingCartThin } from "react-icons/pi";
import { FaUser } from "react-icons/fa6";
import Menu from "./Menu";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="p-1">
        <div className="flex justify-between items-center py-8 shadow-md">
          <div className="text-2xl flex items-center gap-2 font-bold uppercase ">
            <FaDumbbell />
            <p className="coders">Coders</p>
            <p className="text-secondary">Blog</p>
          </div>

          <div className="hidden md:block">
            <ul className="flex items-center gap-6 text-gray-600">
              {navbarMenu.map((link) => {
                return (
                  <Link
                    key={link.id}
                    to={link.link}
                    className="inline-block py-1 px-3 hover:text-primary font-semibold"
                  >
                    {link.title}
                  </Link>
                );
              })}
            </ul>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-2xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <div className="">
                <CiSearch className="search" />
              </div>
            </button>

            <button className="text-xl hover:bg-primary hover:text-white rounded-full p-2 duration-200">
              <PiShoppingCartThin className="cart" />
            </button>

            <button className="hover:bg-primary text-primary font-semibold text-xl hover:text-white rounded-full border-2 border-primary duration-200 p-2 hidden md:block">
              <FaUser />
            </button>
          </div>

          <div className="md:hidden" onClick={() => setOpen(!open)}>
            <MdMenu className="text-4xl" />
          </div>
        </div>
      </nav>

      <Menu open={open} />
    </div>
  );
};

export default Navbar