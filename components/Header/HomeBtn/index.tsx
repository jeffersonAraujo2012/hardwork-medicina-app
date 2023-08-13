import { AiFillHome } from "react-icons/ai";
import s from "./styles.module.scss";
import Link from "next/link";

export default function HomeBtn() {
  return (
    <Link className={s.homeBtn} href="/">
      <div className={s.containerIcon}>
        <AiFillHome size="28px" />
      </div>
      <p>HOME</p>
    </Link>
  );
}
