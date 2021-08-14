export const parseUser = (jsonString) => {
  try {
    return JSON.parse(jsonString);
  } catch {
    return null;
  }
};

console.log(parseUser('{"name":"Tom","age":15}'));
