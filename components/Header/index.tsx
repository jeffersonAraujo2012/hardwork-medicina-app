import s from "./styles.module.scss";
import modeloAvatar from "../../assets/images/avatar.jpeg";
import Image from "next/image";
import { AiFillHome } from "react-icons/ai";
import HomeBtn from "./HomeBtn";

export default function Header() {
  return (
    <header className={s.header}>
      <div className={s.containerLogo}>
        <h1>LOGOTIPO</h1>
      </div>

      <div className={s.headerMenu}>
        <HomeBtn />

        <div className={s.containerAvatar}>
          <Image
            className={s.avatar}
            src={modeloAvatar}
            alt="Avatar da Maria"
          />
        </div>
      </div>
    </header>
  );
}
