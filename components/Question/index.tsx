"use client";

import { useContext, useEffect, useState } from "react";
import AnswerOption from "./AnswerOption";
import s from "./styles.module.scss";
import { QuestionsContext } from "@/contexts/QuestionsProvider";
import { GetQuestionsAsync } from "@/services/questionsService";

export interface IQuestion {
  prova: string;
  id_questao: number;
  questao: string;
  alternativas: {
    id: number;
    alternativa: string;
  }[];
}

export default function Question({ questions }: { questions: IQuestion[] }) {
  const { selectedAnswer, setSelectedAnswer } = useContext(QuestionsContext);
  const { selectedQuestion } = useContext(QuestionsContext);
  const question = questions[selectedQuestion - 1];

  if (!question) return <>Loading</>;

  const setSelected = (id: number) => {
    if (id === selectedAnswer) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(id);
    }
  };

  return (
    <div>
      <div className={s.questionCard}>
        <p className={s.text}>{question.questao}</p>
      </div>

      {question.alternativas.map((option) => (
        <AnswerOption
          id={option.id}
          text={option.alternativa}
          selected={option.id === selectedAnswer}
          setSelected={setSelected}
          key={option.id}
        />
      ))}

      <button className={s.sendAnswer}>Confirmar resposta</button>
    </div>
  );
}
