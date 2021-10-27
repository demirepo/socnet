import React from "react";
import { Field, reduxForm } from "redux-form";

function LoginForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        placeholder={"login"}
        name={"login"}
        component={"input"}
        type={"text"}
      />
      <br />
      <Field
        placeholder={"password"}
        name={"password"}
        component={"input"}
        type={"password"}
      />
      <br />
      <Field component={"input"} type={"checkbox"} name="rememberMe" id="" />
      запомнить меня
      <br />
      <div>
        <button type="submit">Войти</button>
      </div>
    </form>
  );
}
let ReduxLoginForm = reduxForm({ form: "login" })(LoginForm);

// export default reduxForm({ form: "login" })(LoginForm);
export default ReduxLoginForm;
