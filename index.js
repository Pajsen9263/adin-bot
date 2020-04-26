const Discord = require("discord.js");
const client = new Discord.Client();

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
});

client.on("guildDelete", guild => {
  console.log("I have been removed from: ${guild.name} (id: ${guild.id})");

  client.user.setActivity("Made by Pajsen and Vindprogaming");
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

  if (command === "say") {
    const sayMessage = args.join(" what ");

    message.delete().catch(O_o => {});

    message.channel.send(sayMessage);
  }

  //Adin spez Commands :)

  if (command === "hello-adin") {
    message.channel.send("Hello");
  }

  if (command === "corona") {
    message.channel.send("Ono i dont like corona :face_vomiting:");
  }

  if (command === "ha") {
    message.channel.send(
      ":joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy: :joy: "
    );
  }

  if (command === "?") {
    message.channel.send("what????");
  }

  if (command === "!?") {
    message.channel.send("WHAT!!!!????");
  }

  if (command === "you-stupid") {
    const f = await message.channel.send("Stupid??? You BI***");

    f.edit("I'm not stupid");
  }

  //help

  if (command === "help") {
    const Help = new Discord.MessageEmbed()
      .setColor("#0099ff")
      .setTitle("Help")
      .setURL("https://discord.js.org/")
      .setAuthor(
        "Pajsen and Vindprogaming",
        "https://i.imgur.com/wSTFkRM.png",
        "https://discord.js.org"
      )
      .setDescription("This is all the commands for the bot.")
      .setThumbnail("https://i.imgur.com/wSTFkRM.png")
      .addFields(
        { name: "Regular field title", value: "Some value here" },
        { name: "\u200B", value: "\u200B" },
        { name: "Inline field title", value: "Some value here", inline: true },
        { name: "Inline field title", value: "Some value here", inline: true }
      )
      .addField("Inline field title", "Some value here", true)
      .setImage("https://i.imgur.com/wSTFkRM.png")
      .setTimestamp()
      .setFooter("Some footer text here", "https://i.imgur.com/wSTFkRM.png");

    message.channel.send(Help);
  }
});

client.login(config.token);
