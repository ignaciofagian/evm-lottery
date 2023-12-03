import {html as format} from 'telegram-format';

export function announceNewTicketBuys(info: LotteryChange) {
  let text = ``;
  text += format.bold(`🎲 New ticket(s) sold\n\n`);
  text += `${info.newTickets.map((num: number) => format.monospace(`${num}`)).join(' | ')}\n\n`;
  text += `Visit ${format.url('https://your-site.netlify.app/', 'https://your-site.netlify.app/')} connect your wallet and choose your lucky number(s) \n\n`
 
  return text;
}

export function announceNewWinners(info: LotteryChange) {
  let text = ``;
  text += format.bold(`New winners\n\n`);
  text += format.bold(`🥇 1st    `) + format.monospace(`${info.winners[0].address}`) + format.bold(`  ${info.winners[0].slot}\n`);
  text += format.bold(`🥈 2nd  `) + format.monospace(`${info.winners[1].address}`) + format.bold(`  ${info.winners[1].slot}\n`);
  text += format.bold(`🥉 3rd   `) + format.monospace(`${info.winners[2].address}`) + format.bold(`  ${info.winners[2].slot}`);
  return text;
}

export function announceNewLottery(info: LotteryChange) {
  let text = ``;
  text += format.bold(`Lottery started\n\n`);
  text += `Visit ${format.url('https://your-site.netlify.app/', 'https://your-site.netlify.app/')} connect your wallet and choose your lucky number(s) \n\n`
 
  return text;
}

export function lastWinners(info: LotteryChange) {
  let text = ``;
  text += format.bold(`Lottery - Last winners\n\n`);
  text += format.bold(`🥇 1st    `) + format.monospace(`${info.winners[0].address}`) + format.bold(`  ${info.winners[0].slot}\n`);
  text += format.bold(`🥈 2nd  `) + format.monospace(`${info.winners[1].address}`) + format.bold(`  ${info.winners[1].slot}\n`);
  text += format.bold(`🥉 3rd   `) + format.monospace(`${info.winners[2].address}`) + format.bold(`  ${info.winners[2].slot}`);
  return text;
}

export function rules() {
  let text = ``;

  text += format.bold(`Lottery rules\n\n`);
  text += `Visit ${format.url('https://your-site.netlify.app/', 'https://your-site.netlify.app/')} connect your wallet and choose your lucky number(s) \n\n`
  text += `Good luck!`;

  return text;
}

export function debug(info) {
  let text = ``;

  text += format.bold(`Debug information\n\n`);
  text += format.bold(`Current RPC: ${format.monospace(info.currentRPC)}\n`);
  text += format.bold(`Is Connected: ${format.monospace(info.isConnected.toString())}\n`);
  text += format.bold(`Last processed: ${format.monospace(JSON.stringify(info.lastProcessed))}\n`);

  return text;
}
