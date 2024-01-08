import { Link } from "react-router-dom";
import { Box, Container, Stack, Typography, IconButton } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import PasswordImage from "../assets/password.svg";
import EmailIcon from "@mui/icons-material/Email";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { primary } from "../theme/palette";
import { Button, InputAdornment, TextField } from "@material-ui/core";

const PasswordTheme = makeStyles((theme) => ({
  boxStyle: {
    margin: "100px auto",
    padding: theme.spacing(2),
    maxWidth: "400px",
    borderRadius: "0.5rem",
  },
  textField: {
    backgroundColor: primary.light,
    borderRadius: "0.4rem",
    border: "none",
    width: "100%",
    marginTop: "2rem",
  },
  stylePassword: {
    width: "15rem",
    height: "7rem",
    display: "block",
  },

  submitButton: {
    marginTop: "2rem",
    texAlighn: "center",
    backgroundColor: primary.main,
    fontFamily: "Changa",
    "&:hover": {
      backgroundColor: primary.dark,
    },
    borderRadius: "0.4rem",
    textTransform: "capitalize",
  },
  backLink: {
    display: "flex",
    alignItems: "left",
    color: primary.dark,
    textDecoration: "none",
    fontSize: "0.9rem",
    textAlign: "center",
    marginLeft: "-1rem",
  },
  backIcon: {
    marginLeft: "-1rem",
    marginRight: theme.spacing(1),
  },
}));

const ForgetPassword = () => {
  const classes = PasswordTheme();

  return (
    <Box className={classes.boxStyle}>
      <Container maxWidth="md">
        <Link to="/auth/login" className={classes.backLink}>
          <IconButton className={classes.backIcon}>
            <ArrowBackIcon />
          </IconButton>
        </Link>
        <Box display="flex" justifyContent="center">
          <img
            src={PasswordImage}
            alt="Password"
            className={classes.stylePassword}
          />
        </Box>
        <Stack direction="column" alignItems="center" justifyContent="center">
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Changa",
              fontSize: "1.6rem",
              fontWeight: 500,
            }}
          >
            Forget Password
          </Typography>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            style={{
              textAlign: "center",
              fontFamily: "Changa",
              fontSize: "0.9rem",
              fontWeight: 300,
              color: primary.darkParagraph,
            }}
          >
            Enter your name and we will send you a link to reset your password
          </Typography>
          <TextField
            variant="outlined"
            placeholder="Enter Your Email"
            className={classes.textField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <IconButton>
                    <EmailIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Container>
      <Button
        fullWidth
        style={{ color: primary.contrastText }}
        className={classes.submitButton}
        href="/auth/verification-form"
      >
        Sign In
      </Button>
    </Box>
  );
};

export default ForgetPassword;
