"use client"

import { Autocomplete, TextField } from "@mui/material";
import Container from "../Container";

const provasMock = [
  { label: "ABC" },
  { label: "AABC" },
  { label: "ABBC" },
  { label: "AAABCC" },
];

export default function TestSelector() {
  return (
    <Container description="Questões de provas específicas:">
      <Autocomplete
        disablePortal
        id="provas"
        options={provasMock}
        renderOption={(props, option) => {
          return (
            <li {...props} key={option.label}>
              {option.label}
            </li>
          );
        }}
        renderInput={(params) => <TextField {...params} label="Provas" />}
      />
    </Container>
  );
}
