const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Returns with the bot ping"),

  /**
   *
   * @param {import("discord.js").Client<true>} client
   * @param {import("discord.js").ChatInputCommandInteraction<"cached">} interaction
   */

  async run(client, interaction) {
    interaction.reply(`Pong! The API ping is **${client.ws.ping}ms**`);
  },
};
