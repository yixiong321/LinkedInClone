import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Login from "./Login";
import { auth } from "./firebase";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import Widgets from "./Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        //user is logged in
        dispatch(login({
          email:userAuth.email,
          uid:userAuth.uid,
          displayName:userAuth.displayName,
          photoURL:userAuth.photoURL,
        }));
      } else {
        //logged out
        dispatch(logout());
      }
    });
  },[]);
  //const user =false
  return (
    <div className="app">
      <Header></Header>
      {!user ? (
        <Login></Login>
      ) : (
        <div className="app_body">
          <Sidebar></Sidebar>
          <Feed></Feed>
          {/*Widgets*/}
          <Widgets></Widgets>
        </div>
      )}
    </div>
  );
}

export default App;
