import { User } from "./Pages/User/User";
import { Admin } from "./Pages/Admin/Admin";
import { useState } from "react";
import { Box } from "@chakra-ui/react";
import "./App.css"
import { AllContext } from "./Reusable/Context/AllContext";

function App() {
  const [user, Setuser] = useState('guest');
  return (
    <Box className="App">
      <AllContext.Provider value={{ user, Setuser }}>
        {(() => {
          switch (user) {
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
      </AllContext.Provider>
    </Box>
  );
}

export default App;
