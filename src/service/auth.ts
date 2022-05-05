import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

export function login() {
    const auth = getAuth();
    console.log("auth", auth);
  const provider = new GoogleAuthProvider();
  //   signInWithPopup(auth, provider)
  //     .then(result => {
  //       // This gives you a Google Access Token. You can use it to access the Google API.
  //       console.log("result", result);
  //       const credential = GoogleAuthProvider.credentialFromResult(result);
  //       console.log("credential", credential);
  //       const token = credential.accessToken;
  //       // The signed-in user info.
  //       const user = result.user;
  //       console.log("user", result.user);
  //       // ...
  //     })
  //     .catch(error => {
  //       console.log("error", error);
  //       // Handle Errors here.
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       // The email of the user's account used.
  //       const email = error.email;
  //       // The AuthCredential type that was used.
  //       const credential = GoogleAuthProvider.credentialFromError(error);
  //       // ...
  //     });
}
