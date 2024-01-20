import React from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Cards, Footer, Header, Main } from "components/css";
import useGeolocation from "react-hook-geolocation";
import { Icon } from "leaflet";
import { locationsBirmingham } from "data/locations";
// import 

const Home: React.FC = () => {
  const data = useGeolocation();
  const position = {
    lat: data.latitude,
    lng: data.longitude,
  };

  const hardCodedposition = {
    lat: 52.51448497786845,
    lng: -1.9089501066552415,
  };

  if (data.error) {
    return <div>Bah humbug give me your location :(</div>;
  }
  if (!data.latitude || !data.latitude) {
    return <div>Hold on scrooge is thinking .......</div>;
  }

  {locationsBirmingham.map((fight) => <FightMarker key={fight.id} fight={fight}/>)}


  
  const snowflakeIcon = new Icon({
    iconUrl: "icons/snowflake-round-svgrepo-com.svg",
    // iconUrl: "icons/snowflake-svgrepo-com(1).svg",
    // iconUrl:"icons/snowflake-svgrepo-com.svg",
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  const userLocationIcon = new Icon({
    iconUrl: "icons/christmas-tree-christmas-svgrepo-com.svg",
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
  });

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Header />
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={userLocationIcon}>
          <Popup>
            You are here. <br /> God luck in your snowball fight club.
          </Popup>
        </Marker>
        <Marker position={hardCodedposition} icon={snowflakeIcon}>
          <Popup>
            there is a fight here!. <br /> God luck in your snowball fight club.
          </Popup>
        </Marker>
      </MapContainer>
      <Main />
      <Cards />
      <Footer />
    </div>
  );
};

export default Home;
