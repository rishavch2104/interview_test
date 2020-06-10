const moment = require("moment");
// import moment from "moment";
function computeTwoDays(day1, day2) {
  if (day1 === null || day2 === null) throw new Error("day1 or day2 null");
  const firstDay = moment(day1[0]);
  const secondDay = moment(day2[0]);
  if (!firstDay.isValid() || !secondDay.isValid())
    throw new Error("Day 1 or Day 2 is in invalid format");
  const firstValue = day1[1];
  const secondValue = day2[1];
  if (isNaN(firstValue) || isNaN(secondValue))
    throw new Error("Invalid Values");

  let dayDiff = secondDay.diff(firstDay, "days");

  if (dayDiff === 1) {
    const returnDate = { [`${day2[0]}`]: secondValue };

    return returnDate;
  }
  const valueToAdd = (secondValue - firstValue) / dayDiff;

  //   console.log(secondValue, firstValue, valueToAdd);

  const result = {};

  for (let i = 1; i <= Math.abs(dayDiff); i++) {
    let nextDay;
    if (dayDiff < 0) {
      prevDay = moment(firstDay).add(-i, "days");
      result[`${nextDay.format("YYYY-MM-DD")}`] =
        firstValue + Math.abs(valueToAdd) * i;
    } else {
      nextDay = moment(firstDay).add(i, "days");
      result[`${nextDay.format("YYYY-MM-DD")}`] = firstValue + valueToAdd * i;
    }
  }

  return result;
}

const dictionary = {
  "2019-01-10": 10,
  "2019-01-12": 30,
};
// compute(dictionary);

function compute(Dictionary) {
  if (dictionary === null) throw new Error("Invalid data");
  const dates = Object.entries(Dictionary);
  let finalDictionary = {};
  finalDictionary[dates[0][0]] = dates[0][1];
  for (let i = 0; i < dates.length - 1; i++) {
    const computedObject = computeTwoDays(dates[i], dates[i + 1]);

    finalDictionary = { ...finalDictionary, ...computedObject };
  }

  console.log(finalDictionary);
  return finalDictionary;
}
module.exports = { compute, computeTwoDays };
