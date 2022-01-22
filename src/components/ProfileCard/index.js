import React from "react";
import "./style.css";
import { StarFilled } from "@ant-design/icons";
import dp from "../../Image/profilepic.png";
export const ProfileCard = () => {
  return (
    <div className="profile-card">
      <h1>Your Profile</h1>
      <div className="row1">
        <img src={dp} alt="sumeet" />
        <article className="basicinfo">
          <h2>Sumit Prakash</h2>
          <p>
            <b>Age: </b>22
          </p>
          <p>
            <b>Role: </b>All Rounder
          </p>
          <p>
            <b>Player Rating: </b>
            {<StarFilled style={{ marginTop: 5, position: "absolute" }} />}
            <span className="ratingtext">4.3</span>
          </p>
        </article>
      </div>
      <div className="row2">
        <article>
          <h3>Recent Performances</h3>
          <h5>1) 44(23) </h5>
          <p> Colaba Champions v Bandra Legends </p>
          <h5>2) 100*(57) </h5>
          <p> KPMG International v Bajaj Corporate </p>
          <h5>3) 4/15(4 Overs) </h5>
          <p> DAV Public vs Ryan International </p>
        </article>
        <article className="otherinfo">
          <h3>Other Information</h3>
          <p>
            <b>Height: </b>5'11"
          </p>
          <p>
            <b>Batting style: </b>Right Handed
          </p>
          <p>
            <b>Matches Played:</b> 22
          </p>
        </article>
      </div>
      {/* <div className="row3">
        <article>
          <h3>Batting Stats</h3>
          <h5>Matches : </h5>
          <p> Colaba Champions v Bandra Legends </p>
          <h5>2) 100*(57) </h5>
          <p> KPMG International v Bajaj Corporate </p>
          <h5>3) 4/15(4 Overs) </h5>
          <p> DAV Public vs Ryan International </p>
        </article>
        <article>
          <h3>Other Information</h3>
          <h5>1) 44(23) </h5>
          <p> Colaba Champions v Bandra Legends </p>
          <h5>2) 100*(57) </h5>
          <p> KPMG International v Bajaj Corporate </p>
          <h5>3) 4/15(4 Overs) </h5>
          <p> DAV Public vs Ryan International </p>
        </article>
        <article>
          <h3>Other Information</h3>
          <h5>1) 44(23) </h5>
          <p> Colaba Champions v Bandra Legends </p>
          <h5>2) 100*(57) </h5>
          <p> KPMG International v Bajaj Corporate </p>
          <h5>3) 4/15(4 Overs) </h5>
          <p> DAV Public vs Ryan International </p>
        </article>
      </div> */}
    </div>
  );
};
