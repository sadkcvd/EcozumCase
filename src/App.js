import "./App.css"
import NavBar from "./components/navbar/navBar";
import PackageList from "./components/packageList/packageList";
import PaymentScreen from "./components/paymentScreen/paymentScreen";
import SignScreen from "./components/signScreen/signScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import {useSelector} from "react-redux";

function App() {

      const isLogin = useSelector(state => state.loginReducer.loggedIn)

  return (
    <BrowserRouter>

      <div className="body">
        
        {isLogin && <NavBar />}
        
        <Routes>
          <Route path="/" element={<SignScreen />} />
          <Route path="/packagelist" element={<PackageList />} />
          <Route path="/paymentandcart" element={<PaymentScreen />} />
          <Route path="*" element={<p><strong>No such page found..!</strong></p>} />
        </Routes>

        {/* <NavBar/> */}
        {/* <PaymentScreen/> */}
        {/* <SignScreen /> */}
        {/* <PackageList/> */}

      </div>
    </BrowserRouter>

  );
 
}

 export default App;