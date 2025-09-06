import React from "react";
import { DestinationCard } from "./DestinationCard";

export const Destination = () => {
  return (
    <div className="destination-container">
      <div className="destination">
        <div className="destination-header">
          <h3>Top Destinations</h3>
          <p>The most searched countries in FareFirst</p>
        </div>

        <div className="destination-grid">
          <div className="destination-flex">
            <DestinationCard
            title="Spain"
            subtitle="#spain"
            image="https://www.farefirst.com/_next/static/images/3-b5c35b08f9fb4dcc40ccaa198ea147b4.jpg"
          />
          <DestinationCard
            title="Turkey"
            subtitle="#turkey"
            image="https://www.farefirst.com/_next/static/images/3-8035e3f7e3cc75cc7f23996ce093d8eb.jpg"
          />
          <DestinationCard
            title="Morocco"
            subtitle="#Much Mor"
            image="https://www.farefirst.com/_next/static/images/5-c23a8d2bb974857b828b2bd7ab6c4b62.jpg"
          />
          </div>
          <div className="destination-flex">
            <DestinationCard
            title="France"
            subtitle="#Rendez vous en France"
            image="https://www.farefirst.com/_next/static/images/2-5be6a3e7a7a9d6b240c6e6a7d42bca4d.jpg"
          />
          <DestinationCard
            title="Thailand"
            subtitle="Amazing Thailand"
            image="https://www.farefirst.com/_next/static/images/2-8392a5f1a37597c4836283dc16238c31.jpg"
          />
          <DestinationCard
            title="Mexico"
            subtitle="Live it to Believe it"
            image="https://www.farefirst.com/_next/static/images/3-7af10dcdb9953d964b01b2d9b27038af.jpg"
          />
          </div>
          
        </div>
      </div>
    </div>
  );
};
