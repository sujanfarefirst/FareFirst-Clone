import React from "react";
import "./component.css";
import play from "../assets/playstore.svg";
import app from "../assets/appstore.svg";
import appGallery from "../assets/appgallery.svg";
import indus from "../assets/indus App Bazar.png";
import galaxy from "../assets/galaxystore.png";
import bixby from "../assets/bixby.png";
import phone from "../assets/phone.png";

export const Download = () => {
  return (
    <div className="download-container">
      <div className="download-content">
        <h3>Download our App</h3>
        <p>
          Unlock a world of travel possibilities with the FareFirst app - the
          best travel app for your mobile device.
        </p>
        <div className="grid-container">
          <a href="https://play.google.com/store/apps/details?id=com.cheapflightsapp.flightbooking" target="_blank">
            <img src={play} alt="Google Play" />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.cheapflightsapp.flightbooking" target="_blank">
            <img src={app} alt="App Store" />
          </a>
          <a href="https://appgallery.huawei.com/app/C101289807" target="_blank">
            <img src={appGallery} alt="AppGallery" />
          </a>
          <a href="https://www.indusappstore.com/apps/travel-and-local/farefirst/com.cheapflightsapp.flightbooking?page=details&id=com.cheapflightsapp.flightbooking" target="_blank">
            <img src={indus} alt="Indus App Bazaar" />
          </a>
          <a href="https://galaxystore.samsung.com/detail/com.cheapflightsapp.flightbooking" target="_blank">
            <img src={galaxy} alt="Galaxy Store" />
          </a>
          <a href="https://www.samsung.com/us/apps/bixby/" target="_blank">
            <img src={bixby} alt="Bixby" />
          </a>
        </div>
      </div>
      <div className="download-image">
        <a href="/">
          <img src={phone} alt="Ad" />
        </a>
      </div>
    </div>
  );
};
