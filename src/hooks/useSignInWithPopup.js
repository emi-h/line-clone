import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

export const useSignInWithPopup =()=>{
      signInWithPopup(auth, provider)
      .then((result) => {
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        alert("errorが起きました。エラーコード："+ errorCode +"エラーメッセージ："+ errorMessage)
      });
}