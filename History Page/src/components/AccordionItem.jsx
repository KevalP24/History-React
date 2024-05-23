import React from "react";

const AccordionItem = ({ title, content, img, isActive, onClick }) => {
  return (
    <div id={`${title.replace(/\s+/g, '').toLowerCase()}Item`}>
      <button className={`accordion-btn ${isActive ? 'active' : ''}`} onClick={onClick}>
        <div className="image-container">
          <img className="img-minimized" src={img} alt="Minimized" />
        </div>
        <span>{title}</span>
      </button>
      <div className={`panel ${isActive ? 'active' : ''}`} id={`${title.replace(/\s+/g, '').toLowerCase()}Panel`}>
        <div className="mySlides">{content}</div>
      </div>
    </div>
  );
};

export default AccordionItem;
