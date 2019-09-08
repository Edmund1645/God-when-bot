const T = require('./modules/config');
const replies = require('./modules/replies');
const getReply = require('./modules/getReply');
const Twitter = require('./modules/twitter');

const stream = T.stream('statuses/filter', {
  track: ['God when?', 'God am i not your'],
  lang: 'en'
});

stream.on('tweet', tweet => {
  Twitter.reply(tweet, `${getReply(replies)}`);
  // console.log(tweet.text);
  // setTimeout(process.exit(), 5000);
});
