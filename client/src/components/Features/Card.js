import React from "react";
import "./CardX.css";
function Cards(CardProperties) {
  return (
    <>
      <a href="" class="card">
        <img src={CardProperties.BackGroundLink} class="card__image" alt="" />
        <div class="card__overlay">
          <div class="card__header">
            <svg class="card__arc" xmlns="http://www.w3.org/2000/svg">
              <path />
            </svg>
            <img
              class="card__thumb"
              src={CardProperties.DescriptionLink}
              alt=""
            />
            <div class="card__header-text">
              <h3 class="card__title"> {CardProperties.Heading} </h3>
              <span class="card__status">1 hour ago</span>
            </div>
          </div>
          <p class="card__description">{CardProperties.Description}</p>
        </div>
      </a>
    </>
  );
}
export default Cards;
