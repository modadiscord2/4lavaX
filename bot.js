const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("528900921044762644")
setInterval(function() {
channel.send(`4lavaX`);
}, 30)
})

client.login(process.env.BOT_TOKEN);