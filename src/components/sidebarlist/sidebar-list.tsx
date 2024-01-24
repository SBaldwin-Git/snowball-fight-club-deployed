import { SnowballFight } from "data/event";
import { Dispatch, SetStateAction } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

interface SidebarListProps {
  fights: SnowballFight[];
  setCurrentFight: Dispatch<SetStateAction<SnowballFight | null>>;
  currentFight: SnowballFight | null;
}

export const SidebarList: React.FC<SidebarListProps> = ({
  fights,
  setCurrentFight,
  currentFight,
}) => {
  return (
    <Sidebar
      style={{
        height: "100vh",
        width: "10%",
        zIndex: 999999,
        backgroundSize: "50px",
        backgroundImage:
          "url('https://i.pinimg.com/736x/38/31/3d/38313dd2a62c02d3132a0fb83b3c46b4.jpg')",
        backgroundRepeat: "repeat",
      }}
    >
      <Menu>
        {fights.map((fight) => {
          return (
            <MenuItem
              onClick={() => {
                setCurrentFight(fight);
              }}
              style={{
                borderBottom: "1px solid black",
                backgroundColor:
                  currentFight?.id === fight.id ? "#ff0000" : "#00ff00",
              }}
            >
              {fight.name}{" "}
            </MenuItem>
          );
        })}
      </Menu>
    </Sidebar>
  );
};
