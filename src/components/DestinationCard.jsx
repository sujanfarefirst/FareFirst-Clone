import React from "react";

export const DestinationCard = ({ title, subtitle, image }) => (
  <div
    className="image-container"
    style={{
      backgroundImage: `url(${image})`,
    }}
  >
    <div>
      <div className="image-title">{title}</div>
      <div className="sub-title">{subtitle}</div>
    </div>
  </div>
);
