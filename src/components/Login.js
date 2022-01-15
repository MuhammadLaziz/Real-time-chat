import React from "react";
import { Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import { auth, provider } from "../index";
import { signInWithPopup } from "firebase/auth";


export default function Login() {

  const loged = async () => {

    const { user } = await signInWithPopup(auth, provider)

    console.log(user);
  };

  return (
    <Container>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"center"}
        style={{ height: window.innerHeight - 50 }}
      >
        <Grid
          style={{ width: "400px", background: "lightgrey" }}
          container
          alignItems={"center"}
          justifyContent="center"
        >
          <Box p={5}>
            <Button onClick={loged} variant="outlined">
              Войти с поьмощью Google
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
