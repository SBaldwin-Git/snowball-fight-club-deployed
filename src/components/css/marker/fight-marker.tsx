import { SnowballFight } from "data/event";
import { Marker } from "react-leaflet";
import { Icon } from "leaflet";


interface FightMarkerProps {
  fight: SnowballFight;
}


export const FightMarker: React.FC<FightMarkerProps> = ({ fight }) => {
  return (
    <Marker
      position={{
        lat: fight.position.lat,
        lng: fight.position.long,
      }}
    ></Marker>
  );
};

// {snowballFights.map((fight) => <FightMarker key={fight.id} fight={fight}/>)}
