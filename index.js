const T = require('./modules/config');
const replies = require('./modules/replies');
const getReply = require('./modules/getReply');
const Twitter = require('./modules/twitter');

const stream = T.stream('statuses/filter', {
  track: ['God when?', 'God am i not your'],
  lang: 'en'
});
const shouldReply = () => {
  if (Math.random() >= 0.35) {
    return true;
  } else {
    return false;
  }
};
stream.on('tweet', tweet => {
  let lcText = tweet.text.toLowerCase();
  if (shouldReply()) {
    if (lcText.startsWith('god when') || lcText.endsWith('god when?') || lcText.endsWith('god when')) {
      Twitter.reply(tweet, `${getReply(replies)}`);
      console.log(tweet.text);
      return;
    } else if (lcText.includes('god am i not your')) {
      Twitter.reply(tweet, `${getReply(replies)}`);
      console.log(tweet.text);
      return;
    }
  }
});
