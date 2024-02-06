import React from "react";
import { Header } from "../components";
import { motion } from "framer-motion";
import { RiCustomerService2Fill, IoPersonSharp, FaCartPlus, ImSpoonKnife  } from "../assets/icons";



const Service = () => {
  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
        <Header />
        <div className="w-full flex flex-col items-center mt-28 px-6 md:px-24 2xl:px-96 gap-2 pb-24">
          <div className="flex items-center justify-center gap-10">
            <div className="w-20 h-[2px] rounded-md bg-orange-500"></div>
            <p className="font-semibold text-orange-500 text-[25px]">
              Our Services
            </p>
            <div className="w-20 h-[2px] rounded-md bg-orange-500"></div>
          </div>

          <h1 className="text-black font-semibold text-[40px]">
            Explore Our Services
          </h1>
        </div>

        

        <div className="w-full flex flex-wrap items-center justify-center  mt-2 px-6 md:px-24 2xl:px-96 gap-3 pb-24">
          <div className="w-275 h-225 flex flex-col shadow-md gap-3 mt-3">
            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
            <IoPersonSharp />   Master Chefs
            </h1>

            <p className="text-black px-4">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>

          <div className="w-275 h-225 flex flex-col shadow-md gap-3 mt-3">
            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
            <ImSpoonKnife />   Quality Food
            </h1>

            <p className="text-black px-4">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>

          <div className="w-275 h-225 flex flex-col shadow-md gap-3 mt-3">
            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
            <FaCartPlus />    Online Order
            </h1>

            <p className="text-black px-4">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
          <div className="w-275 h-225 flex flex-col shadow-md gap-3 mt-3">
            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
            <RiCustomerService2Fill />  24/7 Service
            </h1>

            <p className="text-black px-4">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>

          <div className="w-275 h-225 flex flex-col shadow-md gap-3 mt-3">
            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
            <IoPersonSharp />   Master Chefs
            </h1>

            <p className="text-black px-4">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>

          <div className="w-275 h-225 flex flex-col shadow-md gap-3 mt-3">
            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
            <ImSpoonKnife /> Quality Food
            </h1>

            <p className="text-black px-4">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>

          <div className="w-275 h-225 flex flex-col shadow-md gap-3 mt-3">
            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
            <FaCartPlus />  Online Order
            </h1>

            <p className="text-black px-4">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>

          <div className="w-275 h-225 flex flex-col shadow-md gap-3 mt-3">
            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
            <RiCustomerService2Fill />   24/7 Service
            </h1>

            <p className="text-black px-4">
              Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet
              diam
            </p>
          </div>
        </div>





        <div className="w-full h-510 flex flex-wrap items-center justify-center mt-2 px-6 md:px-24 2xl:px-96  bg-gray-800">
          
          <div className="w-275 h-225 flex flex-col items-center bg-gray-800  gap-3 mt-3">
            <p className="font-bold text-orange-500 text-[40px]">Company</p>

            <ul
              style={{ listStyleType: "circle" }}
              className="text-white text-[20px]"
            >
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Reservation</li>
              <li>Privacy Policy</li>
              <li>Terms & condition</li>
            </ul>
          </div>

          <div className="w-275 h-225 flex flex-col items-center bg-gray-800  gap-3 mt-3">
            <p className="font-bold text-orange-500 text-[40px]">Contact</p>

            <ul
              style={{ listStyleType: "circle" }}
              className="text-white text-[20px]"
            >
              <li>123 Street, New York, USA </li>
              <li>+012 345 67890</li>
              <li>info@example.com</li>
            </ul>
          </div>

          <div className="w-275 h-225 flex flex-col items-center bg-gray-800  gap-3 mt-3">
            <p className="font-bold text-orange-500 text-[40px]">Opening</p>

            <h1 className="font-semibold text-white text-[20px]">
              Monday - Saturday
            </h1>
            <h1 className="font-semibold text-white text-[15px]">
              09AM - 09PM
            </h1>
            <h1 className="font-semibold text-white text-[20px]">Sunday</h1>
            <h1 className="font-semibold text-white text-[15px]">
              10AM - 08PM
            </h1>
          </div>

          <div className="w-275 h-225 flex flex-col items-center bg-gray-800  gap-3 mt-3">
            <p className="font-bold text-orange-500 text-[40px]">Newsletter</p>

            <h1 className="font-semibold text-white text-[20px]">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </h1>

            <input
              type="email"
              className="px-6 border border-orange-400 py-2"
              placeholder="Email"
            />
          </div>
          <div className="w-[95%] h-1 bg-orange-500"></div>
          
          <motion.div className="w-full bg-gray-800 grid grid-cols-1 md:grid-cols-2 px-2 ">
            <div className="flex flex-col items-start justify-start">
              <p className="text-white font-semibold text-[15px]">
                Copyright Your Site Name, All Right Reserved. Designed By HTML
                Codex
              </p>

              <p className="text-white font-semibold text-[15px] mt-2">
                Distributed By ThemeWagon
              </p>
            </div>

            <div className="py-2 flex-1 flex justify-end relative">
              <nav className="text-white">Home | Cookies | Help | FQAs</nav>
            </div>
          </motion.div>
        </div>


      </div>
    </>
  );
};

export default Service;
