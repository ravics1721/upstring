import React, { useState } from "react";
import PropTypes from "prop-types";
import TheemeData from "../theme";
import Grid from "@material-ui/core/Grid";
import { Card, Input, ButtonIcon, Avatar } from "react-rainbow-components";
import Message from "./Message";
import firebase from "firebase/app";
import { auth } from "../../services/firebase";
import { useCollection, useDocument } from "react-firebase-hooks/firestore";

const firestore = firebase.firestore();

const ChatSection = (props) => {
  const { friendName, email, userId } = props;
  const [message, setMessage] = useState("");
  const { uid } = auth.currentUser;
  const messageCollection = firestore.collection("Messages");

  function postMessage(e) {
    e.preventDefault();
    // messageCollection.add({
    //   title: message,
    //   time: firebase.firestore.FieldValue.serverTimestamp(),
    //   sender: uid,
    // });
    // setMessage("");
  }
  return (
    <div style={style.root} className="chat-section">
      <Grid
        container
        direction="column"
        justify="space-between"
        alignItems="stretch"
      >
        {/* Appbar section */}
        <Card
          style={style.chatbar}
          title={<p style={style.title}>{friendName}</p>}
          icon={<Avatar icon={friendName.slice(0, 1)} style={style.avatar} />}
          actions={
            <>
              <ButtonIcon
                variant="inverse"
                icon={<i class="ri-search-line"></i>}
              />
              <ButtonIcon
                variant="inverse"
                icon={<i class="ri-more-2-fill"></i>}
              />
            </>
          }
        />
        <div className="chatarea" style={style.chatarea}>
          <Message
            message="Hello there this my first message"
            time="2:30pm"
            isSent={true}
          />
          <Message
            message="Hello there this my first message Hello there this my first message Hello there this my first message"
            time="2:30pm"
            isSent={false}
          />
        </div>
        <Card style={style.bottombar}>
          <form onSubmit={postMessage}>
            <Grid container direction="row" justify="center">
              <Input
                variant="shaded"
                className="chat-input"
                placeholder="Type a message"
                style={style.input}
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                required
                hideLabel
              />
              <ButtonIcon
                variant="success"
                type="submit"
                icon={<i class="ri-send-plane-2-line"></i>}
              />
            </Grid>
          </form>
        </Card>
      </Grid>
    </div>
  );
};

ChatSection.propType = {
  friendName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
};

export default ChatSection;

const theme = TheemeData().Dark;
const style = {
  root: {
    display: "flex",
    flexDirection: "column",
    justify: "space-between",
    alignItems: "center",
    height: "100vh",
  },
  chatbar: {
    borderRadius: "0",
    backgroundColor: theme.dark,
    color: theme.light,
    boxShadow: "none",
    border: "none",
    borderBottom: `1px solid ${theme.gray}`,
    // objectFit: "cover",
  },
  avatar: {
    backgroundColor: theme.seconary,
  },
  title: {
    color: theme.light,
    margin: 0,
    padding: 0,
    fontWeight: "bold",
  },
  bottombar: {
    borderRadius: "0",
    backgroundColor: theme.dark1,
    color: theme.light,
    padding: "5px 1px ",
    border: "none",
    borderTop: `1px solid ${theme.gray}`,
    position: "absolute",
    bottom: 0,
    top: "auto",
    width: "66%",
  },
  input: {
    backgroundColor: theme.dark,
    color: theme.light,
    width: "70%",
  },
  chatarea: {
    height: "82.5vh",
    overflowY: "scroll",
  },
};
