import CallIcon from "@mui/icons-material/Call";
import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { FC } from "react";
import React from "react";

import { auth } from "../firebase";

export const SignOut: FC = () => {
  // サインアウト用関数
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      // eslint-disable-next-line no-unused-vars
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <div className="header">
      <Button
        style={{ color: "white", fontSize: "15px" }}
        onClick={handleSignOut}
      >
        サインアウト
      </Button>
      <h3>{auth.currentUser?.displayName}</h3>
      <CallIcon />
    </div>
  );
};
