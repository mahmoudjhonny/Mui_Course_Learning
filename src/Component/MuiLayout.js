import { Grid, Paper, Stack } from "@mui/material";
import { Box } from "@mui/system";

function MuiLayout() {
  return (
    <Paper sx={{ padding: "32px" }} elevation={2}>
      <Stack border="1px solid" spacing={2} direction="row">
        <Box
          component="span"
          sx={{
            backgroundColor: "#90caf9",
            color: "#ffffff",
            height: "100px",
            width: "100px",
            padding: "16px",
            cursor: "pointer",
            "&:hover": {
              backgroundColor: "#e3f2fd",
            },
          }}
        >
          Lorem ipsum
        </Box>
      </Stack>
      <Grid container columnSpacing={2} rowSpacing={2} my={4}>
        <Grid item xs={12} sm={9} md={6} lg={3}>
          <Box p={2} bgcolor="#00000" color="#fffff">
            Item 1
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} md={6} lg={3}>
          <Box p={2} bgcolor="#00000" color="#fffff">
            Item 2
          </Box>
        </Grid>
        <Grid item xs={12} sm={9} md={6} lg={3}>
          <Box p={2} bgcolor="#00000" color="#fffff">
            Item 3
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MuiLayout;
