"use client"

import { Autocomplete, TextField } from "@mui/material";
import Container from "../Container";

const specificSubjectsMock = [
  { label: "ABC" },
  { label: "AABC" },
  { label: "ABBC" },
  { label: "AAABCC" },
];

export default function SpecificSubjectSelector() {
  return (
    <Container description="Questões de temas específicos:">
      <Autocomplete
        disablePortal
        id="temas"
        options={specificSubjectsMock}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.label}>
              {option.label}
            </li>
          );
        }}
        renderInput={(params) => <TextField {...params} label="Temas" />}
      />
    </Container>
  );
}
