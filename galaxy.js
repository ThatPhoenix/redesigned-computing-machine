const Discord = require("discord.js");
const galaxy = new Discord.Client();
const chalk = require('chalk')
const node = require('node-opus')
const DB = "./Database.json";
var version = "1";


const prefix = ".sm ";
console.log(`Starting up SAIMIANNI V${version} made with love by Phoenix <3`);

galaxy.on("ready", () => {
 
  console.log(`[ProcessManager] SAIMIANNI V${version} has started up and connected to the DiscordAPI successfully.`);

  console.log(`[SAIMIANNI] I have started at ${new Date()}! Yay for Premium Corporation!`);
});

galaxy.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(prefix) !== 0) return;

  // This is the best way to define args. Trust me.
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g);
  const command = args.shift().toLowerCase();

  // The list of if/else is replaced with those simple 2 lines:
try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(galaxy, message, args);
} catch (e) {
  console.log(e);
}


});


galaxy.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it


  if (!message.guild) return;

  if (message.content === '/play') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      const ytdl = require('ytdl-core');
      connection.play(ytdl('https://www.youtube.com/watch?v=mfYUtROIzDk', { filter: 'audioonly' }));
    // const broadcast = galaxy.voice.createBroadcast();
    // const dispatcher = broadcast.play('./Musix.mp3');

   //  connection.play(broadcast);
   
    } else {
      message.reply('You need to join a voice channel first!');
    }
  


  }
});








galaxy.login(process.env.tok);
