import React from "react";
// import { ComponentWithGeolocation } from "../utlis/geolocation";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Cards, Footer, Header, Main } from "components/css";
import useGeolocation from "react-hook-geolocation";

const Home: React.FC = () => {
  const data = useGeolocation();
  // const position = [data.longitude, data.latitude];
  const position = {
    lat: data.latitude,
    lng: data.longitude,
  };;
  

  if (data.error) {
    return <div>Bah humbug give me your location :(</div>;
  }
  if (!data.latitude ||!data.latitude  ) {
    return <div>Hold on scrooge is thinking .......</div>;
  }
  

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      
      <h1>Longitude: {position[0]}</h1>
      <h1>Longitude: {data.longitude}</h1>
      <h1>latitude: {data.latitude}</h1>
      <Header />
      <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position}>
          <Popup>
            You are here. <br /> God luck in your snowball fight club.
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
