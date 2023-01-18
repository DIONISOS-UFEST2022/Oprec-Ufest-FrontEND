import { User } from "./Pages/User/User";
import { Admin } from "./Pages/Admin/Admin";
import { useEffect, useLayoutEffect, useState } from "react";
import "./App.css"
import { AllContext } from "./Reusable/Context/AllContext";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "./Redux/features/users/userRoleSlice";
import axios from "axios";
import { pageChanged } from "./Redux/features/page/pageSlice";
import { userRoleAdded } from "./Redux/features/users/userRoleSlice";
import useCookie from 'react-use-cookie';
import { getCookie } from 'react-use-cookie';


function App() {
  const token = getCookie('token');
  const dispatch = useDispatch();
  // get role, right now im using redux to get the role
  const userRole = useSelector(selectuserRole);
  const [user, Setuser] = useState('user');
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
