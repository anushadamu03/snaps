import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import CardDetails from "./pages/CardDetails/CardDetails";

function App() {
 
  return (
    <>
      {}

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
