import './App.css';
import { SignIn } from './components/SignIn';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from './firebase';
import { Line } from './components/Line';
import { FC } from 'react';
import React from 'react';

const App:FC=()=> {
  // サインインの状態が入る
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <Line/> :<SignIn/>}
    </div>
  );
}

export default App;
