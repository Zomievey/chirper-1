import React from "react";

let Chirp = props => {
  return (
    <div className="card border-primary mb-3" style={{ width: "40%" }}>
      <div className="card-header">{props.chirp.time}</div>
      <div className="card-body">
        <h4 className="card-title">{props.chirp.inputName}</h4>
        <p className="card-text">{props.chirp.inputChirp}</p>
      </div>
    </div>
  );
};

export default Chirp;
