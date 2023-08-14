import MainMenuOption from "../components/MainMenuOption";

export const metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <main className="mainContainer">
      <MainMenuOption
        title="Questões"
        description="Lorem ipsum aasd asdasd asdasd asdasd asdadsasd asdssss!"
        href="/questions"
        linkText="Começar"
      />

      <MainMenuOption
        title="Personalizar"
        href="/personalize"
        linkText="Acessar"
      />

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
