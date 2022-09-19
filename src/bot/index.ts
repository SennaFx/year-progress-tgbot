import { Telegraf } from 'telegraf';
import { createDailyJob } from '../cron';
import YearProgress from '../year-progress';
import commands from './commands';

const BOT_TOKEN: string | undefined = process.env.BOT_TOKEN;
if (BOT_TOKEN == null) {
  throw new Error('a token should be specified');
}

const BOT = new Telegraf(BOT_TOKEN);

BOT.command('start', commands.start);
BOT.command('yearprogress', commands.getYearProgress);

interface IChat {
  id: number;
  started: boolean;
}

export const registeredUsers: IChat[] = [];
// export const registeredUsers = { }

const sendMessageDaily = createDailyJob(() => {
  YearProgress.update();
  for (let i = 0; i < registeredUsers.length; i++) {
    BOT.telegram
      .sendMessage(registeredUsers[i].id, YearProgress.getProgressBar(false))
      .catch((err) => console.error(err));
  }
});

console.log('starting daily cron')
sendMessageDaily?.start();
console.log('daily cron started')

export function run(): void {
  BOT.launch();
}
