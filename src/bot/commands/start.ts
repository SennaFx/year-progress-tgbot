import { Context } from 'telegraf';
import { registeredUsers } from '..';

export default function start(ctx: Context): void {
  ctx.reply('hello!');
  const chatId = ctx.chat?.id;
  if (chatId != undefined) {
    registeredUsers.push({ id: chatId, started: true });
  }
}
