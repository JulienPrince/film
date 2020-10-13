export const dateToString = (date) => {
  let Month = date.getMonth();
  let Days = date.getDate();

  if (Month < 10 && Days < 10) {
    Month = "0" + Month;
    Days = "0" + Days;
    return date.getFullYear() + "-" + Month + "-" + Days;
  }
  return date.getFullYear() + "-" + (Month + 1) + "-" + Days;
};

export const DateBest = (date) => {
  const newDate = date.getFullYear();
  console.log(newDate);
  // return date;
  return newDate;
};
