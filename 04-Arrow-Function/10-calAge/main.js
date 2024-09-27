const calculateAge = (year) => {
  const birthDate = new Date(year, 0, 1);
  const endDate = new Date(2020, 11, 31);

  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;

  const timeDifference = endDate - birthDate;

  const ageInDays = Math.floor(timeDifference / oneDayInMilliseconds);

  return ageInDays;
};

// const ageInDays = +prompt(calculateAge(""));
// console.log(ageInDays);

  const ageInDays = calculateAge(1990);
  console.log(ageInDays); // 10957
