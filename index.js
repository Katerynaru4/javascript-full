const months = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const studentsBirthDays = (students) => {
  const resultObj = {};

  students.forEach((person) => {
    const month = months[new Date(person.birthDate).getMonth()];
    if (!resultObj.hasOwnProperty(month)) {
      resultObj[month] = [person.name];
    } else {
      resultObj[month].push(person.name);
      resultObj[month].sort(
        (a, b) => new Date(b.birthDate) - new Date(a.birthDate)
      );
    }
  });

  return resultObj;
};

const students = [
  { name: 'Tom', birthDate: '01/15/2010' },
  { name: 'Ben', birthDate: '01/17/2008' },
  { name: 'Sam', birthDate: '03/15/2010' },
];
console.log(studentsBirthDays(students));
