import { Outlet } from "react-router-dom";
import BackgroundColumn from "../components/BackgroundSlider/BackgroundColumn";
import { Box } from "@mui/material";
import palette from "../theme/palette";

const styles = {
  background: {
    display: "grid",
    minHeight: "100vh",
    gridTemplateRows: "1fr",
    padding: "2rem"
  },
  boxWrapper: {
    display:"grid",
    gridTemplateColumns: "20rem 1fr",
    background: palette.primary.contrastText,
    borderRadius: "1.5rem",
    boxShadow: "0 0 3rem rgb(0 0 0 / 0.4)",
    overflow: "hidden"
  }
}

function AuthLayout() {
  return (
    <Box sx={styles.background}>
      <Box sx={styles.boxWrapper}>
        <Outlet />
        <BackgroundColumn />
      </Box>
    </Box>
  );
}

export default AuthLayout;
