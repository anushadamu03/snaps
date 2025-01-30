import React from "react";
import "./CardComments.scss";
const CardComments = () => {
  return (
    <div className="carddetails-user-comments-box">
      <div className="carddetails-user-comments-content">
        <h6>3 Comments</h6>
      </div>
      <div className="carddetails-user-comments-content">
        <div>
          <p>Casey Schmidt</p>
          <h6>The mood and atmosphere in this shot are beautiful.</h6>
        </div>
        <span className="">08/29/2024</span>
      </div>
      <div className="carddetails-user-comments-content">
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
      </div>
    </div>
  );
};

export default CardComments;
