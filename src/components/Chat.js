import React, { useState } from "react";
import { auth, db, provider } from "../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { Avatar, Button, Container, Grid, TextField } from "@mui/material";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

export default function Chat() {
  const { user } = useAuthState(auth, provider);
  const [value, setValue] = useState("");
  const [messages] = useCollectionData();

  const sendMessage = async (e) => {
    e.preventDefault()

      await addDoc(collection(db, 'message'), {
      // displayName: user?.displayName,
      postText: value,
      // userImage: user?.photoURL,
      // uid: user?.uid,
      createdAt: serverTimestamp()
    })

    setValue("");
  };

  return (
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: "3rem" }}
        justify={"center"}
      >
        <div
          style={{
            width: "80%",
            height: "60vh",
            border: "1px solid gray",
            overflowX: "auto",
          }}
        >
          <Grid>
            {/* <Avatar src={messages.userImage} />
            <div>{messages.displayName}</div> */}
          </Grid>
          <div>
            {/* {messages.text} */}
          </div>
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "80%" }}
        >
          <TextField
            autoComplete={"off"}
            fullWidth
            value={value}
            onChange={(e) => setValue(e.target.value)}
            variant={"outlined"}
            placeholder="Message..."
          />
          <Button
            variant={"outlined"}
            onClick={sendMessage}
            style={{
              backgroundColor: "blue",
              color: "white",
              marginTop: "5px",
            }}
          >
            Send Message
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
