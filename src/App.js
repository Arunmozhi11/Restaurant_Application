import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Dashboard, Login, Main } from "./containers";
import { app } from "./config/firebase.config";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
import { getAllCartItems, validateUserJWTToken } from "./api";
import { useDispatch, useSelector } from "react-redux";
import { setUserDetails } from "./context/actions/userActions";
import { fadeInOut } from "./animations";
import { motion } from "framer-motion";
import {
  AboutUs,
  Alert,
  Cart,
  CheckOutSuccess,
  MainLoader,
  Menu,
  Service,
  UsersOrder,
} from "./components";
import { setCartItems } from "./context/actions/cartAction";

function App() {
  const firebaseAuth = getAuth(app);

  const [isLoading, setIsLoading] = useState(false);
  const alert = useSelector((state) => state.alert);

  const dispatch = useDispatch();

  useEffect(() => {
    setIsLoading(true);

    firebaseAuth.onAuthStateChanged((cred) => {
      if (cred) {
        cred.getIdToken().then((token) => {
          validateUserJWTToken(token).then((data) => {
            if (data) {
              getAllCartItems(data.user_id).then((items) => {
                console.log(items);
                dispatch(setCartItems(items));
              });
            }
            dispatch(setUserDetails(data));
          });
        });
      }
      setInterval(() => {
        setIsLoading(false);
      }, 3000);
    });
  }, []);

  return (
    <div className="w-screen min-h-screen h-auto flex flex-col items-center justify-center">
      {isLoading && (
        <motion.div
          {...fadeInOut}
          className="fixed z-50 inset-0 bg-lightOverlay backdrop-blur-md flex items-center justify-center w-full"
        >
          <MainLoader />
        </motion.div>
      )}
      <Routes>
        <Route path="/*" element={<Main />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/Service" element={<Service />} />

        <Route path="/Login" element={<Login />} />
        <Route path="/Dashboard/*" element={<Dashboard />} />
        <Route path="/Checkout-success/*" element={<CheckOutSuccess />} />
        <Route path="/user-orders" element={<UsersOrder />} />
      </Routes>

      {alert?.type && <Alert type={alert?.type} message={alert?.message} />}
    </div>
  );
}

export default App;
