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
    marginTop: theme.spacing(2),
    justifyContent: "left",
    boxShadow: "none",
    backgroundColor: primary.light,
    fontFamily: "Changa",
    textTransform: "capitalize",
    paddingLeft: "2rem",
    fontSize: "0.9rem",
  },
  divider: {
    fontFamily: "Changa",
    fontWeight: 200,
    border: "1px solid ",
    borderColor: "rgba(0, 0, 0, 0.12)",
    borderRadius: "50%",
    padding: "0.3rem",
  },
  textField: {
    backgroundColor: primary.light,
    borderRadius: "0.4rem",
    border: "none",
    padding: "0.8rem",
    width: "100%",
    fontSize: "0.8rem",
    
  },
  typography: {
    fontFamily: "Changa",
    fontSize: "1.1rem",
    fontWeight: 500,
  },
  label: {
    fontFamily: "Changa",
    fontSize: "0.9rem",
    fontWeight: 500,
    width: "100%",
  },
  linkStyle: {
    textDecoration: "none",
    fontWeight: 400,
    fontSize: "0.8rem",
    fontFamily: "Changa",
  },
  submitButton: {
    texAlighn: "center",
    backgroundColor: primary.main,
    fontFamily: "Changa",
    color: primary.contrastText,
    "&:hover": {
      backgroundColor: primary.dark,
    },
    borderRadius: "0.4rem",
    textTransform: "capitalize",
  },
}));

const Login = () => {
  const classes = themeLogin();
  return (
    <Container maxWidth="md">
      <Stack direction="column" alignItems="center">
        <img src={Logo} alt="Logo" className={classes.styleLogo} />
        <Typography variant="body1" className={classes.typography}>
          Sign Up Or Login With
        </Typography>
        <Stack direction="column" width="100%">
          <Button
            fullWidth
            startIcon={<GoogleIcon />}
            className={classes.button}
          >
            Google
          </Button>
          <Button fullWidth startIcon={<FbIcon />} className={classes.button}>
            Facebook
          </Button>
          <Divider display="flex" sx={{ mt: 1 }}>
            <Typography
              variant="body2"
              className={classes.divider}
              color={primary.light}
            >
              OR
            </Typography>
          </Divider>
        </Stack>
        <Stack spacing={1} width="100%">
          <Box>
            <Typography className={classes.label}>Email</Typography>
            <input
              type="email"
              className={classes.textField}
              placeholder="email@example.org"
            />
          </Box>
          <Box>
            <Typography className={classes.label}>Password</Typography>
            <input
              type="password"
              placeholder="*********"
              className={classes.textField}
            />
          </Box>
        </Stack>
      </Stack>
      <Stack
        sx={{ my: 1 }}
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Link
          to="/auth/forget-password"
          variant="subtitle2"
          underline="hover"
          className={classes.linkStyle}
        >
          Forgot your password?
        </Link>
      </Stack>
      <Button fullWidth className={classes.submitButton}>
        Sign In
      </Button>
      <Stack
        sx={{ my: 1 }}
        direction="row"
        alignItems="center"
        justifyContent="center"
      >
        <Link
          variant="subtitle2"
          underline="hover"
          className={classes.linkStyle}
          to="/auth/register"
        >
          Need An Account ? Sign Up
        </Link>
      </Stack>
      <Stack sx={{ mt: 8 }}>
        <Divider textAlign="right" color={primary.light}></Divider>
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
