const T = require('./modules/config');
const replies = require('./modules/replies');
const getReply = require('./modules/getReply');
const Twitter = require('./modules/twitter');

const stream = T.stream('statuses/filter', {
  track: ['God when?', 'God am i not your'],
  lang: 'en'
});
const shouldReply = () => {
  if (Math.random() >= 0.32) {
    return true;
  } else {
    return false;
  }
};

const shouldRetweet = () => {
  if (Math.random() >= 0.4) {
    return true;
  } else {
    return false;
  }
};

stream.on('tweet', tweet => {
  let lcText = tweet.text.toLowerCase();

  if (lcText.startsWith('god when') || lcText.endsWith('god when?') || lcText.endsWith('god when')) {
    if (shouldReply() && lcText.length <= 35) {
      Twitter.like(tweet);
      Twitter.reply(tweet, `${getReply(replies)}`);

      if (shouldRetweet()) {
        Twitter.retweet(tweet);
      }

      return;
    }

    // for tracking purposes
    console.log(`user tweet: ${tweet.text}
    length: ${tweet.text.length}`);

    return;
  } else if (lcText.includes('god am i not your')) {
    Twitter.reply(tweet, `${getReply(replies)}`);

    // for tracking purposes
    console.log(`user tweet: ${tweet.text}`);

    return;
  }
});
