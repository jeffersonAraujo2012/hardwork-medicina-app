import Link from "next/link";
import s from "./styles.module.scss";

interface IHeaderPage {
  pageTitle: string;
}

export default function HeaderPage({ pageTitle }: IHeaderPage) {
  return (
    <header className={s.header}>
      <Link href="/" className={s.returnLink}>
        Voltar
      </Link>

      <div className={s.wrapper}>
        <div className={s.icon} />
        <h2 className={s.pageTitle}>
          {pageTitle[0].toUpperCase() + pageTitle.slice(1).toLowerCase()}
        </h2>
      </div>
    </header>
  );
}
