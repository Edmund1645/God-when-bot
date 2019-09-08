const T = require('./config');

module.exports = {
  tweet: tweet => {
    T.post('statuses/update', { status: tweet }, function(err, data, message) {
      console.log(err);
    });
  },
  reply: (tweet, reply) => {
    T.post(
      'statuses/update',
      {
        status: `${reply}`,
        in_reply_to_status_id_str: tweet.id_str
      },
      function(err, data, message) {
        console.log(err);
      }
    );
  }
};
