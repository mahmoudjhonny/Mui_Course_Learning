import { Bookmark, BookmarkBorder } from "@mui/icons-material";
import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import React, { useState } from "react";

function MuiCheckBox() {
  const [Ok, setOk] = useState(false);
  const [skills, setSkills] = useState([]);
  console.log("Skills: ", skills);
  console.log("Checked: ", Ok);
  const handleSkillChange = (e) => {
    const skill = skills.indexOf(e.target.value);
    skill === -1
      ? setSkills([...skills, e.target.value])
      : setSkills(skills.filter((skill) => skill !== e.target.value));
  };
  const handleChange = (e) => {
    setOk(e.target.checked);
  };
  return (
    <Box>
      <Box>
        <FormControlLabel
          control={
            <Checkbox
              checked={Ok}
              onChange={handleChange}
              size="small"
              color="secondary"
            />
          }
          label="Accept terms and conditions"
        />
      </Box>
      <Box>
        <Checkbox
          icon={<BookmarkBorder />}
          checkedIcon={<Bookmark />}
          checked={Ok}
          onChange={handleChange}
        />
      </Box>
      <Box>
        <FormControl error>
          <FormLabel>Skills</FormLabel>
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  value="html"
                  checked={skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
              label="HTML"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="css"
                  checked={skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
              label="CSS"
            />
            <FormControlLabel
              control={
                <Checkbox
                  value="javascript"
                  checked={skills.includes("javascript")}
                  onChange={handleSkillChange}
                />
              }
              label="JavaScript"
            />
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckBox;
