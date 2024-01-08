import { Box, Button, Container, Typography } from "@material-ui/core";
import { Stack } from "@mui/material";
import Logo from "../assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../theme/palette";
import GoogleIcon from "../components/GoogleIcon";
import FbIcon from "../components/fbIcon";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";

const themeLogin = makeStyles((theme) => ({
  styleLogo: {
    width: "7rem",
    height: "5rem",
  },
  button: {
    borderRadius: "0.6rem",
    marginTop: theme.spacing(2),
    justifyContent: "left",
    backgroundColor: primary.light,
    "&:hover": {
      backgroundColor: primary.darker,
    },
    textTransform: "capitalize",
    paddingLeft: "2rem",
  },
  divider: {
    border: "1px solid ",
    borderColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: "50%",
    padding: "0.3rem",
  },
  textField: {
    backgroundColor: primary.light,
    borderRadius: "0.6rem",
    border: "none",
    padding: "0.8rem",
    width: "100%",
    fontSize: "0.8rem",
  },
  label: {
    fontFamily: "Changa",
    fontSize: "1rem",
    fontWeight: 500,
  },
  linkStyle: {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "0.9rem",
    fontFamily: "Changa",
  },
  submitButton: {
    marginTop: "1rem",
    texAlighn: "center",
    backgroundColor: primary.main,
    fontFamily: "Changa",
    borderRadius: "0.4rem",
    textTransform: "capitalize",
    "&:hover": {
      background: primary.dark,
    },
  },
}));

const Login = () => {
  const classes = themeLogin();
  return (
    <Container maxWidth="md">
      <Stack direction="column" alignItems="center">
        <img src={Logo} alt="Logo" className={classes.styleLogo} />
        <Typography variant="titleForm" component="h2">
          Sign Up Or Login With
        </Typography>
        <Button
          fullWidth
          variant="buttonFont"
          startIcon={<GoogleIcon />}
          className={classes.button}
          style={{ fontWeight: "400" }}
        >
          Google
        </Button>
        <Button
          fullWidth
          variant="buttonFont"
          startIcon={<FbIcon />}
          className={classes.button}
          style={{ fontWeight: "400" }}
        >
          Facebook
        </Button>
        <Divider display="flex" sx={{ mt: 1, width: "100%" }}>
          <Typography
            variant="body2"
            className={classes.divider}
            color={primary.light}
          >
            OR
          </Typography>
        </Divider>
      </Stack>
      <Stack width="100%">
        <Box style={{ marginTop: "15px" }}>
          <Typography className={classes.label}>Email</Typography>
          <input
            type="email"
            className={classes.textField}
            placeholder="email@example.org"
          />
        </Box>
        <Box style={{ marginTop: "15px" }}>
          <Typography className={classes.label}>Password</Typography>
          <input
            type="password"
            placeholder="*********"
            className={classes.textField}
          />
        </Box>
        <Link
          to="/auth/forget-password"
          variant="subtitle2"
          underline="hover"
          className={classes.linkStyle}
        >
          Forgot your password?
        </Link>
        <Button
          fullWidth
          className={classes.submitButton}
          style={{
            color: primary.contrastText,
          }}
        >
          Sign In
        </Button>
        <Link
          variant="subtitle2"
          underline="hover"
          style={{ textAlign: "center", marginTop: 8 }}
          className={classes.linkStyle}
          to="/auth/register"
        >
          Need An Account ? Sign Up
        </Link>
        <Divider
          textAlign="right"
          color={primary.light}
          sx={{ mt: 8 }}
        ></Divider>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        sx={{ mt: 2, mb: 1 }}
      >
        <Link
          variant="subtitle2"
          underline="hover"
          className={classes.linkStyle}
        >
          Terms Of Services
        </Link>
        <Link
          variant="subtitle2"
          underline="hover"
          className={classes.linkStyle}
        >
          Contact Us
        </Link>
      </Stack>
    </Container>
  );
};

export default Login;
