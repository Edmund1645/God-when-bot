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
      function(err, data, message) {}
    );
  }
};
