import QuestionSelector from "@/components/Question/QuestionSelector";
import HeaderPage from "../../components/HeaderPage";
import Question from "../../components/Question";
import s from "./styles.module.scss";
import { GetQuestionsAsync } from "@/services/questionsService";

export default async function QuestionsPage() {
  const questions = await GetQuestionsAsync();
  
  return (
    <main className="mainContainer flex flex-col">
      <HeaderPage pageTitle="Questões" />

      <Question questions={questions.obj}/>

      <QuestionSelector questions={questions.obj} />
    </main>
  );
}
