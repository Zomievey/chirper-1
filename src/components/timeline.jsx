import React from "react";
import Chirp from "./chirp";

function Timeline(props) {
  return props.chirps.map((chirp, id) => <Chirp chirp={chirp} key={id} />);
}

export default Timeline;
