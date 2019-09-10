const T = require('./config');

module.exports = {
  tweet: tweet => {
    T.post('statuses/update', { status: tweet }, function(err, data, message) {});
  },
  reply: (tweet, reply) => {
    T.post(
      'statuses/update',
      {
        status: `@${tweet.user.screen_name}     ${reply}`,
        in_reply_to_status_id: tweet.id_str
      },
      function(err, data, message) {
        console.log(`error: ${err}
        bot tweet: ${data.text}
        message: ${message}
        `);
      }
    );
  },
  like: tweet => {
    T.post('favorites/create', { id: tweet.id_str });
  },
  retweet: tweet => {
    T.post('statuses/retweet/:id', { id: tweet.id_str });
  }
};
