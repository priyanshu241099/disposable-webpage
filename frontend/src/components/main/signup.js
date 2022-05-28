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
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Signup = () => {
  
  const signupStyles = {
    background: "url(https://wallpaperaccess.com/full/1223823.jpg)",
    height: "100%",
  };

  const url = app_config.backend_url;

  //   1. Create the form object

  const userForm = {
    name: "",
    mobile: "",
    email: "",
    password: "",
  };

  const navigate = useNavigate();

  const formSubmit = (formdata) => {
    console.log(formdata);

    // asynchronous function returns promise
    fetch(url + "/user/add", {
      method: "POST",
      body: JSON.stringify(formdata),
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => {
        console.log(res.status);
        return res.json();
      })
      .then((data) => {
        console.log(data);
        Swal.fire({
          icon: "success",
          title: "Registered Successfully!!",
        });
      });
  };

  const formBody = ({ values, handleSubmit, handleChange }) => {
    return (
     
      <Container style={{ width: 1000 }}>
        <Card
          style={{ borderRadius: 10, boxShadow: "4px 4px 4px 4px #89009c" }}
          sx={{ mt: 15, mb: 10 }}
        >
          <Box
            style={{ display: "flex", float: "left" }}
            sx={{ mt: 5, mb: 5, ml: 5 }}
          >
            <img
              src="https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NjF8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
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
            sx={{ ml: 1, mr: 2, mt: 5 }}
          >
            <CardContent>
              <Box sx={{ ml: 10 }}>
                <h2>Sign Up</h2>
              </Box>
              <p>
                Have an existing account?{" "}
                <Button
                  variant="text"
                  onClick={(e) => navigate("/main/signin")}
                >
                  Log In
                </Button>
              </p>
              <form onSubmit={handleSubmit}>
                <div>
                  <h6>Name</h6>
                  <TextField
                    className="w-100"
                    variant="standard"
                    id="name"
                    onChange={handleChange}
                    value={values.name}
                  />
                </div>
                <br></br>
                <div>
                  <h6>Mobile No</h6>
                  <TextField
                    className="w-100 "
                    variant="standard"
                    id="mobile"
                    onChange={handleChange}
                    value={values.mobile}
                  />
                </div>
                <br></br>
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
                    Signup
                  </Button>
                </Box>
              </form>
              <hr></hr>
              <Stack direction="row" sx={{ ml: 7, color: "text.error" }}>
                <GoogleIcon />
                <FacebookOutlinedIcon />
                <TwitterIcon />
                <InstagramIcon />
                <LinkedInIcon />
                <GitHubIcon />
              </Stack>
            </CardContent>
          </Box>
        </Card>
      </Container>
      
    );
  };

  return (
    <Formik initialValues={userForm} onSubmit={formSubmit}>
      {formBody}
    </Formik>
  );
};

export default Signup;
