import { Box, FormControlLabel, Switch } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";
import React, { useState } from "react";

function MuiSwitch() {
  const [on, setOn] = useState(false);
  console.log(on);
  const handleChange = (e) => {
    setOn(e.target.checked);
  };
  return (
    <Box>
      <FormControlLabel
        label={on ? <DarkMode /> : <LightMode />}
        control={<Switch checked={on} onChange={handleChange} />}
      />
    </Box>
  );
}

export default MuiSwitch;
