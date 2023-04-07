import React from 'react';
import { Route, Routes } from "react-router-dom";
import Login from './page/Login';
import Signup from './page/Signup';
import ForgotPassword from './page/ForgotPassword';
import Home from './page/Home';
import { Layout } from './Layouts/Layout';

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
