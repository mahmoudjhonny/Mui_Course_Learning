import { InputAdornment, Stack, TextField } from "@mui/material";
import React, { useState } from "react";

function MuiTextField() {
  const [value, setvalue] = useState("");
  const handleChange = (e) => {
    setvalue(e.target.value);
  };
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <TextField label="filled" variant="filled" />
        <TextField label="outlined" variant="outlined" />
        <TextField lable="standard" variant="standard" />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="filled"
          variant="filled"
          size="small"
          color="success"
        />
        <TextField
          label="outlined"
          variant="outlined"
          size="medium"
          color="primary"
        />
        <TextField
          lable="standard"
          variant="standard"
          size="large"
          color="secondary"
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Form Input"
          required
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
          type="password"
          error={!value}
          value={value}
          onChange={handleChange}
        />
      </Stack>
      <Stack spacing={2} direction="row">
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          lable="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
