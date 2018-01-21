const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NDA0NzAwMTA3NTQwMzk4MDgw.DUZp5Q.1w6rIzlrhpUm5Nfibia4S3BCQRA'

client.on('ready', () => {
  console.log('I am online!');
});
// Guild Events
client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome-leave');
  if (!channel) return;
  channel.send(`Welcome to the server, ${member}`);
});
client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'welcome-leave');
  if (!channel) return;
  channel.send(`Bye bye, ${member} :wave:`);
});
// Guild Events
client.on('message', message => {
  if (message.content === '$ping') {
    message.channel.send(`My current ping is: \`${Date.now() - message.createdTimestamp} ms\``);
  }
});

client.on('message', message => {
  if (message.content === '$avatar') {
    message.reply(message.author.avatarURL);
  }
});
client.login(token);
