import { Box, Dialog, List, ListItem, Typography, Button } from "@mui/material";

import { useState } from "react";

export const IntroModal: React.FC = () => {
  const [open, setOpen] = useState(true);
  return (
    <Dialog
      style={{ backdropFilter: "blur(30px)", zIndex: "2147483647" }}
      open={open}
      onClose={() => setOpen(false)}
    >
      <Box style={{ padding: "10px" }}>
        <Typography variant="h3">
          Welcome to snowball fight (club) ❄️{" "}
        </Typography>
        <Typography>Rules:</Typography>
        <List>
          <ListItem>
            <Typography>
              <b>Don't</b> talk about snowball fight club
            </Typography>
          </ListItem>
        </List>
        <Button onClick={() => setOpen(false)} variant="contained">
          What do you main snowball fight club ¯\_(ツ)_/¯{" "}
        </Button>
      </Box>
    </Dialog>
  );
};
