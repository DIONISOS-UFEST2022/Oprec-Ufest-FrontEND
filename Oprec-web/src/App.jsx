// react
import { useEffect, Suspense, lazy, useState } from "react";
// redux
import { userRoleAdded } from "./Redux/features/users/userRoleSlice";
import { pageChanged } from "./Redux/features/page/pageSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "./Redux/features/users/userRoleSlice";
import { userDataAdded } from "./Redux/features/users/userRoleSlice";
// Loading Screen
import LoadingScreen from "./Reusable/LoadingScreen/LoadingScreen";
import { getRequest } from "./Reusable/Service/AxiosClient";
import { BrowserRouter as Router, Outlet, Route, Routes, useNavigate } from "react-router-dom";
import ProtectedRoute from "./Route/ProtectedRoute";


const Join = lazy(() => import("./Pages/User/Join/Join"));
const User = lazy(() => import("./Pages/User/User"));
const Admin = lazy(() => import("./Pages/Admin/Admin"));




function App() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const userRole = useSelector(selectuserRole);
  useEffect(() => {
    async function fetchUser() {
      try {
        await getRequest('me')
          .then((res) => {
            console.log(res);
            dispatch(userDataAdded({
              name: res.data.user.name,
              nim: res.data.user.nim,
              email: res.data.user.email,
            }));
            if (res.data.user.role_id === 1) {
              dispatch(userRoleAdded("admin"));
            } else if (res.data.user.role_id === 2) {
              dispatch(userRoleAdded("user"));
            }
          })
        // if (userData.data.success === true) {
        //   if (userData.data.user.role_id === 1) {
        //     dispatch(userRoleAdded("admin"));
        //   } else if (userData.data.user.role_id === 2) {
        //     dispatch(userRoleAdded("user"));
        //   }
        // } else {
        //   dispatch(userRoleAdded("guest"));
        // }
        // dispatch(userDataAdded({
        //   name: userData.data.user.name,
        //   nim: userData.data.user.nim,
        //   email: userData.data.user.email,
        // }));
      } catch (error) {
        console.error(error);
        dispatch(userRoleAdded("guest"));
      }
    }
    if (localStorage.getItem('LoginID')) {
      fetchUser();
    } else {
      dispatch(userRoleAdded("guest"));
    }
    setloading(false);
  }, [])
  return (
    <div id="App">
      <Suspense fallback={<LoadingScreen />}>
        {loading ? <LoadingScreen /> :
          <Router>
            <Routes>
              <Route path="/*" element={<User />} />
              <Route path="/admin/*" element={<ProtectedRoute user="admin"><Admin /></ProtectedRoute>} />
            </Routes>
          </Router>
        }
      </Suspense>
    </div>
  );
}

export default App;
