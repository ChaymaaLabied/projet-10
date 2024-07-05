import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card({ title, imageUrl, id }) {
  const navigate = useNavigate();

  const divStyle = {
    height: "100%",
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: "cover", // Ensures the image covers the entire div
    backgroundRepeat: "no-repeat", // Prevents the image from repeating
    backgroundPosition: "center", // Centers the image
    position: "relative",
    color: "white", // Ensures text is visible (optional, depending on your design)
    textAlign: "center", // Centers the text (optional, depending on your design)
  };

  const titleStyle = {
    position: "absolute",
    bottom: "10px",
    left: "10px",
    color: "white", // Ensures the text is white
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Optional: Adds a background for better readability
    padding: "5px", // Optional: Adds some padding to the title
    borderRadius: "5px", // Optional: Rounds the corners of the title background
  };

  const handleClick = () => {
    navigate(`/${id}/details`);
  };

  return (
    <div style={divStyle} onClick={handleClick}>
      <span style={titleStyle}>{title}</span>
    </div>
  );
}
