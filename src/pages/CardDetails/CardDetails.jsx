import React, { useEffect, useState } from "react";
import "./CardDetails.scss";
import CardForm from "../../component/CardForm/CardForm";
import CardComments from "../../component/CardComments/CardComments";
import like from "../../assets/images/Like_Outline.svg";
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";
import { useLocation,useParams } from "react-router-dom";
import axios from "axios";


const CardDetails = () => {
  const {id} = useParams(); 
  const card_id = id;
  const location = useLocation(); 
  const { isClickCard} = location.state || {};
  // ================================
  const [photoCardData, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;
  // Step 2: Fetch photos once we have the API key
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos/${card_id}`);
        const data = await response.data;
        setPhotos(data);
        setLoading(false);
      } catch (err) {
        console.log("Failed to fetch photos");
      }
    };

    fetchPhotos();
  }, [card_id]);

  

  // ================================
  const [commentData, setComment] = useState([]);
  const fetchCommentArray = async () => {
    try {
      const response = await axios.get(`${API_URL}/photos/${card_id}/comments`);
      const data = await response.data.comments.reverse();
      console.log("comment==####", data);
      setComment(data);
      
    } catch (err) {
      console.log("Failed to fetch photos", err);
    }
  };

  useEffect(() => {
    fetchCommentArray();
  }, [card_id]);

  return (
    <div className="outer_container ">
      <Header />
      {
    } 
      {photoCardData && (
        <div className="card-section-container">
          <div className="card-section">
            <div className="selected_card_detail  ">
              <div className="card-details-box ">
                <div className="card-details-info-box">
                  <div className="">
                    <img
                      src={
            
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
                      <div>
                        <span>
                          <img
                            src={like}
                            alt=""
                            className=""
                            style={{ marginRight: "8px" }}
                          />
                        </span>
                        {photoCardData.likes} Likes
                      </div>
                      <div>Photo by {photoCardData.photographer}</div>
                    </div>
                    <div>08/06/2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <CardForm card_id={card_id} fetchCommentArray={fetchCommentArray} />
          <CardComments card_id={card_id} commentData={commentData} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default CardDetails;
