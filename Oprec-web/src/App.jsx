// react
import { useEffect, Suspense, lazy, useState } from "react";
// styling
import "./App.css";
// redux
import { userRoleAdded } from "./Redux/features/users/userRoleSlice";
import { pageChanged } from "./Redux/features/page/pageSlice";
import { userTokenAdded } from "./Redux/features/users/userRoleSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "./Redux/features/users/userRoleSlice";
import { userDataAdded } from "./Redux/features/users/userRoleSlice";
// axios
import axios from "axios";
// Loading Screen
import LoadingScreen from "./Reusable/LoadingScreen/LoadingScreen";


const User = lazy(() => import("./Pages/User/User"));
const Admin = lazy(() => import("./Pages/Admin/Admin"));



function App() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const userRole = useSelector(selectuserRole);
  useEffect(() => {
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
            setloading(false);
          } else if (result.data.data.role_id === 2) {
            dispatch(userRoleAdded("user"));
            dispatch(pageChanged("home"));
            dispatch(userTokenAdded(login));
            dispatch(userDataAdded({
              name: result.data.data.name,
              nim: result.data.data.nim,
              email: result.data.data.email,
            }));
            setloading(false);
          } else {
            dispatch(userRoleAdded("guest"));
            dispatch(pageChanged("home"));
            dispatch(userDataAdded({
              name: result.data.data.name,
              nim: result.data.data.nim,
              email: result.data.data.email,
            }));
            dispatch(userTokenAdded(login));
            setloading(false);
          }

        })
        .catch((error) => {
          dispatch(userRoleAdded("guest"));
          dispatch(pageChanged("home"));
          setloading(false);
        }
        )
    }
    else {
      dispatch(userRoleAdded("guest"));
      dispatch(pageChanged("home"));
      setloading(false);
    }
  }, [])
  return (
    <Suspense fallback={<LoadingScreen />}>
      {loading ? <LoadingScreen /> :
        ""
      }
      {(() => {
        switch (userRole) {
          case 'guest':
            return <Suspense fallback={<LoadingScreen />}><User /></Suspense>
          case 'user':
            return <Suspense fallback={<LoadingScreen />}><User /></Suspense>
          case 'admin':
            return <Suspense fallback={<LoadingScreen />}><Admin /></Suspense>;
          default:
            return null;
        }
      })()
      }
    </Suspense>
  );
}

export default App;
