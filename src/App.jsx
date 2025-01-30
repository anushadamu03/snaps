import "./App.scss";
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
            <Route exact path="/card-details" element={<CardDetails/>} />
           
          </Routes>

        
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
