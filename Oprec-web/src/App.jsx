import { User } from "./Pages/User/User";
import { Admin } from "./Pages/Admin/Admin";
import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css"
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "./Redux/features/users/userRoleSlice";
import { getCookie } from 'react-use-cookie';
import axios from "axios";
import { userRoleAdded } from "./Redux/features/users/userRoleSlice";
import { pageChanged } from "./Redux/features/page/pageSlice";
import { setUserToken } from "./Redux/features/users/userDataSlice";
import { BrowserRouter as Router, Switch, Route, Link, Routes } from "react-router-dom";
import { userTokenAdded } from "./Redux/features/users/userRoleSlice";

function App() {
  const token = getCookie('token');
  const dispatch = useDispatch();
  // get role, right now im using redux to get the role
  const userRole = useSelector(selectuserRole);
  useLayoutEffect(() => {
    const login = localStorage.getItem('LoginID');
    if (login !== null) {
      axios.get("http://127.0.0.1:8000/api/me", {
        headers:
          { Authorization: `Bearer ${login}` }
      })
        .then((result) => {
          if (result.data.data.role_id === 1) {
            console.log("berhasil");
            dispatch(userRoleAdded("admin"));
            dispatch(pageChanged("database"));
            dispatch(userTokenAdded(login));
          } else if (result.data.data.role_id === 2) {
            console.log("berhasil");
            dispatch(userRoleAdded("user"));
            dispatch(pageChanged("join"));
            dispatch(userTokenAdded(login));
          } else {
            console.log("berhasil");
            dispatch(userRoleAdded("guest"));
            dispatch(pageChanged("home"));
            dispatch(userTokenAdded(login));
          }
        })
        .catch((error) => {
          console.log("gagal");
          console.log(error);
          dispatch(userRoleAdded("guest"));
          dispatch(pageChanged("home"));
        }
        )
    }
    else {
      console.log("gagal");
      dispatch(userRoleAdded("guest"));
      dispatch(pageChanged("home"));
    }
  }, [])
  // get admin or divison
  return (
    // <Routes>
    //   <Route path="/" element={<User />} />
    //   <Route path="/admin" element={<Admin />} />
    // </Routes>
    <div className="App">
      {(() => {
        switch (userRole) {
          case 'guest':
            return <User />;
          case 'user':
            return <User />;
          case 'admin':
            return <Admin />
          default:
            return null;
        }
      })()}
    </div>
  );
}

export default App;
