import React from "react";

const Cards = ({ data }) => {
  return (
    <div className="container section-container-card ">
      <div className="row ">
        {data &&
          data.map((element) => {
            return (
              <div className={element.section}>
                <h4>{element.title}</h4>
                <p className="text-muted"> {element.description}</p>
                <div className={element.icon} />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Cards;
