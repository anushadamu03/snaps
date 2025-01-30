import React, { useEffect, useState } from "react";
import photoData from "../../data/photos.json";
import "./SnapCard.scss";
import { useNavigate } from "react-router-dom";

const SnapCard = (props) => {
  const {filterData} = props;

  const navigate = useNavigate();

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
 
  }, [filterData]);

  console.log("filterData==",cardsData.length)

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
            navigate("/card-details", { state: { isClickCard: true } });
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
