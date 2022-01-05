import { Container, Grid } from "@mui/material";
import React from "react";

export default function Loader() {
  return (
      <Container>
        <Grid
          container
          style={{ height: window.innerHeight - 50 }}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid
            container
            alignItems={"center"}
            direction={'column'}
          >
            <div class="lds-hourglass"></div>
          </Grid>
        </Grid>
      </Container>
  );
}
