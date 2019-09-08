module.exports = function(replies) {
  return replies[Math.floor(Math.random() * replies.length)];
};
