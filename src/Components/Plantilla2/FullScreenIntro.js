import React from "react";

export const FullScreenIntro = ({ backgroundImage, title, subtitle }) => {
  return (
    <div className="vh-100 full-screen" style={{ backgroundImage: `url('${backgroundImage}')` }}>
      <div className="h-100 d-flex flex-column justify-content-center">
        <h1 className="title">{title}</h1>
        <h2 className="subtitle">{subtitle}</h2>
      </div>
    </div>
  );
};
