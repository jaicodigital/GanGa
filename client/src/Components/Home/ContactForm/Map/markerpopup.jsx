import React from "react";
import { Popup } from "react-leaflet";

const MarkerPopup = (props) => {
  const { name } = props;
  const {description} = props;
  return (
    <Popup>
      <div>{name}</div>
      <div>{description}</div>
    </Popup>
  );
};

export default MarkerPopup;