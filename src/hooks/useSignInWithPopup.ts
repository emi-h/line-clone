import { signInWithPopup } from "firebase/auth";

import { auth, provider } from "../firebase";

export const useSignInWithPopup = () => {
  signInWithPopup(auth, provider)
    // eslint-disable-next-line no-unused-vars
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
      alert(`Sign-in successful.`);
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.customData.email;
      // The AuthCredential type that was used.
      // const credential:OAuthCredential | null = GoogleAuthProvider.credentialFromError(error);
      alert(`エラーコード:${errorCode}、エラーメッセージ：${errorMessage}`);
    });
};
