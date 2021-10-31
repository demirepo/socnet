import s from "./Spinner.module.css";
export default function Spinner() {
  return (
    <img className={s.spinner} src="/img/spinner.gif" alt="идет загрузка..." />
  );
}
