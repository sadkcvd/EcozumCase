import "./App.css"
// import NavBar from "./components/navbar/navBar";
import PackageList from "./components/packageList/packageList";
import PaymentScreen from "./components/paymentScreen/paymentScreen";
import SignScreen from "./components/signScreen/signScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <div className="body">
     
        <Routes>
          <Route path="/" element={<SignScreen />} />
          <Route path="/packagelist" element={<PackageList />} />
          <Route path="/paymentandcart" element={<PaymentScreen />} />
          <Route path="*" element={<p><h1><strong>No such page found..!</strong></h1></p>} />
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
