import { Context } from 'telegraf';
import YearProgress from '../../year-progress';

export default function getYearProgress(ctx: Context): void {
  YearProgress.update();

  const str = ''.concat(
    '`',
    YearProgress.getProgressBar(),
    '`',
    ' _',
    YearProgress.getLabel().replace('.', '\\.'),
    '_',
  );
  ctx.replyWithMarkdownV2(str);
}
