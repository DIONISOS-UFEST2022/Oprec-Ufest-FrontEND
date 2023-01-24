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
            // dispatch(userRoleAdded("admin"));
            dispatch(userRoleAdded("admin"));
            dispatch(pageChanged("database"));
            dispatch(setUserToken(login));
          } else if (result.data.data.role_id === 2) {
            dispatch(userRoleAdded("user"));
            dispatch(pageChanged("join"));
            dispatch(setUserToken(login));
          } else {
            dispatch(userRoleAdded("guest"));
            dispatch(pageChanged("home"));
            dispatch(setUserToken(login));
          }
        })
        .catch((error) => {
          console.log(error);
          dispatch(userRoleAdded("guest"));
          dispatch(pageChanged("home"));
        }
        )
    }
    else {
      dispatch(userRoleAdded("guest"));
      dispatch(pageChanged("home"));
    }
  }, [])
  // get admin or divison
  return (
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
