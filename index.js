const obj1 = { days: 16, userId: 'Katerynaru4', repoId: 'javascript-full' };
const obj2 = { days: 16, userId: 'Katerynaru4', repoId: 'calendar' };
const obj3 = { days: 16, userId: 'Katerynaru4', repoId: 'calendar' };

const getInfo = (commits, days) => {
  const count = commits.filter(
    (commit) =>
      new Date() - new Date(commit.commit.author.date) < 86400000 * days
  ).length;
  const author = commits[0].commit.author;
  const userName = author.name;
  const userEmail = author.email;

  return { count, name: userName, email: userEmail };
};

const findMax = (arr) => {
  const result = arr.reduce((prev, current) => {
    if (+current.count > +prev.count) {
      return current;
    }
    return prev;
  });
  return result;
};

async function getUserInfo(users) {
  const results = await Promise.all(
    users.map((user) =>
      fetch(
        `https://api.github.com/repos/${user.userId}/${user.repoId}/commits?per_page=100`
      )
        .then((response) => response.json())
        .then((res) => getInfo(res, user.days))
    )
  );
  const maxCount = findMax(results).count;
  const res = results.filter((user) => user.count === maxCount);

  return res;
}

export const getMostActiveDevs = (...users) => getUserInfo(users);

getMostActiveDevs(obj1, obj2, obj3);
