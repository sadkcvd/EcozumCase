import "./App.css"
import NavBar from "./components/Navbar/Navbar";
import PackageList from "./components/PackageList/PackageList";
import PaymentScreen from "./components/PaymentScreen/PaymentScreen";
import SignScreen from "./components/SignScreen/SignScreen";
import SuccessScreen from "./components/SuccessScreen/SuccessScreen";
import WrongPage from "./components/WrongPage/WrongPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";
import Protected from "./Protected";


function App() {

  const isLoggedIn = useSelector(state => state.loginReducer.loggedIn)

  return (
    <BrowserRouter>

      <div className="body">
        {isLoggedIn && <NavBar />}
        <Routes>
            <Route path="/sign" element={<SignScreen />} />
            <Route path="*" element={<WrongPage />} />

          <Route element={<Protected isLoggedIn={isLoggedIn} />}>
              <Route path="/" element={<PackageList/>} />
              <Route path="/paymentandcart" element={<PaymentScreen />} />
              <Route path="/successcomp" element={<SuccessScreen />} />      
          </Route>
          
        </Routes>

      </div>
    </BrowserRouter>

  );

}

export default App;