const Discord = require('discord.js');
const green = '#008000';
const red = '#FF0000';
const yellow = '#FFD700';

exports.run = function(galaxy, message, args) {
  var embed = new Discord.MessageEmbed();
  embed.setTitle('SAIMIANNI Credits')
  embed.setDescription(`**SAIMIANNI's Developer**: *Phoenix#8419* <3 \n **SAIMIANNI's Creator**: *Premium#6351*`);
  embed.setColor('#FFD700');
  embed.setThumbnail('https://cdn.discordapp.com/attachments/734924310132555777/734931875327639552/maxresdefault.png')

  message.channel.send(embed);
};