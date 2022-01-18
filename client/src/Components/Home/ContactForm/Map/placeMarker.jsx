import React from "react";
import { Marker } from "react-leaflet";
// import {IconUbi} from "./iconUbi.jsx";
import locationImg from "../../../Resources/location.png";
import MarkerPopup from "./markerpopup";

const Markers = (props) => {
  const { places } = props;
  const markers = places.map((place, i) => (
    <Marker
      key={i}
      position={place.geometry}
      description={place.description}
      img={locationImg}
    >
      <MarkerPopup places={places.description} img={locationImg} />
    </Marker>
  ));
  return <>{markers}</>;
};

export default Markers;
