/// <reference path='./types.d.ts' />

import * as dotenv from 'dotenv';
import * as messages from './message';
import * as plugins from './plugins';
import fs from 'fs';
import path from 'path';

dotenv.config({path: path.join(__dirname, '.env')});

import TelegramBot, {Message} from 'node-telegram-bot-api';
import {log, sleep} from './utils';
import network from './network';

const token = 'tg-token-bot';
const chatId_test = '-1001973833748';
const chatId_prod = '-1001944249686';
const chatId_lottery = '-1001941761708';

const chatId = chatId_lottery;

const bot = new TelegramBot(token, {polling: true});

let isPaused = false;

/** on errors */
bot.on('polling_error', (err) => log.error(err.message));
bot.on('error', (err) => log.error(err.message));

/**
 * lastking command
 */
const cmd_lastwinners = /\/lastwinners/;
bot.onText(cmd_lastwinners, async (msg: Message, match: RegExpExecArray) => {
  try {
    plugins.spam(msg);
    if (msg.chat.id === Number(chatId)) {
      const info = await network.getLastWinners();
      await bot.sendMessage(msg.chat.id, messages.lastWinners(info), {
        parse_mode: 'HTML',
      });
    }
  } catch (ex) {
    log.error(`cmd_lastwinners ex: ${ex.toString()}`);
  }
});

/**
 * rules command
 */
const cmd_rules = /\/rules/;
bot.onText(cmd_rules, async (msg: Message, match: RegExpExecArray) => {
  try {
    plugins.spam(msg);
    if (msg.chat.id === Number(chatId)) {
      await bot.sendPhoto(chatId, PHOTO_LOTTERY, {
        parse_mode: 'HTML',
        caption: messages.rules(),
      });
    }
  } catch (ex) {
    log.error(`cmd_rules ex: ${ex.toString()}`);
  }
});

/**
 * pause command
 */
const cmd_pause = /\/pause/;
bot.onText(cmd_pause, async (msg: Message, match: RegExpExecArray) => {
  try {
    plugins.spam(msg);
    if (msg.chat.username.toLowerCase() === 'ignaciouy') {
      isPaused = true;
    }
  } catch (ex) {
    log.error(`cmd_pause ex: ${ex.toString()}`);
  }
});

/**
 * start command
 */
const cmd_start = /\/start/;
bot.onText(cmd_start, async (msg: Message, match: RegExpExecArray) => {
  try {
    plugins.spam(msg);
    if (msg.chat.username.toLowerCase() === 'ignaciouy') {
      isPaused = false;
    }
  } catch (ex) {
    log.error(`cmd_pause ex: ${ex.toString()}`);
  }
});

/**
 * start command
 */
const cmd_debug = /\/debug/;
bot.onText(cmd_debug, async (msg: Message, match: RegExpExecArray) => {
  try {
    console.log('debug', msg.chat.username.toLowerCase());
    plugins.spam(msg);
    if (msg.chat.username.toLowerCase() === 'ignaciouy') {
      const info = await network.getDebugInfo();
      await bot.sendMessage(msg.chat.id, messages.debug(info), {
        parse_mode: 'HTML',
      });
    }
  } catch (ex) {
    log.error(`cmd_debug ex: ${ex.toString()}`);
  }
});

async function start() {
  while ((await network.connect()) === false) {
    await sleep(10 * 1000);
  }

  if (bot.isPolling()) {
    await bot.stopPolling();
  }

  await bot.startPolling({polling: true});

  /** on errors */

  log.info(`Starting ...`);

  await doJob();

  log.info(`Ending ...`);
  await bot.stopPolling();
}

const PHOTO_LOTTERY = fs.readFileSync(path.join(__dirname, './images/lottery.png'));

async function doJob() {
  while (true) {
    try {
      const changes: LotteryChange[] = await network.checkLotteryChanges();

      for (let i = 0; i < changes.length; i++) {
        const change = changes[i];
        let photo = null;
        let message = null;
        try {
          if (change.type === 'NEW_WINNERS') {
            photo = PHOTO_LOTTERY;
            message = messages.announceNewWinners(change);
          } else if (change.type === 'START_NEW_LOTTERY') {
            photo = PHOTO_LOTTERY;
            message = messages.announceNewLottery(change);
          } else if (change.type === 'NEW_BUYS') {
            photo = PHOTO_LOTTERY;
            message = messages.announceNewTicketBuys(change);
          }

          if (isPaused === false) {
            if (message !== null) {
              if (photo !== null) {
                await bot.sendPhoto(chatId, photo, {
                  parse_mode: 'HTML',
                  caption: message,
                });
              } else {
                await bot.sendMessage(chatId, message, {parse_mode: 'HTML'});
              }
            }
            
            network.confirmChanges(change);

            await sleep(1000);
          }
        } catch (ex) {
          console.log(ex);
        }
      }
    } catch (ex) {}

    await sleep(5000);
  }
}

process.on('uncaughtException', function (err) {
  console.log('Uncaught', err);
});

start();
