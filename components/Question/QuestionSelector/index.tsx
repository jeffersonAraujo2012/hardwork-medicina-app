"use client"

import { Pagination } from "@mui/material";
import { IQuestion } from "..";
import s from "./styles.module.scss";
import { ChangeEvent, useContext } from "react";
import { QuestionsContext } from "@/contexts/QuestionsProvider";

interface IQuestionSelector {
  questions: IQuestion[];
}

export default function QuestionSelector({ questions }: IQuestionSelector) {
  const { selectedQuestion, setSelectedQuestion } = useContext(QuestionsContext);

  function handleChange(event: ChangeEvent<unknown>, value: number) {
    setSelectedQuestion(value);
  }

  return (
    <div className={s.wrapperPagination}>
      <Pagination count={questions.length} page={selectedQuestion} onChange={handleChange}/>
    </div>
  );
}
