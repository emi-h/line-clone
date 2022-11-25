import "./App.css";

import { FC } from "react";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { Line } from "./components/Line";
import { SignIn } from "./components/SignIn";
import { auth } from "./firebase";

const App: FC = () => {
  // サインインの状態が入る
  const [user] = useAuthState(auth);

  return <div className="App">{user ? <Line /> : <SignIn />}</div>;
};

export default App;
