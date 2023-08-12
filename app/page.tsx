import MainMenuOption from "./components/MainMenuOption";
import s from "./styles.module.scss";

export default function Home() {
  return (
    <main className={s.mainContainer}>
      <MainMenuOption
        title="Questões"
        description="Lorem ipsum aasd asdasd asdasd asdasd asdadsasd asdssss!"
        href="#"
        linkText="Começar"
      />

      <MainMenuOption title="Personalizar" href="#" linkText="Acessar" />

      <MainMenuOption title="Métricas" href="#" linkText="Acessar" />

      <MainMenuOption
        title="Chatbot"
        description="Lorem ipsum aasd asdasd asdasd asdasd asdadsasd asdssss!"
        href="#"
        linkText="Começar"
      />
    </main>
  );
}
