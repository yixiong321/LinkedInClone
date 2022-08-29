import React, { useEffect, useState } from "react";
import "./Login.css";
import { auth } from "./firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState("");
  const dispatch = useDispatch();
  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userAuth) => {
        updateProfile(userAuth.user, {
          displayName: name,
          photoURL: pic,
        }).then(() => {
          dispatch(
            login({
              email: userAuth.user.email,
              uid: userAuth.user.uid,
              displayName: name,
              photoURL: pic,
            })
          );
        });
      })
      .catch((error) => {
        alert(error);
      });
  };
  const loginToApp = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        dispatch(
          login({
            email: userCredential.user.email,
            uid: userCredential.user.uid,
            displayName: userCredential.user.displayName,
            photoURL: userCredential.user.photoURL,
          })
        );
        // ...
      })
      .catch((error) => {
        alert(error);
      });
  };
  return (
    <div className="login">
      <img
        src="https://www.comeet.com/resources/wp-content/uploads/2019/03/linkedin-logo.png"
        alt=""
      ></img>
      <form>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
        ></input>
        <input
          type="text"
          value={pic}
          onChange={(e) => setPic(e.target.value)}
          placeholder="Profile picture URL (optional)"
        ></input>
        <input
          type="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        ></input>
        <input
          type="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="password"
        ></input>
        <button onClick={loginToApp}>Sign in</button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
}

export default Login;
