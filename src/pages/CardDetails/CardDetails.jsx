import React, { useEffect, useState } from "react";
import "./CardDetails.scss";
import CardForm from "../../component/CardForm/CardForm";
import CardComments from "../../component/CardComments/CardComments";
import like from "../../assets/images/Like_Outline.svg"
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import { useLocation } from "react-router-dom";
import axios from "axios";

const data = [
  { tag: "Subway" },
  { tag: "Subway" },
  { tag: "Subway" },
  { tag: "csrs" },
];
const CardDetails = () => {

  const location = useLocation(); 
  const { isClickCard, card_id } = location.state || {};

   // ================================
      const [photoCardData, setPhotos] = useState([]);
      const [loading, setLoading] = useState(true); 
    
      useEffect(() => {
        
          const fetchPhotos = async () => {
            try {
              const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${card_id}?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`);
              const data = await response.data;
              setPhotos(data);
              setLoading(false);
            } catch (err) {
              console.log('Failed to fetch photos');
            }
          };
    
          fetchPhotos();
        
      }, [card_id]);
  
      // console.log("photoData==####",photoCardData)
  
    // ================================

   

  return (
    <div className="outer_container">   
    <Header  />
    {/* {loading &&
        <div>Loading...</div>
    } */}
    {
      photoCardData &&
    
    <div className="">
      <div className="card-section  ">
        <div className="selected_card_detail  ">
          <div className="card-details-box ">
            <div className="card-details-info-box">
              <div className="">
                <img
                  src={
                    // "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-00.png"
                    photoCardData.photo
                  }
                  alt=""
                />
              </div>
              <div className="card-tags">
                {photoCardData?.tags?.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
              <div className="card-detail-infomation">
                <div className="carddetails-name-likes">
                  <div><span><img src={like} alt="" className="" style={{marginRight: "8px"}}/></span>{photoCardData.likes} Likes</div>
                  <div>Photo by {photoCardData.photographer}</div>
                </div>
                <div>08/06/2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardForm />
      <CardComments card_id={card_id} />
    </div>
    }
    <Footer />
    </div>
  );
};

export default CardDetails;
