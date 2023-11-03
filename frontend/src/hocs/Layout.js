import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import { connect } from "react-redux";
import {
  checkAuthenticated,
  load_user,
  googleAuthenticate,
} from "../actions/auth";
import queryString from "query-string";
const Layout = (props) => {
  let location = useLocation();

  useEffect(() => {  
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.state : null;

    console.log("state :" + state);
    console.log("code :" + code);
    if (state && code) {
      props.googleAuthenticate(state, code);
    } else {
      props.checkAuthenticated();
      props.load_user();
    }
  }, [location]);

  return (
    <div>
      <Navbar />
      {props.children}
    </div>
  );
};

export default connect(null, {
  checkAuthenticated,
  load_user,
  googleAuthenticate,
})(Layout);
