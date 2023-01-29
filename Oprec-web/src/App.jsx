// react
import { useEffect, Suspense, lazy, useState } from "react";
// redux
import { userRoleAdded } from "./Redux/features/users/userRoleSlice";
import { pageChanged } from "./Redux/features/page/pageSlice";
import { userTokenAdded } from "./Redux/features/users/userRoleSlice";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "./Redux/features/users/userRoleSlice";
import { userDataAdded } from "./Redux/features/users/userRoleSlice";
// Loading Screen
import LoadingScreen from "./Reusable/LoadingScreen/LoadingScreen";
import { getRequest } from "./Reusable/Service/AxiosClient";
import HomeBg from "./Asset/Image/Background/homebg.webp"
const User = lazy(() => import("./Pages/User/User"));
const Admin = lazy(() => import("./Pages/Admin/Admin"));




function App() {
  const dispatch = useDispatch();
  const [loading, setloading] = useState(true);
  const userRole = useSelector(selectuserRole);
  useEffect(() => {
    async function fetchUser() {
      try {
        const userData = await getRequest('me');
        // console.log(userData.data.success);
        // console.log(userData.data.user);
        if (userData.data.success === true) {
          if (userData.data.user.role_id === 1) {
            dispatch(userRoleAdded("admin"));
            dispatch(pageChanged("database"));
          } else if (userData.data.user.role_id === 2) {
            dispatch(userRoleAdded("user"));
            dispatch(pageChanged("home"));
          }
        } else {
          dispatch(userRoleAdded("guest"));
          dispatch(pageChanged("home"));
        }
        dispatch(userDataAdded({
          name: userData.data.user.name,
          nim: userData.data.user.nim,
          email: userData.data.user.email,
        }));
      } catch (error) {
        console.error(error);
        dispatch(userRoleAdded("guest"));
        dispatch(pageChanged("home"));
      }
    }
    if (localStorage.getItem('LoginID')) {
      fetchUser();
    } else {
      dispatch(userRoleAdded("guest"));
      dispatch(pageChanged("home"));
    }
    setloading(false);
  }, [])
  return (
    <div id="App">
      <Suspense fallback={<LoadingScreen />}>
        {loading ? <LoadingScreen /> : ""}
        {(() => {
          switch (userRole) {
            case 'guest':
              return <Suspense fallback={<LoadingScreen />}><User /></Suspense>;
            case 'user':
              return <Suspense fallback={<LoadingScreen />}><User /></Suspense>;
            case 'admin':
              return <Suspense fallback={<LoadingScreen />}><Admin /></Suspense>;
            default:
              return null;
          }
        })()
        }
      </Suspense>
    </div>
  );
}

export default App;
