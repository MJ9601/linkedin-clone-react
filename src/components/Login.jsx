import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginPage, selectlogin } from "../features/loginSlice";
import { LOGIN } from "../features/userSlice";
import { auth } from "../firebase";
import "./Login.css";

const Login = () => {
  const { login } = useSelector(selectlogin);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [email, setEmail] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [checkPass, setCheckPass] = useState(true);

  useEffect(() => {
    setCheckPass(password != rePassword ? false : true);
  }, [rePassword]);

  const register = async (e) => {
    e.preventDefault();
    if (checkPass && name != "") {
      const newUser = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await newUser.user.updateProfile({
        displayName: name,
        photoURL: imageUrl,
      });
      dispatch(
        LOGIN({
          email: newUser.user.email,
          userId: newUser.user.uid,
          name: name,
          imgUrl: imageUrl,
        })
      );
      dispatch(loginPage());
    }
  };
  const logIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        console.log(user);
        dispatch(
          LOGIN({
            email: user.user.email,
            userId: user.user.uid,
            name: user.user.displayName,
            imgUrl: user.user.photoURL,
          })
        );
      })
      .catch((err) => alert(err));
  };
  return (
    <div className="login">
      <div className="login__container">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/03/Linkedin-Logo.png"
          alt=""
          className="login__logo"
        />
        <form action="">
          {!login ? (
            <>
              <input
                type="text"
                placeholder="Full name"
                className="login__input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email .."
                className="login__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="image url .."
                className="login__input"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="login__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="password"
                placeholder="Repeat Password"
                className="login__input"
                value={rePassword}
                onChange={(e) => setRePassword(e.target.value)}
              />
              {!checkPass && (
                <p className="login__err">Passwords are not the same!</p>
              )}
              <input
                type="submit"
                className="login__input submit"
                value="Register"
                onClick={register}
              />
              <p className="login__userprompt">
                Already have an account?{" "}
                <span onClick={() => dispatch(loginPage())}>Log in</span>
              </p>
            </>
          ) : (
            <>
              <input
                type="text"
                placeholder="Email .."
                className="login__input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                className="login__input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="submit"
                className="login__input submit"
                value="Login"
                onClick={logIn}
              />
            </>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
