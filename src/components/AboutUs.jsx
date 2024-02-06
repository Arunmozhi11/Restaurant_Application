import React from "react";
import { FDL } from "../assets";
import { A1 } from "../assets";
import { A2 } from "../assets";
import { A3 } from "../assets";

import { AC } from "../assets";

import { Header } from "../components";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, MdRoomService, TbTruckDelivery } from "../assets/icons";

const AboutUs = () => {
  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-start flex-col bg-primary">
        <Header />
        <div className="w-full flex flex-col items-center justify-center mt-20 px-6 md:px-24 2xl:px-96 gap-1 pb-24">
          <img src={FDL} alt="" className="w-40 h-40 flex justify-center" />

          <h1 className="font-semibold text-orange-500 text-[40px]">
            Our Story
          </h1>
          <h1 className="font-semibold text-orange-400 text-[32px]">
            A luxury restaurant with A rare taste you <br />
          </h1>
          <span className="font-semibold text-orange-400 text-[32px]">
            can’t find anywhere in paris.
          </span>

          <p className="text-black text-[20px] font-semibold">
            Lorem Ipsum is simply dummy text of the printing and typeset ting
            industry lorem <br /> Ipsum has been the industrys standard my text
            ever since the when an unknown <br />
            <span className="text-black text-[20px] font-semibold flex justify-center">
              printer took a galley of type and scrambled it to make. img img
            </span>
          </p>
        </div>

        <div className="w-full flex  items-center justify-around mt-2 px-6 md:px-24 2xl:px-96 gap-2 pb-24">
          <div className="bg-lightOverlay hover:drop-shadow-lg backdrop-blur-md rounded-xl flex flex-wrap items-center justify-center px-4 py-2 h-full gap-5">
            <img src={A1} alt="" className="w-80 h-60  mb-2" />

            <img src={A2} alt="" className="w-80 h-60 mb-2" />

            <img src={A3} alt="" className="w-80 h-60  mb-2" />
          </div>
        </div>

        <div className="bg-black text-white w-full h-20 py-4">
          <marquee behavior="" direction="right" className="text-[30px]">
            DOOR DELIVERY * OUTDOOR CATERING * FINE DINING * BANQUETS HALL
          </marquee>
        </div>

        <motion.div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
          <div className="flex flex-col items-start justify-start gap-4">
            <img src={AC} alt="" className="w-508 h-510 mb-2 px-4 rounded-t-full" />
            <h1 className="font-semibold capitalize text-[30px]">
              master chef Jammie Waters
            </h1>
          </div>

          <div className="py-2 flex-1 flex flex-col mt-20 items-start srelative">
            <h1 className="font-semibold text-orange-500 text-[40px]">
              Our chef
            </h1>

            <h1 className="font-bold text-black text-[32px] capitalize">
              a master chef with 25 <br />
              years of experience
            </h1>

            <p className="text-black text-[20px] capitalize mt-4">
              Lorem Ipsum is simply dummy text of the printing and typeset ting
              industry lorem Ipsum has the industrys standard my text ever since
              the when an unknown printer.
            </p>
          </div>
        </motion.div>

        <div className="w-full flex flex-col justify-start mt-20 px-6 md:px-24 2xl:px-96 gap-1 pb-2">
          <h1 className="font-semibold text-orange-500 text-[30px]">
            Why we best
          </h1>
          <h1 className="font-semibold text-black text-[30px] capitalize">
            our Journey started from 1923 <br />
            to serve tasty steaks
          </h1>
        </div>

        <div className="w-full flex flex-wrap justify-center mt-2 px-6 md:px-24 2xl:px-96 gap-3 pb-24">
          <div className="w-350 h-225 flex flex-col shadow-md gap-3">

            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
          <FaMapMarkerAlt />   
            Prime location
            </h1>

            <p className="text-black px-4">
              Lorem Ipsum is simply dummy text of the printing and typeset ting
              industry lorem Ipsum has been the industrys standard my text ever
              sincestandard.
            </p>
          </div>

          <div className="w-350 h-225 flex flex-col shadow-md gap-3">
            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
            <TbTruckDelivery /> Free home delivery
            </h1>

            <p className="text-black px-4">
              Lorem Ipsum is simply dummy text of the printing and typeset ting
              industry lorem Ipsum has been the industrys standard my text ever
              sincestandard.
            </p>
          </div>

          <div className="w-350 h-225 flex flex-col shadow-md gap-3">
            <h1 className="text-orange-400 font-bold capitalize mt-5 text-[30px] px-4">
            <MdRoomService /> premium services
            </h1>

            <p className="text-black px-4">
              Lorem Ipsum is simply dummy text of the printing and typeset ting
              industry lorem Ipsum has been the industrys standard my text ever
              sincestandard.
            </p>
          </div>
        </div>



      </div>
    </>
  );
};

export default AboutUs;