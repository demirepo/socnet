import React from "react";
import { Redirect } from "react-router";

export const withAuthRedirect = (Component) => {
  return class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuthed) return <Redirect to={"/login"} />;
      return <Component {...this.props} />;
    }
  };
};
