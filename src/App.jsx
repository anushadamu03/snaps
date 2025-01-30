
import "./App.scss";
// import Header from "./component/Header/Header";
// import Footer from "./component/Footer/Footer";
// import SnapCard from "./component/SnapCard/SnapCard";
// import Drawer from "./component/Drawer/Drawer";
// import { useState } from "react";

function App() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);

   const [filterData, setfilterData] = useState("");

  return (
    <>
      { <div className="mx-auto px-4">
        <Header setIsOpenDrawer={setIsOpenDrawer} />
        <Drawer setfilterData={setfilterData} setIsOpenDrawer={setIsOpenDrawer} isOpenDrawer={isOpenDrawer} />
        <SnapCard filterData={filterData} />
        <Footer />
      </div> }

    </>
  );
}

export default App;
