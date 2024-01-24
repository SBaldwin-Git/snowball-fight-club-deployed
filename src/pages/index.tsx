import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import { Cards, Footer, Header, Main } from "components/css";
import { SidebarList } from "components/sidebarlist/sidebar-list";
import { Box } from "@mui/material";
import useGeolocation from "react-hook-geolocation";
import { Icon } from "leaflet";
import { Stack } from "@mui/material";
import { locationsBirmingham } from "data/locations";
import { FightMarkerList } from "../components/css/marker/fight-marker-list";
import { IntroModal } from "components/css/modal/intro-modal";
import { SnowballFight } from "data/event";

const Home: React.FC = () => {
  const data = useGeolocation();
  const [currentFight, setCurrentFight] = useState<SnowballFight>(null);

  const position = {
    lat: data.latitude,
    lng: data.longitude,
  };

  if (data.error) {
    return (
      <div>
        Bah humbug give me your location :({" "}
        <img
          src="icons/Bah-humbug-or-not-1.webp"
          alt="Girl in a jacket"
          width="800"
          height="600"
        />
      </div>
    );
  }
  if (!data.latitude || !data.latitude) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <h1>Hold on scrooge is thinking .......</h1>
        <img
          src="icons/fea_19scroogecorr_12-19-2009_AHHJS95.webp"
          alt="Girl in a jacket"
          width="800"
          height="600"
        />
      </Box>
    );
  }

  const userLocationIcon = new Icon({
    iconUrl: "icons/christmas-tree-christmas-svgrepo-com.svg",
    iconSize: [50, 50],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
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

      <Stack direction="row" spacing={0}>
        <SidebarList
          fights={locationsBirmingham}
          setCurrentFight={setCurrentFight}
          currentFight={currentFight}
        />

        <IntroModal />
        <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={userLocationIcon}>
            <Popup>
              You are here. <br /> God luck in your snowball fight club.
            </Popup>
          </Marker>
          <FightMarkerList
            fights={locationsBirmingham}
            setCurrentFight={setCurrentFight}
            currentFight={currentFight}
          />
        </MapContainer>
      </Stack>
      <Main />

      <Footer />
    </div>
  );
};

export default Home;
