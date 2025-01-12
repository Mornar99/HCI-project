import style from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={style.footer}>
      <p>Owners: Ivan Mornar, Ivan Marasović</p>
      <p>Email: Ivan.Mornar@fesb.hr, Ivan.Marasović@fesb.hr</p>
    </footer>
  );
}
