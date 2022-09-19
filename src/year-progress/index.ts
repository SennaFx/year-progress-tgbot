import ProgressBar from '../progress_bar';
import { isLeapYear, MILLIS } from './utils';

const yearProgressBar = new ProgressBar();

function calculateYearPercentage(time: Date): number {
  const currentYear = time.getFullYear();

  const offset = time.getTime() - new Date(currentYear, 0, 1).getTime();
  const currentDay = offset / MILLIS.day;

  const maxDays = 365 + Number(isLeapYear(currentYear));
  return currentDay / maxDays;
}

const YearProgress = {
  update(time = new Date()): void {
    const dayPercentage = calculateYearPercentage(time);
    yearProgressBar.update(dayPercentage);
  },
  getProgressBar(label = false, wrap = true): string {
    return yearProgressBar.getBar(label, wrap);
  },
  getLabel(): string {
    return yearProgressBar.getLabel();
  }
};

export default YearProgress;
