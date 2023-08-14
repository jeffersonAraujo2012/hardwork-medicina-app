"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface IPersonalizeContext {
  questionsPerDay: number;
  setQuestionsPerDay: Dispatch<SetStateAction<number>>;
  subjectsMock: { id: number; name: string }[];
  selectedSubjects: { [id: number]: boolean };
  setSelectedSubjects: Dispatch<SetStateAction<{ [id: number]: boolean }>>;
}

export const PersonalizeContext = createContext({} as IPersonalizeContext);

interface IPersonalizeProvider {
  children: ReactNode;
}

export default function PersonalizeProvider({
  children,
}: IPersonalizeProvider) {
  const subjectsMock = [
    { id: 1, name: "Clínica médica" },
    { id: 2, name: "Cirurgia geral" },
    { id: 3, name: "Pediatria" },
    { id: 4, name: "Ginecologia e obstetrícia" },
    { id: 5, name: "Medicina preventiva" },
  ];
  const [questionsPerDay, setQuestionsPerDay] = useState(20);
  const [selectedSubjects, setSelectedSubjects] = useState(() => {
    const hashtable = {} as { [key: number]: boolean };
    subjectsMock.forEach((subject) => {
      hashtable[subject.id] = false;
    });
    return hashtable;
  });

  return (
    <PersonalizeContext.Provider
      value={{
        questionsPerDay,
        setQuestionsPerDay,
        selectedSubjects,
        setSelectedSubjects,
        subjectsMock,
      }}
    >
      {children}
    </PersonalizeContext.Provider>
  );
}
