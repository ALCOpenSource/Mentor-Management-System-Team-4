import React from "react";
import Navbar from "./Navbar";
import PropTypes from "prop-types";

export const Layout = (props) => {
  const { children } = props;
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};


Layout.propTypes = {
  children: PropTypes.node.isRequired,
};