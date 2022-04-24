import { Box, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";

function MuiSelect() {
  const [countries, setCountries] = useState("");
  console.log(countries);
  const handleChange = (e) => {
    const value = e.target.value;
    // setCountries(typeof value === "string" ? value.split(",") : value);
    setCountries(value);
  };
  return (
    <Box width="250px">
      <TextField
        label="Select Country"
        select
        color="secondary"
        size="medium"
        helperText="Required Field*"
        // inputProps={{
        //   multiple: true,
        // }}
        fullWidth
        value={countries}
        onChange={handleChange}
      >
        <MenuItem value="US">United State</MenuItem>
        <MenuItem value="eg">Egypt</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
        <MenuItem value="In">India</MenuItem>
      </TextField>
    </Box>
  );
}

export default MuiSelect;
