import { Navigate, Route, Routes } from "react-router-dom";
import Profile from "./page/Profile";
import Layout from "./Layouts/Layout";
import Home from "./page/Home";
import Signup from "./page/Signup";
import ForgotPassword from "./page/ForgotPassword";
import Login from "./page/Login";
function App() {
  return (
    <>
      <Routes>
        <Route path="/account/login" exact element={<Login />} />
        <Route path="/account/signup" exact element={<Signup />} />
        <Route
          path="/account/forgot-password"
          exact
          element={<ForgotPassword />}
        />
        <Route
          path="/"
          exact
          element={
            // <ProtectedRoute>
            <Layout>
              <Home />
            </Layout>
            // </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}

export default App;
