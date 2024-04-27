import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import Report from "./pages/Report";
import SignUp from "./pages/SignUp";
import { Login } from "./pages/Login";
import toast, { Toaster } from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import { Navigate } from "react-router-dom";
import AllContacts from "./pages/AllContacts";

function App() {
  const { isAuth, Auth } = useContext(AuthContext);
  return (
    <>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={!isAuth ? <Navigate to="/login" /> : <Home />}
        />
        <Route
          path="/all-contacts"
          element={!isAuth ? <Navigate to="/login" /> : <AllContacts />}
        />
        <Route
          path="/my-report"
          element={!isAuth ? <Navigate to="/login" /> : <Report />}
        />
        <Route
          path="/sign-up"
          element={isAuth ? <Navigate to="/" /> : <SignUp />}
        />
        <Route
          path="/login"
          element={isAuth ? <Navigate to="/" /> : <Login />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
