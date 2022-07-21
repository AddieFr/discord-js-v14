const { EmbedBuilder } = require("discord.js"); 

module.exports = {
  name: "embed",
  permissions: ['SendMessages'],
  run: async (client, message, args, prefix, config) => {

    message.reply({ embeds: [
      new EmbedBuilder()
        .setDescription("Click above ")
        .setURL("https://github.com/remedyfn/Djs-v14")
        .setTitle("Hey i'm remedyfn this is discord js v14 bot!")
        .setColor("Red")
    ] })
    
  },
};
