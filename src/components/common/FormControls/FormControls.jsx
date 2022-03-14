import s from "./FormControls.module.css";

const Textarea = (props) => {
  const { input, meta, ...rest } = props;
  const gotError = meta.error && meta.touched && input.value;
  return (
    <div>
      <div className={gotError ? s.error : ""}>
        <textarea {...input} {...rest} />
      </div>
      {gotError && <span>{meta.error}</span>}
    </div>
  );
};

const Input = (props) => {
  const { input, meta, ...rest } = props;
  const gotError = meta.error && meta.touched && input.value;
  return (
    <div>
      <div className={gotError ? s.error : ""}>
        <input {...input} {...rest} />
      </div>
      {gotError && <span>{meta.error}</span>}
    </div>
  );
};

export { Input };
export { Textarea };
