import React, { useState } from "react";
import "./Drawer.scss"; 

import tagsData from "../../data/tags.json";
// import photoData from "../../data/photos.json";

const Drawer = (props) => {
  const {setfilterData, setIsOpenDrawer, isOpenDrawer} = props;


  const toggleDrawer = () => setIsOpenDrawer(!isOpenDrawer);

 return (
    <div className="drawer-container">
      {/* Button to toggle the drawer */}
      { <button className="toggle-button" onClick={toggleDrawer}>
        Open Drawer
      </button> }

      {/* Overlay */}
      {isOpenDrawer && <div className="overlay" onClick={toggleDrawer}></div>}

      {/* Drawer */}
      <div
        className={`drawer ${
          isOpenDrawer ? "open" : ""
        } ${window.innerWidth >= 768 ? "desktop" : "mobile"}`}
      >
        <button className="close-button" onClick={toggleDrawer}>
          &times;
        </button>
        <div className="drawer-content">
          <div className="home_tag_drawers">  
          <h2>Filters</h2>
          
         {
        tagsData.map((v,i)=>{
          return(
            <button className={"tag_button"} key={i} onClick={()=> setfilterData(v)} >{v}</button>
          )
        })
        }
</div>

        </div>
      </div>
    </div>
  );
};

export default Drawer;
