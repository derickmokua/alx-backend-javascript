// This function calculates the sum of an initial number and two optional expansion values.
// The expansion values default to 89 (expansion1989) and 19 (expansion2019) if not provided.
// It returns the sum of initialNumber, expansion1989, and expansion2019.
// Example: getSumOfHoods(100) would return 100 + 89 + 19 = 208.
//
// const getSumOfHoods = (initialNumber, expansion1989 = 89, expansion2019 = 19) => {
//     return initialNumber + expansion1989 + expansion2019;
// }
//
// export default getSumOfHoods;

export default function getSumOfHoods(initialNumber, expansion1989 = 89, expansion2019 = 19) {
  return initialNumber + expansion1989 + expansion2019;
}
