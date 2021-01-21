let Discord = require("discord.js")
let client = new Discord.Client()

client.on("ready", () => {
  client.user.setPresence({ activity: { name: "Among Us" }, status: "idle" })
  
})

client.on("message", message => {
if(message.content === "ping") {
  message.channel.send("pong")
}
  if(message.content === "nameme") {
    let nicknames = ["dumbass", "idiot", "lord", "shitman", "good guy", "ricardo", "pink guy", "dream"]
    message.channel.send(`${nicknames[Math.floor(Math.random() * nicknames.length)]} is your name!`)
  }
})



client.login("ODAxNzk3NTMyMTExNzMyNzU2.YAl6JA.oMpiAQDsN5yb0M8hLUe6-kkbIXA")