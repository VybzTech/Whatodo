import React, { Component } from "react";

class ErrorPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      err: false,
    };
  }

  static getDerivedStateFromError(err) {
    return {
      err: true,
    };
  }

  render() {
    if (this.state.err) {
      return (
        <h1 className="my-10 my-auto w-fit text-uppercase">
          Loading Has Failed
        </h1>
      );
    }

    return this.props.children;
  }
}

export default ErrorPage;
