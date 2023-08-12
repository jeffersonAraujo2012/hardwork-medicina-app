import Link from "next/link";
import s from "./styles.module.scss";

export default function Footer() {
  return (
    <footer className={s.footer}>
      <div className={s.textLogo}>
        <p>HARDWORK</p>
        <p>MEDICINA</p>
      </div>

      <div className={s.footerInfo}>
        <p>@ Copyright 2023</p>

        <nav>
          <Link href="#">Política de privacidade</Link>
          <span> e </span>
          <Link href="#">Termos de uso</Link>
        </nav>
      </div>
    </footer>
  );
}
