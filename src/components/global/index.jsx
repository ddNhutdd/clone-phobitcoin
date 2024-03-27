import { Fragment } from "react";
import PropTypes from 'prop-types';
import "./global-style.scss";

export function GlobalStyle(props) {
  const { children } = props;
  return <Fragment>{children}</Fragment>;
}

GlobalStyle.propTypes = {
  children: PropTypes.node
}