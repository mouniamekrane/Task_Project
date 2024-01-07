import { Outlet } from "react-router-dom";
import BackgroundColumn from "../components/BackgroundColumn";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Stack } from "@mui/material";
import { CssBaseline } from "@material-ui/core";

const themeMessage = makeStyles({
  styleMainBox: {
    padding: "2rem",
    minHeight: "100vh",
    display: "grid",
  },
  styleStack: {
    display: "grid",
    borderRadius: "0.5rem",
    boxShadow: "0 0 1rem rgb(0 0 0 / 0.2)",
    overflow: "hidden",
  },
  styleOutlet: {
    width: "40%",
    backgroundColor: "#fff",
    padding: "1rem",
  },
  styleBackground: {
    backgroundColor: "black",
    color: "white",
    padding: "1rem",
  },
});

function AuthLayout() {
  const classes = themeMessage();
  return (
    <Box className={classes.styleMainBox}>
      <Stack direction="row" className={classes.styleStack}>
        <CssBaseline />
        <Box className={classes.styleOutlet}>
          <Outlet />
        </Box>
        <Box className={classes.styleBackground}>
          <BackgroundColumn />
        </Box>
      </Stack>
    </Box>
  );
}

export default AuthLayout;
