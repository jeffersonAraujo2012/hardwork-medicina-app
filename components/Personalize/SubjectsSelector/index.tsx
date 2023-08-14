import { FormControlLabel, Switch } from "@mui/material";
import Container from "../Container";
import { useContext } from "react";
import { PersonalizeContext } from "@/contexts/PersonalizeProvider";

export default function SubjectsSelector() {
  const { selectedSubjects, setSelectedSubjects, subjectsMock } =
    useContext(PersonalizeContext);

  return (
    <Container description="Questões por Grandes áreas:">
      {subjectsMock.map((subject) => (
        <FormControlLabel
          className="w-full flex justify-between m-0"
          control={
            <Switch
              color="success"
              checked={selectedSubjects[subject.id]}
              onChange={(e) =>
                setSelectedSubjects({
                  ...selectedSubjects,
                  [subject.id]: e.target.checked,
                })
              }
            />
          }
          label={subject.name}
          labelPlacement="start"
          key={subject.id}
        />
      ))}
    </Container>
  );
}
