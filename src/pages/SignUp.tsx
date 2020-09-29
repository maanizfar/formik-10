import React from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { Formik, Form } from "formik";
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(3),
  },
  helperText: {
    color: theme.palette.error.main,
  },
}));

const SignUp = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h4">
          Sign up
        </Typography>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
          }}
          validationSchema={yup.object().shape({
            firstName: yup.string().required("This field is required."),
            lastName: yup.string().required("This field is required."),
            email: yup.string().email().required("This field is required."),
            password: yup
              .string()
              .min(6, "Password is too short.")
              .max(20, "Password is too long.")
              .required("This field is required."),
          })}
          onSubmit={(values) => {
            console.log(values);
            alert("Welcome, " + values.firstName + " " + values.lastName);
          }}
        >
          {({ errors, handleChange, touched }) => (
            <Form className={classes.form}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="firstName"
                    name="firstName"
                    fullWidth
                    onChange={handleChange}
                    id="firstName"
                    label="First Name"
                    autoFocus
                    FormHelperTextProps={{ className: classes.helperText }}
                    helperText={
                      errors.firstName && touched.firstName
                        ? errors.firstName
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="lastName"
                    FormHelperTextProps={{ className: classes.helperText }}
                    helperText={
                      errors.lastName && touched.lastName
                        ? errors.lastName
                        : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    FormHelperTextProps={{ className: classes.helperText }}
                    helperText={
                      errors.email && touched.email ? errors.email : null
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    onChange={handleChange}
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    FormHelperTextProps={{ className: classes.helperText }}
                    helperText={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
              >
                Sign Up
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </Container>
  );
};

export default SignUp;
