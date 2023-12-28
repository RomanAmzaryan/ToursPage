function generateRandomDigit() {
  return Math.round(Math.random() * 9);
}

export const UseGenerationID = (data = []) => {
  let id = "";
  for (let i = 0; i < 10; i++) {
    id += generateRandomDigit();
  }

  if (data.find((el) => el.id === id)) return UseGenerationID(data);

  return id;
};
