let Discord = require("discord.js")
let client = new Discord.Client()

client.on("message", message => {
if(message.content === "ping") {
  message.channel.send("pong")
}
})

client.login("ODAxNzk3NTMyMTExNzMyNzU2.YAl6JA.oMpiAQDsN5yb0M8hLUe6-kkbIXA")