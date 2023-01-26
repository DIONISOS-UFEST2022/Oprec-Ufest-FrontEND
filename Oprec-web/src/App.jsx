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
import { userTokenAdded } from "./Redux/features/users/userRoleSlice";
import { selectLoading } from "./Redux/features/users/userRoleSlice";
import { userLoadingAdded } from "./Redux/features/users/userRoleSlice";
import { LoadingScreen } from "./Reusable/LoadingScreen/LoadingScreen";
import { userDataAdded } from "./Redux/features/users/userRoleSlice";



function App() {
  const token = getCookie('token');
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  // get role, right now im using redux to get the role
  const userRole = useSelector(selectuserRole);
  useLayoutEffect(() => {
    dispatch(userLoadingAdded(true));
    const login = localStorage.getItem('LoginID');
    if (login !== null) {
      axios.get("http://127.0.0.1:8000/api/me", {
        headers:
          { Authorization: `Bearer ${login}` }
      })
        .then((result) => {
          if (result.data.data.role_id === 1) {

            dispatch(userRoleAdded("admin"));
            dispatch(userDataAdded({
              name: result.data.data.name,
              nim: result.data.data.nim,
              email: result.data.data.email,
            }));
            dispatch(pageChanged("database"));
            dispatch(userTokenAdded(login));
            dispatch(userLoadingAdded(false));
          } else if (result.data.data.role_id === 2) {
            dispatch(userRoleAdded("user"));
            dispatch(pageChanged("home"));
            dispatch(userTokenAdded(login));
            dispatch(userDataAdded({
              name: result.data.data.name,
              nim: result.data.data.nim,
              email: result.data.data.email,
            }));
            dispatch(userLoadingAdded(false));
          } else {
            dispatch(userRoleAdded("guest"));
            dispatch(pageChanged("home"));
            dispatch(userDataAdded({
              name: result.data.data.name,
              nim: result.data.data.nim,
              email: result.data.data.email,
            }));
            dispatch(userTokenAdded(login));
            dispatch(userLoadingAdded(false));
          }

        })
        .catch((error) => {
          console.log(error);
          dispatch(userRoleAdded("guest"));
          dispatch(pageChanged("home"));
          dispatch(userLoadingAdded(false));
        }
        )
    }
    else {
      dispatch(userRoleAdded("guest"));
      dispatch(pageChanged("home"));
      dispatch(userLoadingAdded(false));
    }
  }, [])
  // get admin or divison
  return (
    < div className="App" >
      {loading ? <LoadingScreen /> : null}
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
      })()
      }
    </div >
  );
}

export default App;
