const Logger = require("../modules/Logger");

module.exports = {
  name: "ready",
  execute(bot) {
    const serverCount = bot.formatNumber(bot.guilds.cache.size);
    const channelCount = bot.formatNumber(bot.channels.cache.size);
    const userCount = bot.formatNumber(bot.users.cache.size);
    const statuses = [
      ` ${serverCount} servers.`,
      `~help || ${channelCount} channels`,
      `${userCount} users`,
      "POGGERS",
      "Created by Epic#2077 and thanks to Rayr#8585",
      "~help",
      "join https://dsc.gg/forbidden",
    ];

    require("../helpers/unmuteHelper")(bot);
    require("../helpers/reminderHelper")(bot);

    Logger.log(
      "bot",
      `Bot is running with ${channelCount} channels, ${userCount} users and ${serverCount} servers`,
      `I'm ready`
    );
    setInterval(() => {
      const status = statuses[Math.floor(Math.random() * statuses.length)];
      bot.user.setActivity(status, { type: "WATCHING" });
    }, 60000);
  },
};
