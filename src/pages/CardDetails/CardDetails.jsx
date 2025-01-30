import React from "react";
import "./CardDetails.scss";
import CardForm from "../../component/CardForm/CardForm";
import CardComments from "../../component/CardComments/CardComments";
import like from "../../assets/images/Like_Outline.svg"
import Footer from "../../component/Footer/Footer";
import Header from "../../component/Header/Header";

const data = [
  { tag: "Subway" },
  { tag: "Subway" },
  { tag: "Subway" },
  { tag: "csrs" },
];
const CardDetails = () => {
  return (
    <div className="outer_container">   
    <Header  />
    <div className="">
      <div className="card-section  ">
        <div className="selected_card_detail  ">
          <div className="card-details-box ">
            <div className="card-details-info-box">
              <div className="">
                <img
                  src={
                    "https://unit-3-project-c5faaab51857.herokuapp.com/photos/Photo-00.png"
                  }
                  alt=""
                />
              </div>
              <div className="card-tags">
                {data.map((tag, index) => (
                  <span key={index}>{tag.tag}</span>
                ))}
              </div>
              <div className="card-detail-infomation">
                <div className="carddetails-name-likes">
                  <div><span><img src={like} alt="" className=""/></span>1048 Likes</div>
                  <div>Photo by Ali Novak-Greene</div>
                </div>
                <div>08/06/2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardForm />
      <CardComments />
    </div>
    <Footer />
    </div>
  );
};

export default CardDetails;
