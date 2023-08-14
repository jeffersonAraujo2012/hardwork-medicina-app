import { Slider } from "@mui/material";
import s from "./styles.module.scss";
import Container from "../Container";
import { useContext } from "react";
import { PersonalizeContext } from "@/contexts/PersonalizeProvider";

export default function QuestionsPerDaySelector() {
  const { questionsPerDay, setQuestionsPerDay } =
    useContext(PersonalizeContext);

  return (
    <Container description="Definir meta diária de questões">
      <div className="flex items-center">
        <Slider
          value={questionsPerDay}
          onChange={(e, value) => setQuestionsPerDay(value as number)}
          max={200}
          sx={{
            color: "success.main",
          }}
        />

        <p className={s.sliderValue}>{questionsPerDay}</p>
      </div>
    </Container>
  );
}
