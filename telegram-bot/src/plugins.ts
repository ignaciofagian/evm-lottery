const msgTimes = [];

export function spam(message) {
  var isOk = true;
  var diff = 0;
  if (msgTimes[message.from.id] != undefined) {
    diff = Date.now() / 1000 - msgTimes[message.from.id];
    if (diff < 0.8) {
      console.log('Spam user ' + message.from.username);
      isOk = false;
      throw new Error('Spammer')
    }
  }
  msgTimes[message.from.id] = Date.now() / 1000;

  return isOk;
}
