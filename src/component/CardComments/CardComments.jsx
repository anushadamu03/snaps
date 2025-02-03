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
