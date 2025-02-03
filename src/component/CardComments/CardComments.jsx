import React, { useEffect, useState } from "react";
import "./CardComments.scss";
import axios from "axios";
const CardComments = (props) => {
  const { card_id, commentData } = props;

  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {}, [card_id]);

  function readableDate(timestamp) {
    const date = new Date(timestamp);
    const day = date.getDate().toString().padStart(2, "0"); 
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); 
    const year = date.getFullYear().toString().slice(-2); 
    
  
    return `${day}/${month}/${year}`;
  }
  console.log(commentData);

  return (
    <div className="carddetails-user-comments-box">
      {commentData && (
        <div className="carddetails-user-comments-content">
          <h6>{commentData?.length} Comments</h6>
        </div>
      )}
      {commentData &&
        commentData.length > 0 &&
        commentData?.map((value, i) => {
          return (
            <div className="carddetails-user-comments-content" key={i}>
              <div>
                <p>{value.name}</p>
                <h6>{value.comment}</h6>
              </div>
              <span className="">{readableDate(value.timestamp)}</span>
            </div>
          );
        })}
    </div>
  );
};

export default CardComments;

// ================================
// const [commentData, setComment] = useState([]);
// const [loading, setLoading] = useState(true);

// const fetchPhotos = async () => {
//   try {
//     const response = await axios.get(`${API_URL}/photos/${card_id}/comments`);
//     const data = await response.data.comments;
//     console.log("comment==####",data)
//     setComment(data);
//     // setLoading(false);
//   } catch (err) {
//     console.log('Failed to fetch photos',err);
//   }
// };

// fetchPhotos(setComment);
// console.log("data==####",data)

{
  /* <div className="carddetails-user-comments-content">
        <div>
          <p>Elena Rossi</p>
          <h6>
            I love the details captured here, especially the architecture.
          </h6>
        </div>
        <span>08/29/2024</span>
      </div>
      <div className="carddetails-user-comments-content">
        <div>
          <p>Amara Okoye</p>
          <h6>
            I hope to capture photos like you one day! You always manage to
            capture the city with such great visual depth.
          </h6>
        </div>
        <span>08/29/2024</span>
      </div> */
}
