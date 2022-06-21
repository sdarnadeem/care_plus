import React, { createContext, useState } from "react";
export const UserDataContext = createContext({
  harsh: "hi",
});

const UserContext = (props) => {
  return (
    <UserDataContext.Provider value={{}}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
