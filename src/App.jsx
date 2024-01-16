import Navbar from "./components/Navbar";
import { Route,Routes } from "react-router-dom";
import Home from "./Pages/Home"
import { AuthContextProvider } from "./Context/AuthContext";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import Account from "./Pages/Account";



function App() {


  return (
    <>
    < AuthContextProvider>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/account" element={<Account/>}></Route>
     </Routes>
     </AuthContextProvider> 
     
    </>
  )
}

export default App
