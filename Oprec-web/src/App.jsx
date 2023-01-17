import { User } from "./Pages/User/User";
import { Admin } from "./Pages/Admin/Admin";
import { useEffect, useLayoutEffect, useState } from "react";
import { Box } from "@chakra-ui/react";
import "./App.css"
import { AllContext } from "./Reusable/Context/AllContext";
import { useSelector, useDispatch } from "react-redux";
import { selectuserRole } from "./Redux/features/users/userRoleSlice";



function App() {
  // get role, right now im using redux to get the role
  const userRole = useSelector(selectuserRole);
  const [user, Setuser] = useState('user');
  // get admin or divison
  return (
    <Box className="App">
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
    </Box>
  );
}

export default App;
