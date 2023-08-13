import Link from "next/link";
import s from "./styles.module.scss";

interface IMainMenuOption {
  title: string;
  description?: string;
  href: string;
  linkText: string;
}

export default function MainMenuOption({
  title,
  description,
  href,
  linkText
}: IMainMenuOption) {
  return (
    <div className={s.mainMenuOptionCard}>
      <div className={s.header}>
        <div className={s.header_Icon}></div>
        <h2 className={s.header_Title}>{title.toUpperCase()}</h2>
      </div>

      {description && <p className={s.description}>{description}</p>}

      <Link href={href} className={s.actionLink}>{linkText}</Link>
    </div>
  );
}
