export async function GetQuestionsAsync() {
  const res = await fetch(
    "https://hardworkmedicina.com.br/exemploQuestoes.json"
  );
  const questions = await res.json();
  return questions;
}