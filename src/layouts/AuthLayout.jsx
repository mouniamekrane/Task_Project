import { Outlet } from "react-router-dom";
import BackgroundColumn from "../components/BackgroundColumn";
import { makeStyles } from "@material-ui/core/styles";
import { Box } from "@mui/material";

const styles = {
  background: {
    display: "grid",
    minHeight: "100vh",
    gridTemplateRows: "1fr",
    padding: "2rem"
  },
  boxWrapper: {
    display:"grid",
    gridTemplateColumns: "25rem 1fr",
    background: "#fff",
    borderRadius: "1rem",
    boxShadow: "0 0 2rem rgb(0 0 0 / 0.1)",
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
