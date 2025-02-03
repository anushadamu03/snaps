// import "./assets/css/bootstrap.min.css";

import "./App.scss";
// import Header from "./component/Header/Header";
// import Footer from "./component/Footer/Footer";
// import SnapCard from "./component/SnapCard/SnapCard";
// import Drawer from "./component/Drawer/Drawer";
// import { useState } from "react";


import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CardDetails from "./pages/CardDetails/CardDetails";

function App() {
  // const [isOpenDrawer, setIsOpenDrawer] = useState(false);

  // const [filterData, setfilterData] = useState("");

  return (
    <>
      {/* <div className="mx-auto px-4">
        <Header setIsOpenDrawer={setIsOpenDrawer} />
        <Drawer setfilterData={setfilterData} setIsOpenDrawer={setIsOpenDrawer} isOpenDrawer={isOpenDrawer} />
        <SnapCard filterData={filterData} />
        <Footer />
      </div> */}

      <div className="mx-auto ">
        <BrowserRouter>
         
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/card-details/:id" element={<CardDetails/>} />
           
          </Routes>

        
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
