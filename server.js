let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
if(message.content === "ping") {
  message.channel.send("pong")
}
if(message.content === "embed") {
  let embed = new Discord.MessageEmbed()
  .setTitle("This is Embed Title")
  .setDescription("This Is Embed description")
  .setcolor("RANDOM")
  .setFooter("This is Embed Footer");
  message.channel.send(embed);
 }
});



client.login("ODAxNzk3NTMyMTExNzMyNzU2.YAl6JA.oMpiAQDsN5yb0M8hLUe6-kkbIXA")