  
exports.run = (galaxy, message, args) => {
  message.channel.send('**Playing Ping Pong...**')
    .then(msg => {
      msg.edit(`Okay, _Pong!_ :ping_pong: (It took: :signal_strength: ${msg.createdTimestamp - message.createdTimestamp}ms to bring the ball!)`);
    });
};