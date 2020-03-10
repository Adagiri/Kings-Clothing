import React from "react";
import {  ErrorImageContainer, ErrorImageOverlay, ErrorImageText } from "./error-boundary.styles";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasErrored: false
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
          <ErrorImageOverlay>
          <ErrorImageContainer imageUrl="https://i.imgur.com/yW2W9SC.png" />
          <ErrorImageText>This Page is Broken, please reload</ErrorImageText>
          </ErrorImageOverlay>
      );
    }
    return this.props.children;
  }
}
