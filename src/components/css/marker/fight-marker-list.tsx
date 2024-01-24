import { SnowballFight } from "data/event";
import { useEffect, Dispatch, SetStateAction } from "react";
import { FightMarker } from "./fight-marker";
import { useMap } from "react-leaflet";

interface FightMarkerListProps {
  fights: SnowballFight[];
  setCurrentFight: Dispatch<SetStateAction<SnowballFight | null>>;
  currentFight: SnowballFight | null;
}
export const FightMarkerList: React.FC<FightMarkerListProps> = ({
  fights,
  setCurrentFight,
  currentFight,
}) => {
  const map = useMap();
  useEffect(() => {
    if (!currentFight) {
      
      return;
      
    }
    map.setView([currentFight.position.lat, currentFight.position.long], 13);
  }, [currentFight]);
  return (
    <>
      {fights.map((fight) => (
        <FightMarker
          key={fight.id}
          fight={fight}
          onClick={() => {
            setCurrentFight(fight);
          }}
        />
      ))}
    </>
  );
};
