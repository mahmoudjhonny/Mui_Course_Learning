import { Typography } from "@mui/material";
import React from "react";

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">Hello in MUI</Typography>
      <Typography variant="h2">Hello in MUI</Typography>
      <Typography variant="h3">Hello in MUI</Typography>
      <Typography variant="h4" component="h1">
        Hello in MUI
      </Typography>
      <Typography variant="h5">Hello in MUI</Typography>
      <Typography variant="h6">Hello in MUI</Typography>
      <Typography variant="subtitle1">Hello in MUI</Typography>
      <Typography variant="subtitle2">Hello in MUI</Typography>
      <Typography variant="body1" gutterBottom>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam saepe
        magnam illo quas illum minus, aperiam, iusto optio quisquam veniam
        obcaecati quasi libero aspernatur alias quia modi minima excepturi ad.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam saepe
        magnam illo quas illum minus, aperiam, iusto optio quisquam veniam
        obcaecati quasi libero aspernatur alias quia modi minima excepturi ad.
      </Typography>
    </div>
  );
}

export default MuiTypography;
