import React, { lazy, Suspense } from "react";
import Grid from "@material-ui/core/Grid";
// import { Card, Avatar, Button, ButtonIcon } from "react-rainbow-components";
import SideSection from "./Chat/SideSection";
const ChatSection = lazy(() => import("./Chat/ChatSection"));

const ChatPage = () => {
  return (
    <Grid
      container
      direction="row"
      justify="flex-start"
      alignItems="flex-start"
      style={style.root}
    >
      {/* Side section */}
      <Grid sm={4} lg={4}>
        <div className="sidebar-section">
          <div className="sidebar">
            <SideSection />
          </div>
        </div>
      </Grid>
      {/* Main chat section */}
      <Grid sm={8} lg={8}>
        <Suspense
          fallback={<h1 style={{ textAlign: "center" }}>Loading...🚀</h1>}
        >
          <ChatSection
            friendName="Vipin"
            email="vipin@mail.com"
            id="sw2hei383i3"
          />
        </Suspense>
      </Grid>
    </Grid>
  );
};

const style = {
  chatsection: {
    margin: 0,
    padding: 0,
  },
};

export default ChatPage;
