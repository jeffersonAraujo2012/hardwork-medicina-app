"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IQuestionsContext {
  selectedAnswer: number | null;
  setSelectedAnswer: Dispatch<SetStateAction<number | null>>;
  selectedQuestion: number;
  setSelectedQuestion: (numQuestion: number) => void;
}

export const QuestionsContext = createContext({} as IQuestionsContext);

interface IQuestionsProvider {
  children: ReactNode;
}

export default function QuestionsProvider({ children }: IQuestionsProvider) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [selectedQuestion, setSelQuestion] = useState(1);

  function setSelectedQuestion(numQuestion: number) {
    if (numQuestion !== selectedQuestion) setSelectedAnswer(null);
    setSelQuestion(numQuestion);
  }

  return (
    <QuestionsContext.Provider
      value={{
        selectedAnswer,
        setSelectedAnswer,
        selectedQuestion,
        setSelectedQuestion,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}
