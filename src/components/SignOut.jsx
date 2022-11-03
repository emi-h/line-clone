import { Button } from "@mui/material";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

export const SignOut =()=>{

      // サインアウト用関数
      const handleSignOut =()=>{
            signOut(auth).then(() => {
                  // Sign-out successful.
                }).catch((error) => {
                  // An error happened.
                });
      }

      return(
            <>
            <Button onClick={handleSignOut}>サインアウト</Button>
            </>
      )
}