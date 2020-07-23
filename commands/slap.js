exports.run = function(galaxy, message, args) {
const Discord = require('discord.js');
let member = message.guild.member(message.mentions.users.first());
    if (!args[0]){
      return message.channel.send('[:x:] | **Please mention a user!**');
    }
    var slap = new Discord.MessageEmbed()
      .setTitle("Someoene's showing anger here OwO")
      .setColor("0x00AE86")
      .setDescription("**"+message.author.username+"** slapped "+`${member}`+"")
      .setImage("https://media1.tenor.com/images/b6d8a83eb652a30b95e87cf96a21e007/tenor.gif?itemid=10426943");

    message.channel.send(slap);
  };
