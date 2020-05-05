const Discord = require("discord.js");
const client = new Discord.Client();
const { createLogger, format, transports } = require('winston');

const config = require("./config.json");

client.on("ready", () => {
  console.log(
    "Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds."
  );
});

client.on("guildCreate", guild => {
  console.log(
    "New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!"
  );

  client.user.setActivity("Pajsen Media Technoligy");
});

client.on("guildDelete", guild => {
  console.log("I have been removed from: ${guild.name} (id: ${guild.id})");

  client.user.setActivity("Developed by Pajsen");
});


client.on("message", async message => {
  if (message.author.bot) return;

  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content
    .slice(config.prefix.length)
    .trim()
    .split(/ +/g);

  const command = args.shift().toLowerCase();

  if (command === "ping") {
    const m = await message.channel.send("Ping?");

    m.edit(
      `Pong! Latency is ${m.createdTimestamp -
        message.createdTimestamp}ms. API Latency is ${Math.round(
        client.ping
      )}ms`
    );
  }
if (command === "1337") {
  message.channel.send("Elite")
  
}
if (command === "say") {
    const sayMessage = args.join("What");

    message.delete().catch(O_o => {});

    message.channel.send(sayMessage);
  }

  if (command === "hello") {
    message.channel.send("Hello");
  }

  if (command === "corona") {
    message.channel.send("https://www.who.int/");
  }
  
  if (command === "news") {
  message.reply("Hello, I'm sorry but this command is not available yet. It is still under development. Thanks for your understanding.");
}
 

  if (command === "Info") {
    const Info = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Info")
      .setURL("https://discord.gg/xfgn5Dn")
      .setAuthor(
        "Pajsen Media Technoligy",
        "https://cdn.glitch.com/8891d324-5711-483a-8d40-94412399b2ff%2FScreen%20Shot%202020-04-26%20at%2019.27.01.png?v=1587922329258",
        "https://discord.gg/xfgn5Dn"
      )
      .setDescription("This is all the Info for the bot.")
      .setThumbnail("https://i.imgur.com/wSTFkRM.png")
      .addFields(
        {
          name: "Copyright Pajsen Media 2020",
          value: "Join our discord at: https://discord.gg/xfgn5Dn"
        },
        { name: "\u200B", value: "\u200B" },
        {
          name: "Join our discord at: https://discord.gg/xfgn5Dn",
          value: "\u200B",
          inline: true
        },
        { name: "Developed ", value: "\u200B", inline: true },
        { name: "Hello: Says hello to Anna", value: "\u200B", inline: true },
        {
          name: "Corona: Gives the lates news about the Covid-19 virus",
          value: "\u200B",
          inline: true
        }
      )
      .addField("Copyright 2020", "Pajsen Media", true)
      .setImage(
        "https://cdn.glitch.com/8891d324-5711-483a-8d40-94412399b2ff%2FScreen%20Shot%202020-04-26%20at%2019.27.49.png?v=1587922339842"
      )
      .setTimestamp()
      .setFooter(
        "This bot is made and owned by Pajsen Media Technoligy",
        "https://i.imgur.com/wSTFkRM.png"
      );
    message.channel.send(Info);
  }

  if (command === "help", "help0") {
    const Help = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Help")
      .setURL("https://discord.gg/xfgn5Dn")
      .setAuthor(
        "Pajsen Media Technoligy",
        "https://cdn.glitch.com/8891d324-5711-483a-8d40-94412399b2ff%2FScreen%20Shot%202020-04-26%20at%2019.27.01.png?v=1587922329258",
        "https://discord.gg/xfgn5Dn"
      )
      .setDescription("This is all the commands for the bot.")
      .setThumbnail("https://i.imgur.com/wSTFkRM.png")
      .addFields(
        {
          name: "Commands and Help",
          value: "Join our discord at: https://discord.gg/xfgn5Dn"
        },
        { name: "\u200B", value: "\u200B" },
        { name: "Help:", value: "\u200B", inline: true },
        {
          name: "Ping: checks AnnA's ping and latensy",
          value: "\u200B",
          inline: true
        },
        { name: "Hello: Says hello to Anna", value: "\u200B", inline: true },
        {
          name: "Corona: Gives the lates news about the Covid-19 virus",
          value: "\u200B",
          inline: true
        }
      )
      .addField("Copyright 2020", "Pajsen Media", true)
      .setImage(
        "https://cdn.glitch.com/8891d324-5711-483a-8d40-94412399b2ff%2FScreen%20Shot%202020-04-26%20at%2019.27.49.png?v=1587922339842"
      )
      .setTimestamp()
      .setFooter(
        "This bot is made and owned by Pajsen Media Technoligy",
        "https://cdn.glitch.com/8891d324-5711-483a-8d40-94412399b2ff%2FScreen%20Shot%202020-04-26%20at%2019.27.49.png?v=1587922339842"
      );
    message.channel.send(Help);
  }



 
 
});

client.login(config.token);
