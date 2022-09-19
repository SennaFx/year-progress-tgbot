export function isLeapYear(year: number): boolean {
  return year % 400 === 0 || (year % 100 != 0 && year % 4 === 0);
}

export const MILLIS = {
  sec:  1000,
  min:  1000 * 60,
  hour: 1000 * 60 * 60,
  day:  1000 * 60 * 60 * 24,
};
