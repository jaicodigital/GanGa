import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
// import data from "../../../Resources/data.json";
import { places } from "../../../Resources/data.json";
import Markers from "./placeMarker";
import "leaflet/dist/leaflet.css";
// import { IconUbi } from "./iconUbi";
import locationIcon from "../../../Resources/location.png";
import "./map.css";

const MapView = (props) => {
  const [state, setState] = useState({
    currentLocation: { lat: 3.56172, lng: -73.036 },
    zoom: 6,
    // data,
    places,
  });

  const location = useLocation();
  const history = useNavigate();

  useEffect(() => {
    if (location.latitude && location.longitude) {
      const currentLocation = {
        lat: location.state.latitude,
        lng: location.state.longitude,
      };
      setState({
        ...state,
        places: {
          places: state.places.concat({
            name: "new",
            geometry: [currentLocation.lat, currentLocation.lng],
          }),
        },
        currentLocation,
      });
      history.replace({
        pathname: "/home",
        state: {},
      });
    }
  }, [location, history, state]);

  return (
    <div className="bgUbi">
      <div  className="tittle">
        <h1>CENTROS DE DISTRIBUCIÓN</h1>
      </div>
      <div class="z-10">
      <MapContainer class="z-10" center={state.currentLocation} zoom={state.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Markers places={state.places} img={locationIcon} />
      </MapContainer>
      </div>
    </div>
  );
};

export default MapView;
