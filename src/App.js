import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import AsideLeft from "./components/AsideLeft";
import AsideRight from "./components/AsideRight";
import Center from "./components/Center";
import Login from "./components/Login";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN, LOGOUT, selectUser } from "./features/userSlice";
import { auth } from "./firebase";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    auth.onAuthStateChanged((userAuth) =>
      userAuth
        ? dispatch(
            LOGIN({
              email: userAuth.email,
              uid: userAuth.uid,
              name: userAuth.displayName,
            })
          )
        : dispatch(LOGOUT())
    );
  }, []);
  return (
    <div className="app">
      <Navbar />
      {!user ? (
        <Login />
      ) : (
        <div className="app__container">
          <AsideLeft />
          <Center />
          <AsideRight />
        </div>
      )}
    </div>
  );
}

export default App;
