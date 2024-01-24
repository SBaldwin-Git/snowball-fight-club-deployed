import { SnowballFight } from "data/event";
import { Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import styles from "./index.module.css";

interface FightMarkerProps {
  fight: SnowballFight;
  onClick?: () => void;
}

const snowflakeIcon = new Icon({
  iconUrl: "icons/snowflake-round-svgrepo-com.svg",
  iconSize: [50, 50], 
  iconAnchor: [22, 94], 
  popupAnchor: [-3, -76], 
});

export const FightMarker: React.FC<FightMarkerProps> = ({ fight, onClick }) => {
  return (
    <Marker
      icon={snowflakeIcon}
      eventHandlers={{
        click: onClick,
      }}
      position={{
        lat: fight.position.lat,
        lng: fight.position.long,
      }}
    >
      <Popup className={styles.popup}>
        {fight.description}
        <br />
        {fight.date.toString()}
      </Popup>
    </Marker>
  );
};

// {snowballFights.map((fight) => <FightMarker key={fight.id} fight={fight}/>)}
