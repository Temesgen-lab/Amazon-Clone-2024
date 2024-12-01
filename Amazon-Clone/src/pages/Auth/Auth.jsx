import React, { useState, useContext } from "react";
import { auth } from "../../Utility/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { DataContext } from "../../components/DataProvider/DataProvider";
import { Type } from "../../Utility/action.type";
function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [{ user }, dispatch] = useContext(DataContext);

  async function authHandler(e) {
    e.preventDefault();
    if (e.target.name == "signin") {
      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
        })
        .catch((err) => {
          console.log("signin error:", err);
        });
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          console.log(userInfo);
        })
        .catch((err) => {
          console.log("signup error:", err);
        });
    }
  }
  console.log(user);
  return (
    <div>
      <div>signin</div>
      <form action="">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
        <button type="submit" name="signin" onClick={authHandler}>
          signIn
        </button>
      </form>
      <button type="submit" name="signup" onClick={authHandler}>
        create account
      </button>
    </div>
  );
}

export default Auth;
