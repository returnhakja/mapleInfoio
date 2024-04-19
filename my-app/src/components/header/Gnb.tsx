import style from "./header.module.css";

export default function Gnb() {
  return (
    <ul className={style.gnb}>
      <li>Character</li>
      <li>Convert</li>
      <li>Trade</li>
      <li>Talk</li>
    </ul>
  );
}
