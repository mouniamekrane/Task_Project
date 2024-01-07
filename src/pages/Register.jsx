import {
  Box,
  Button,
  Checkbox,
  Container,
  Typography,
} from "@material-ui/core";
import { IconButton, Stack } from "@mui/material";
import Logo from "../assets/logo.svg";
import { makeStyles } from "@material-ui/core/styles";
import { primary } from "../theme/palette";

import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
const themeRegister = makeStyles((theme) => ({
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
    ":focus": {
      borderColor: primary.dark,
    },
  },
  typography: {
    textAlign: "center",
    fontFamily: "Changa",
    fontSize: "1.3rem",
    fontWeight: 500,
    whiteSpace: "nowrap",
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
    whiteSpace: "nowrap",
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
  backLink: {
    display: "flex",
    alignItems: "center",
    color: primary.dark,
    textDecoration: "none",
    fontSize: "0.9rem",
    textAlign: "center",
  },
  backIcon: {
    marginRight: theme.spacing(1),
  },
}));

const Register = () => {
  const classes = themeRegister();
  return (
    <Container maxWidth="md">
      <Box>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <img src={Logo} alt="Logo" className={classes.styleLogo} />
          <Typography variant="titleForm" component="h1">
            Registration Info
          </Typography>
        </Stack>

        <Stack sx={{ my: 2 }}>
          <Divider textAlign="right" color={primary.light}></Divider>
        </Stack>
        <Stack spacing={1} width="100%">
          <Box>
            <Typography className={classes.label}>First Name</Typography>
            <input
              type="text"
              className={classes.textField}
              placeholder="xxxxx"
            />
          </Box>
          <Box>
            <Typography className={classes.label}>Last Name</Typography>
            <input
              type="text"
              className={classes.textField}
              placeholder="xxxxxx"
            />
          </Box>
          <Box>
            <Typography className={classes.label}>Email Address</Typography>
            <input
              type="email"
              placeholder="email@example.org"
              className={classes.textField}
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
          <Box>
            <Typography className={classes.label}>Confirm Password</Typography>
            <input
              type="password"
              placeholder="*********"
              className={classes.textField}
            />
          </Box>
        </Stack>
      </Box>
      <Stack
        sx={{ my: 1 }}
        direction="row"
        alignItems="center"
        justifyContent="flex-start"
      >
        <Link
          variant="subtitle2"
          underline="hover"
          className={classes.linkStyle}
        >
          <Checkbox defaultChecked />I Have Agreed the terms and conditions
        </Link>
      </Stack>
      <Button fullWidth className={classes.submitButton}>
        Sign In
      </Button>
      <Link to="/auth/login" className={classes.backLink}>
        <IconButton className={classes.backIcon}>
          <ArrowBackIcon />
        </IconButton>
        Back to Login
      </Link>
    </Container>
  );
};

export default Register;
