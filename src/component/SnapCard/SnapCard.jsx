import React, { useEffect, useState } from "react";
import "./SnapCard.scss";
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const SnapCard = (props) => {
  const { filterData } = props;

  const navigate = useNavigate();

  // ================================
  const [photoData, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  const API_URL = import.meta.env.VITE_API_URL;

  // Step 2: Fetch photos once we have the API key
  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const response = await axios.get(`${API_URL}/photos`);
        const data = await response.data;
        setPhotos(data);
        setLoading(false);
      } catch (err) {
        console.log("Failed to fetch photos");
      }
    };

    fetchPhotos();
  }, []);

  console.log("photoData==", photoData);

  // ================================

  const [cardsData, setcardsData] = useState([]);

  useEffect(() => {
    if (filterData == "") {
      setcardsData(photoData);
    } else {
      const filteredPhotos = photoData.filter((photo) =>
        photo.tags.includes(filterData)
      );
      setcardsData(filteredPhotos);
    }
  }, [filterData, photoData]);

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
        {cardsData?.length > 0 &&
          cardsData.map((photo, i) => (
            <div
              className="card_cols1  "
              key={i}
            
            >
              <Link
                to={{
                  pathname: `/card-details/${photo.id}`,
                }}
                state={{ isClickCard: true }}
                key={i}
              >
                <div key={photo.id} className="card ">
                  <img src={photo.photo} alt={photo.title} />
                  <span></span>
                  <div className="card-tags">
                    {photo.tags.map((tag, index) => (
                      <span key={index}>{tag}</span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SnapCard;
