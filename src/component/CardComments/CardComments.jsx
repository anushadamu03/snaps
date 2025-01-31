import React, { useEffect, useState } from "react";
import "./CardComments.scss";
import axios from "axios";
const CardComments = (props) => {

  
const {card_id} = props;
     // ================================
        const [commentData, setComment] = useState([]);
        const [loading, setLoading] = useState(true); 
      
       
        useEffect(() => {
          
            const fetchPhotos = async () => {
              try {
                const response = await axios.get(`https://unit-3-project-c5faaab51857.herokuapp.com/photos/${card_id}/comments?api_key=e0eea5f0-0f8c-4b54-9fc4-ff50843766d4`);
                const data = await response.data;
                setComment(data);
                setLoading(false);
              } catch (err) {
                console.log('Failed to fetch photos');
              }
            };
      
            fetchPhotos();
          
        }, [card_id]);
    
        console.log("comment==####",commentData)
    
      // ================================


      function readableDate(timestamp){
        const date = new Date(timestamp);
        return date.toLocaleString();
      }

  return (
    <div className="carddetails-user-comments-box">
      {
        commentData &&
      
      <div className="carddetails-user-comments-content">
        <h6>3 Comments</h6>
      </div>
      }
      {
        commentData && commentData.length > 0 &&
        commentData?.map((value,i)=>{
          return(
            <div className="carddetails-user-comments-content" key={i}>
            <div>
              <p>{value.name}</p>
              <h6>{value.comment}</h6>
            </div>
            <span className="">{readableDate(value.timestamp)}</span>
          </div>
          )
        })
    
      }
      {/* <div className="carddetails-user-comments-content">
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
      </div> */}
    </div>
  );
};

export default CardComments;
