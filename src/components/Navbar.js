import React from "react";
import { AppBar, Toolbar, Button, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { Login_Route } from "../utilities/const";
import {useAuthState} from 'react-firebase-hooks/auth'
import { auth, firestore } from "..";


export default function Navbar() {
  const [user] = useAuthState(auth);
  
  return (
    <AppBar
      style={{ background: "linear-gradient(-45deg, #39249a, #e14e42)" }}
      position="static"
    >
      <Toolbar variant="dense">
        <h2>Lazizbek Ganiev</h2>
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button onClick={() => auth.signOut()} variant={"outlined"} color="inherit">
              EXIT
            </Button>
          ) : (
              <NavLink to={Login_Route}>
                <Button variant={"outlined"} color="inherit">LOGIN</Button>
              </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
