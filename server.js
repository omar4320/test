let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
if(message.content === "ping") {
  message.channel.send("pong")
}
})