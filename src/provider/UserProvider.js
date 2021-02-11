import React, { useState, useEffect, createContext } from "react";

import { auth } from "../services/firebase";

export const UserContext = createContext({ user: null });

export default function UserProvider(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      const { displayName, email } = user;
      setUser({
        displayName,
        email,
      });
    });
  }, []);
  return (
    // eslint-disable-next-line no-undef
    <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
  );
}
