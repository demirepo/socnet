import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormControls/FormControls";
import validator from "../../utils/validation";

const min8 = validator.minLength(8);
function LoginForm({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <Field
        placeholder={"login"}
        name={"login"}
        component={Input}
        type={"text"}
        validate={[validator.email]}
      />
      <br />
      <Field
        placeholder={"password"}
        name={"password"}
        component={Input}
        type={"password"}
        validate={[min8]}
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
let LoginReduxForm = reduxForm({ form: "login" })(LoginForm);
export default LoginReduxForm;
