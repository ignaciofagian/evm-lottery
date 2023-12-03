export enum LogType {
  Debug = 'Debug',
  Error = 'Error',
  Info = 'Info',
}

function _log(type: LogType, text: string) {
  const now = new Date();
  console.log(`[${type}] ${text}`);
}

export const log = {
  info: (text) => _log(LogType.Info, text),
  debug: (text) => _log(LogType.Debug, text),
  error: (text) => _log(LogType.Error, text),
};

export const Address_Zero = '0x0000000000000000000000000000000000000000';

export function timeSpanByDate(date: Date) {
  const now = new Date();
  return timeSpan(Math.round((now.getTime() - date.getTime()) / 1000));
}

export function timeSpan(_secs: number) {
  const secs = Math.abs(_secs);
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs - hours * 3600) / 60);
  const seconds = secs - hours * 3600 - minutes * 60;

  let time = '';
  if (hours > 0) time += `${hours} hrs `;
  if (minutes > 0) time += `${minutes} mins `;
  if (seconds > 0) time += `${seconds} secs`;

  return time;
}

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(() => resolve(true), ms));
}

export function areEquals(a: number[], b: number[]) {
  return JSON.stringify(a) === JSON.stringify(b);
}
