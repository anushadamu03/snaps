import React, { useEffect, useState } from "react";
import "./SnapCard.scss";
import { useNavigate } from "react-router-dom";

import axios from "axios";

const SnapCard = (props) => {
  const {filterData} = props;

  const navigate = useNavigate();

  // ================================
    const [photoData, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true); 
  
   
    useEffect(() => {
      
        const fetchPhotos = async () => {
          try {
            const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`);
            // console.log("photoData==$$",response)
            const data = await response.data;
            setPhotos(data);
            setLoading(false);
          } catch (err) {
            console.log('Failed to fetch photos');
          }
        };
  
        fetchPhotos();
      
    }, []);

    console.log("photoData==",photoData)

  // ================================

  const [cardsData,setcardsData] = useState([]);

  useEffect(() => {
    if(filterData == ""){
      setcardsData(photoData);
    }else{
      const filteredPhotos = photoData.filter(photo =>
        photo.tags.includes(filterData)
      );
      setcardsData(filteredPhotos);
    }
 
  }, [filterData, photoData]);

  // console.log("filterData==",cardsData.length)

  return (
    <div>
  
      <div className="card-header-content">
        <p>Our mission:</p>
        <h1>
          Provide photographers a space to share photos of the neighborhoods
          they cherish, <span> expressed in their unique style. </span>
        </h1>
      </div>
      <div className="card-section  row ">
        {cardsData?.length > 0 && cardsData.map((photo,i) => (
          <div className="card_cols1  " key={i}   onClick={() => {
            navigate("/card-details", { state: { isClickCard: true, card_id:photo.id } });
          }} >
            <div key={photo.id} className="card ">
              <img src={photo.photo} alt={photo.title} />
              <span></span>
              <div className="card-tags">
                {photo.tags.map((tag, index) => (
                  <span key={index}>{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SnapCard;
