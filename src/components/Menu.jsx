import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HiCurrencyRupee, IoBasket } from "../assets/icons";
import { motion } from "framer-motion";
import { buttonClick } from "../animations";
import { addNewItemToCard, getAllCartItems } from "../api";
import { alertNULL, alertSuccess } from "../context/actions/alertActions";
import { setCartItems } from "../context/actions/cartAction";
import { menuData } from "../utils/styles";
import { Cart, Header } from "../components";

const Menu = () => {
  const user = useSelector((state) => state.user);
  const products = useSelector((state) => state.products);
  const isCart = useSelector((state) => state.isCart);
  const dispatch = useDispatch();

  const [searchTerm, setSearchTerm] = useState("");
  const [isFocus, setIsFocus] = useState(false);


  const sendToCard = (data) => {
    dispatch(alertSuccess("Added to the cart"));
    addNewItemToCard(user?.user_id, data).then((res) => {
      getAllCartItems(user?.user_id).then((items) => {
        dispatch(setCartItems(items));
      });
      setTimeout(() => {
        dispatch(alertNULL());
      }, 3000);
    });
  };

  const renderImageRow = (rowData, startIndex) => (
    <div key={startIndex} className="flex flex-wrap justify-between mb-4">
      {rowData.map((data, i) => (
        <div key={i} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-4 px-4">
          <div className="bg-lightOverlay hover:drop-shadow-lg backdrop-blur-md rounded-xl flex flex-col shadow-md items-center justify-around px-4 py-2 h-full">
            <img
              src={data.imageURL}
              alt=""
              className="w-full h-40 object-contain mb-2"
            />
            <div className="w-full">
              <p className="text-xl text-headingClolor font-semibold">
                {data.product_name}
              </p>
              <p className="text-lg font-semibold text-red-500 flex items-center justify-center gap-1">
                <HiCurrencyRupee className="text-red-500" />{" "}
                {parseFloat(data.product_price).toFixed(2)}
              </p>
            </div>
            <motion.div
              {...buttonClick}
              onClick={() => sendToCard(data)}
              className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center cursor-pointer mt-2"
            >
              <IoBasket className="text-2xl text-primary" />
            </motion.div>
          </div>
        </div>
      ))}
    </div>
  );

  const itemsPerRow = 3;

  const filteredMenuData = menuData.filter((item) =>
    item.product_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-screen min-h-screen flex items-center justify-center flex-col bg-primary">
        <Header />

        <div className="w-full flex flex-col  justify-between mt-40 px-6 md:px-24 2xl:px-96 gap-12 pb-24">
          <div className="flex flex-col items-start justify-start gap-1">
            <p className="text-2xl to-headingColor font-bold">Our Menu</p>
            <div className="w-40 h-1 rounded-md bg-orange-500"></div>
          </div>

          {/* Search Input */}
           <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
            className={`flex items-center justify-center gap-4 bg-lightOverlay backdrop-blur-md rounded-md shadow-xl px-4 py-2 w-[40%] border-none outline-none ${
              isFocus ? "shadow-md shadow-orange-500" : "shadow-none"
            }`}
          />
          
          {filteredMenuData &&
            Array.from({
              length: Math.ceil(filteredMenuData.length / itemsPerRow),
            }).map((value, index) => {
              const startIndex = index * itemsPerRow;
              const endIndex = startIndex + itemsPerRow;
              return renderImageRow(
                filteredMenuData.slice(startIndex, endIndex),
                startIndex
              );
            })}
        </div>
        {isCart && <Cart />}
      </div>
    </>
  );
};

export default Menu;
