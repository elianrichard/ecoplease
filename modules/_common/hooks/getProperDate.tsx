const getProperDate = (date: Date) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const properDate = `${months[date.getMonth()]} ${date.getDate()}, ${
    date.getFullYear()
  }`;
  return properDate;
};

export default getProperDate;
