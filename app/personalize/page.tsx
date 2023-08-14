import HeaderPage from "@/components/HeaderPage";
import s from "./styles.module.scss";
import QuestionsPerDaySelector from "@/components/Personalize/QuestionsPerDaySelector";
import SubjectsSelector from "@/components/Personalize/SubjectsSelector";
import TestSelector from "@/components/Personalize/TestSelector";
import SpecificSubjectSelector from "@/components/Personalize/SpecificSubjectSelector";

export const metadata = {
  title: "Personalizar",
};

export default function PersonalizePage() {
  return (
    <main className={`mainContainer ${s.backgroundGradient}`}>
      <HeaderPage pageTitle="Personalizar" />

      <QuestionsPerDaySelector />

      <SubjectsSelector />

      <TestSelector />

      <SpecificSubjectSelector />

      <button className={s.saveButton}>Começar</button>
    </main>
  );
}
