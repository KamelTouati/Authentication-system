import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Activate,
  Home,
  Login,
  Signup,
  ResetPassword,
  ResetPasswordConfirm,
  Google, 
  Facebook
} from "./containers";

import Layout from "./hocs/Layout";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/login" exact element={<Login />} />
            <Route path="/signup" exact element={<Signup />} />
            <Route path="/reset-password" exact element={<ResetPassword />} />
            <Route
              path="/password/reset/confirm/:uid/:token"
              exact
              element={<ResetPasswordConfirm />}
            />
            <Route path="/activate/:uid/:token" exact element={<Activate />} />
            <Route path="/google" exact element={<Google />} />
            <Route path="/facebook" exact element={<Facebook />} />
          </Routes>
        </Layout>
      </Router>
    </Provider>
  );
}
