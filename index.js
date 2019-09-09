const T = require('./modules/config');
const replies = require('./modules/replies');
const getReply = require('./modules/getReply');
const Twitter = require('./modules/twitter');

const stream = T.stream('statuses/filter', {
  track: ['God when?', 'God am i not your'],
  lang: 'en'
});

stream.on('tweet', tweet => {
  let lcText = tweet.text.toLowerCase();
  if (lcText.startsWith('god when?') || lcText.endsWith('god when?')) {
    Twitter.reply(tweet, `${getReply(replies)}`);
    return;
  } else if (lcText.includes('god am i not your')) {
    Twitter.reply(tweet, `${getReply(replies)}`);
    return;
  }
  console.log(tweet.text);
});
