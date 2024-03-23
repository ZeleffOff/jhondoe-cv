import React from "react";
import "./styles/serviceCard.css";

export function ServiceCard({ name, description, icon }) {
  return (
    <div className="card service-card" style={{ minHeight: "50vh" }}>
      <div className="pt-5 card-body text-center d-flex flex-column align-items-center justify-content-start">
        <i className={`${icon} display-6 mb-3 service-icon`}></i>
        <h5 className="card-title title">{name}</h5>
        <p className="card-text text">{description}</p>
      </div>
    </div>
  );
}
