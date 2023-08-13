import s from "./styles.module.scss";

interface IAnswerOption {
  id: number;
  text: string;
  selected: boolean;
  setSelected: (id: number) => void;
}

interface IIdLetter {
  [key: number]: string;
}

export default function AnswerOption({
  id,
  text,
  selected,
  setSelected,
}: IAnswerOption) {
  const idLetter: IIdLetter = {
    1: "A",
    2: "B",
    3: "C",
    4: "D",
  };
  return (
    <div
      className={`${s.answerOption} ${selected && s.selected}`}
      onClick={() => setSelected(id)}
    >
      <h3 className={s.letter}>{idLetter[id]}</h3>
      <p className={s.answerText}>{text}</p>
    </div>
  );
}
