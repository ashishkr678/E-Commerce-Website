import { Button, Grid, TextField } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../state/auth/Action";

const LoginForm = () => {
    const dispatch = useDispatch();  
    const navigate = useNavigate();

    const handleSubmit = (event) => {
    event.preventDefault()

    const data = new FormData(event.currentTarget);

    const userData = {        
        email:data.get("email"),
        password:data.get("password")
    }
    dispatch(login(userData))
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <TextField
              required 
              id="email"
              name="email"
              label="Email"
              fullWidth
              autoComplete="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="password"
              name="password"
              label="Password"
              fullWidth
              autoComplete="password"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
            className="bg-[#9155FD] w-full"
            type="submit"
            variant="contained"
            size="large"
            sx={{padding:".8rem 0", bgcolor:"#9155FD"}}
            >
                Login
            </Button> 
          </Grid>
        </Grid>
      </form>
      <div className="flex justify-center flex-col items-center">
        <div className="py-3 flex items-center">
            <p>if you don't have account?</p>
            <Button onClick={()=>navigate("/register")} className="ml-4" size="small">Register</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
