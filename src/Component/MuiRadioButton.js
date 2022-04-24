import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import React, { useState } from "react";

function MuiRadioButton() {
  const [value, setValue] = useState("");
  console.log(value);
  const handleChange = (e, newValue) => {
    setValue(e.target.value);
  };
  return (
    <Box>
      <FormControl>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          orientation="column"
          aria-labelledby="job-experience-group-label"
          name="job-experience-group"
          onChange={handleChange}
          value={value}
        >
          <FormControlLabel
            labelPlacement="end"
            value="0-2"
            control={<Radio size="small" color="secondary" />}
            label="0-2 years"
          />
          <FormControlLabel
            labelPlacement="end"
            value="3-5"
            control={<Radio size="small" color="secondary" />}
            label="3-5 years"
          />
          <FormControlLabel
            labelPlacement="end"
            value="6-8"
            control={<Radio size="small" color="secondary" />}
            label="6-8 years"
          />
        </RadioGroup>
      </FormControl>
    </Box>
  );
}

export default MuiRadioButton;
