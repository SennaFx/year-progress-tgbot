import YearProgress from './year-progress';
import dotenv from 'dotenv';
dotenv.config();

import { run } from './bot';

run();

YearProgress.update();
console.log(YearProgress.getProgressBar(true));
