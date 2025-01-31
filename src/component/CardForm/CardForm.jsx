import React from "react";
import "./CardForm.scss";

const CardForm = () => {
  return (
    <div className="card-form-box ">
      <div className="row ">
        <div className="card-form-name-box col-12">
          <div>
            <label htmlFor="">Name</label>
          </div>
          <input type="text" id="name" name="name" required className="" />
        </div>
        <div className="card-form-comment-box col-12">
          <div>
            <label htmlFor="">Comment</label>
          </div>
          <input type="text" id="name" name="name" required className="" />
        </div>
        <div className="card-form-box-button col-12">
          <button type="button">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default CardForm;
