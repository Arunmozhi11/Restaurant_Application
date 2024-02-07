import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { buttonClick, slideTop } from "../animations";
import { MdLogout, MdShoppingCart } from "../assets/icons";
import { useDispatch, useSelector } from "react-redux";
import { Avatar } from "../assets";
import { getAuth, signOut } from "firebase/auth";
import { app } from "../config/firebase.config";
import { setUserNull } from "../context/actions/userActions";
import { setCartOn } from "../context/actions/displayCartAction";
import { FDL } from "../assets";

// Define your isActiveStyles and isNotActiveStyles functions
const isActiveStyles = {
  color: "red", // Set your active styles here
};

const isNotActiveStyles = {
  color: "black", // Set your inactive styles here
};

const Header = () => {
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [navbar, setNavbar] = useState(false);
  const [isMenu, setIsMenu] = useState(false);
  const firebaseAuth = getAuth(app);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    firebaseAuth
      .signOut()
      .then(() => {
        dispatch(setUserNull());
        navigate("/Login", { replace: true });
      })
      .catch((err) => console.log(err));
  };

  return (
    <header className="fixed z-50 inset-x-0 top-0 flex items-center justify-between px-4 md:px-10 py-4">
      <NavLink to={"/"} className="flex items-center justify-center gap-4">
        <img src={FDL} className="w-16 h-16" alt="" />
        <p className="font-semibold text-xl">City</p>
      </NavLink>

      <nav className="flex items-center justify-center gap-8">
        <ul className="hidden lg:flex items-center justify-center gap-16 text-[20px]">
          <NavLink
            to={"/"}
            className={`nav-link ${navbar ? "active" : ""}`}
            activeClassName="active"
          >
            Home
          </NavLink>
          <NavLink
            to={"/Menu"}
            className={`nav-link ${navbar ? "active" : ""}`}
            activeClassName="active"
            
          >
            Menu
          </NavLink>
          <NavLink
            to={"/Aboutus"}
            className={`nav-link ${navbar ? "active" : ""}`}
            activeClassName="active"
            
          >
            About Us
          </NavLink>
          <NavLink
            to={"/Service"}
            className={`nav-link ${navbar ? "active" : ""}`}
            activeClassName="active"
          >
            Service
          </NavLink>
        </ul>

        <motion.div
          {...buttonClick}
          onClick={() => dispatch(setCartOn())}
          className="relative cursor-pointer hidden md:block"
        >
          <MdShoppingCart className="text-3xl text-textColor" />
          {cart?.length > 0 && (
            <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center absolute -top-4 -right-1">
              <p className="text-primary text-base font-semibold">
                {cart?.length}
              </p>
            </div>
          )}
        </motion.div>

        <div className="hidden md:flex items-center space-x-4">
          {user ? (
            <div
              className="relative cursor-pointer"
              onMouseEnter={() => setIsMenu(true)}
            >
              <div className="w-10 h-10 rounded-full shadow-md cursor-pointer overflow-hidden flex items-center justify-center">
                <motion.img
                  className="w-full h-full object-cover"
                  src={user?.picture ? user?.picture : Avatar}
                  whileHover={{ scale: 1.15 }}
                  referrerPolicy="no-referrer"
                />
              </div>

              {isMenu && (
                <motion.div
                  {...slideTop}
                  onMouseLeave={() => setIsMenu(false)}
                  className="px-6 py-4 w-48 bg-lightOverlay backdrop-blur-md rounded-md shadow-md absolute top-12 right-0 flex flex-col gap-4"
                >
                   {user?.user_id === process.env.REACT_APP_ADMIN_ID && ( 

                  <Link
                    className="hover:text-red-500 text-xl text-textColor"
                    to={"/dashboard/home"}
                  >
                    Dashboard
                  </Link>
                    )}

                  <Link
                    className="hover:text-red-500 text-xl text-textColor"
                    to={"/profile"}
                  >
                    My Profile
                  </Link>

                  <Link
                    className="hover:text-red-500 text-xl text-textColor"
                    to={"/user-orders"}
                  >
                    Orders
                  </Link>
                  <hr />
                  <motion.div
                    {...buttonClick}
                    onClick={handleSignOut}
                    className="group flex items-center justify-center px-3 py-2 rounded-md shadow-md bg-gray-100 hover:bg-gray-200 gap-3"
                  >
                    <MdLogout className="text-2xl text-textColor group-hover::text-headingColor" />
                    <p className="text-textColor text-xl group-hover:text-headingColor">
                      Sign Out
                    </p>
                  </motion.div>
                </motion.div>
              )}
            </div>
          ) : (
            <NavLink to={"/Login"}>
              <motion.button
                {...buttonClick}
                className="px-4 py-2 rounded-md shadow-md bg-lightOverlay border border-red-300 cursor-pointer"
              >
                Login
              </motion.button>
            </NavLink>
          )}
        </div>

        {/* Hamburger menu button for mobile */}
        <div className="md:hidden">
          <button
            className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
            onClick={() => setNavbar(!navbar)}
          >
            {navbar ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
          <div className={`flex-1 pb-3 ${navbar ? "block" : "hidden"}`}>
            <ul className="items-center justify-center mt-1  space-y-8 bg-black pl-2">
              <li className="text-white hover:text-orange-400">
                <Link to="/">Home</Link>
              </li>
              <li className="text-white hover:text-orange-400">
                <Link to="/Menu">Menu</Link>
              </li>
              <li className="text-white hover:text-orange-400">
                <Link to="/Aboutus">Aboutus</Link>
              </li>
              <li className="text-white hover:text-orange-400">
                <Link to="/Service">Service</Link>
              </li>
              {user && (
                <ul className="items-center justify-center space-y-8 mt-1 bg-black">
                  {user?.user_id === process.env.REACT_APP_ADMIN_ID && (
                     <li>
                     <Link
                       to="/dashboard/home"
                       className="hover:text-orange-400  text-white"
                     >
                       Dashboard
                     </Link>
                   </li>
                  )}
                 
                  <li>
                    <Link
                      to="/profile"
                      className="hover:text-orange-400  text-white"
                    >
                      My Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/user-orders"
                      className="hover:text-orange-400  text-white"
                    >
                      Orders
                    </Link>
                  </li>
                  <li>
                    <motion.div
                      {...buttonClick}
                      onClick={handleSignOut}
                      className="group flex items-center justify-center px-2 py-1 rounded-md bg-black hover:bg-orange-400 text-white"
                    >
                      <MdLogout className="text-lg text-white group-hover::text-headingColor" />
                      <p className="bg-red text-sm hover:text-white-400 text-white">
                        Sign Out
                      </p>
                    </motion.div>
                  </li>
                </ul>
              )}
              {!user && (
                <li className="text-white hover:text-orange-400">
                  <NavLink to="/Login">
                    <motion.button
                      {...buttonClick}
                      className="px-4 py-2 pb-1 rounded-md shadow-md bg-black hover:bg-orange-400 text-white  cursor-pointer"
                    >
                      Login
                    </motion.button>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
