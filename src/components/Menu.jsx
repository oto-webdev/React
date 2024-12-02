import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { navbarMenu } from "./data/data";

const Menu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          className="absolute top-20 left-0 w-full h-full bg-white z-20"
        >
          <div className="text-lg font-semibold uppercase bg-primary text-white py-10 px-6 rounded-3xl flex justify-center items-center">
            <ul className="flex flex-col justify-center items-center space-y-6">
              {navbarMenu.map((link) => (
                <li key={link.id}>
                  <Link
                    to={link.link}
                    className="block py-2 px-4 hover:bg-primary hover:text-white font-semibold"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Menu;
