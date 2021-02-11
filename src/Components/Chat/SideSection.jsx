import React, { useState, useContext, useEffect } from "react";
import { Card, Avatar, Input, ButtonIcon } from "react-rainbow-components";
import ThemeData from "../theme";
import { UserContext } from "../../provider/UserProvider";
import { auth } from "../../services/firebase";
import { Redirect, useHistory } from "react-router-dom";
const theme = ThemeData().Dark;

const SideSection = () => {
  const history = useHistory();
  useEffect(() => {
    if (!auth.currentUser) {
      history.push("/");
    }
  }, []);
  const { displayName, photoURL, uid } = auth.currentUser;
  return (
    <>
      {/* User Header */}
      <Card
        icon={
          <Avatar
            className="rainbow-m-around_x-small"
            src={photoURL}
            backgroundColor="#ec7063"
          />
        }
        title={<p style={style.title}>{displayName}</p>}
        actions={
          <ButtonIcon variant="inverse" icon={<i class="ri-more-2-fill"></i>} />
        }
        style={style.card}
      />

      <Card style={style.searchbox}>
        {/* serach field */}
        <Input
          className="rainbow-p-around_medium"
          style={style.searchinput}
          placeholder=" Search by keyword"
          icon={<i class="ri-search-line"></i>}
        />
      </Card>
      {/* Contacts lists */}
      <Card
        style={style.list}
        children={
          // user lists
          <div>
            {/* {[1, 2, 3, 4, 5, 6, 7].map((e) => {
              return (
                <Card
                  style={style.usercard}
                  icon={<Avatar icon="RB" backgroundColor={theme.seconary} />}
                  title={
                    <div style={style.titleBox}>
                      <p style={style.title}>Hello There</p>
                      <p style={style.subheading}>What's up</p>
                    </div>
                  }
                  actions={<p>{new Date().toDateString()}</p>}
                />
              );
            })} */}
          </div>
        }
      />
    </>
  );
};

const style = {
  card: {
    borderRadius: "0",
    backgroundColor: theme.dark,
    color: theme.dark,
    boxShadow: "none",
    border: "none",
    borderBottom: `1px solid ${theme.gray}`,
    zIndex: 10,
  },
  title: {
    color: theme.light,
    fontWeight: "bold",
    fontSize: "1.17rem",
    margin: 0,
    padding: 0,
  },
  searchbox: {
    backgroundColor: theme.dark,
    color: theme.light,
    border: "none",
    boxShadow: "none",
    borderRadius: 0,
    zIndex: 20,
  },
  searchinput: {
    backgroundColor: theme.dark,
    color: theme.light,
    marginBottom: "0.5rem",
    marginTop: "0.5rem",
  },
  list: {
    border: "none",
    borderRadius: 0,
    boxShadow: "none",
    backgroundColor: theme.dark,
    color: theme.light,
    height: "auto",
    minHeight: "85vh",
  },
  titleBox: {
    margin: 0,
    padding: 0,
  },
  subheading: {
    margin: 0,
    padding: 0,
    color: theme.gray,
  },
  usercard: {
    backgroundColor: theme.primary,
    color: theme.light,
    boxShadow: "none",
    border: "none",
    margin: "0.5rem",
    // borderBottom: `1px solid ${theme.gray}`,
  },
  // usercardlist: {
  //   overflowY: "scroll",
  //   position: "sticky",
  // },
};

export default SideSection;
