import s from "./Spinner.module.css";

const Spinner = () => {
  return (
    <img className={s.spinner} src="img/spinner.gif" alt="идет загрузка..." />
  );
};

export default Spinner;
