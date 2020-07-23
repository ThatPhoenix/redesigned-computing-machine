exports.run = function(galaxy, message, args) {
const Discord = require('discord.js');


    var slap = new Discord.MessageEmbed()
      .setTitle("SAIMIANNI Time")
      .setColor("0x00AE86")
      .setDescription(`${new Date()}`)
      .setImage();

    message.channel.send(slap);
  };
