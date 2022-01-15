import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Navbar from "./components/Navbar";
import {useAuthState} from 'react-firebase-hooks/auth'

import { auth } from ".";
import Loader from "./components/Loader";

function App() {
  // const [loading] = useAuthState(auth)
  // if (loading) {
  //   return <Loader/>
  // }
  
  return (
    <BrowserRouter>
      <Navbar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
