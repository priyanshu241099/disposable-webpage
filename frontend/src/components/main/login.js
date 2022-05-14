import { Button, Card, CardContent, Container, TextField } from "@mui/material";
import React from "react";
import { Formik } from "formik";
import app_config from "../../config";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import Stack from "@mui/material/Stack";

const Login = () => {
  const url = app_config.backend_url;

  const userForm = {
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const loginSubmit = (formdata) => {
    fetch(url + "/user/authenticate", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    }).then((res) => {
      if (res.status === 200) {
        let timerInterval;
        Swal.fire({
          title: "Successfully Logged In!",
          html: "You will be directed to home page <b></b> milliseconds.",
          timer: 1000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const b = Swal.getHtmlContainer().querySelector("b");
            timerInterval = setInterval(() => {
              b.textContent = Swal.getTimerLeft();
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });

        res.json().then((data) => {
          sessionStorage.setItem("user", JSON.stringify(data));
          if (data.isAdmin) {
            navigate("/admin/dashboard");
            return;
          }
          navigate("/main/home");
        });
      } else if (res.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops!!",
          text: "Login Failed",
        });
      }
    });
  };

  const formBody = ({ values, handleSubmit, handleChange }) => {
    return (
      <Container>
        <Card
          style={{ borderRadius: 10, boxShadow: "4px 4px 4px 4px #89009c" }}
          sx={{ mt: 8, mb: 10 }}
        >
          <Box style={{ display: "flex", float: "left" }}>
            <img
              src="data:image/jpeg;base64,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"
                alt="cartoon"
            ></img>
          </Box>
          <Box
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: 5,
              boxShadow: "2px 2px 2px 2px #fce6ff",
            }}
            sx={{ ml: 3, mr: 2, mt: 5 }}
          >
            <CardContent>
              <Box sx={{ mt: 2, ml: 13 }}>
                <h5>LOGIN</h5>
              </Box>
              <p>
                Doesn't have an account yet?{" "}
                <Button
                  variant="text"
                  onClick={(e) => navigate("/main/signup")}
                >
                  Sign Up
                </Button>
              </p>
              <form onSubmit={handleSubmit}>
                <div>
                  <h6>Email Address</h6>
                  <TextField
                    className="w-100 "
                    variant="standard"
                    type="email"
                    id="email"
                    onChange={handleChange}
                    value={values.email}
                  />
                </div>
                <br></br>
                <div>
                  <h6>Password</h6>
                  <TextField
                    className="w-100 "
                    variant="standard"
                    type="password"
                    id="password"
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                <FormGroup sx={{ mt: 1 }}>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Remember me"
                  />
                </FormGroup>
                <Box sx={{ ml: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    className="mt-2 mb-2 "
                    color="secondary"
                    size="large"
                  >
                    Login
                  </Button>
                </Box>
                <hr></hr>
                <Stack direction="row" spacing={4} sx={{ mt: 3 }}>
                  <Button
                    variant="outlined"
                    color="error"
                    startIcon={<GoogleIcon />}
                  >
                    Google
                  </Button>
                  <Button
                    variant="outlined"
                    color="primary"
                    endIcon={<FacebookOutlinedIcon />}
                  >
                    Facebook
                  </Button>
                </Stack>
              </form>
            </CardContent>
          </Box>
        </Card>
      </Container>
    );
  };

  return (
    <Formik initialValues={userForm} onSubmit={loginSubmit}>
      {formBody}
    </Formik>
  );
};

export default Login;
