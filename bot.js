const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'gumi') {
    msg.reply('Acılarımı bile tatlandırıyor aşkın. Yıkıma terkedilmiş kalemin bütün hücrelerine sürülmüş iksir gibisin. Gumi ♥');
  }
});

client.on('message', msg => {
  if (msg.content === 'Gumi') {
    msg.channel.sendMessage('Kalbinin en derin köşesindeyim♥ Gumiiiii♥');
  }
});

client.on('message', msg => {
  if (msg.content === 'samuray') {
    msg.channel.sendMessage('Ölü cesetlerin üstüne yazılmış şanım, tek gerçek var Gumi♥ ve katanam!');
  }
});

client.on('message', msg => {
  if (msg.content === 'Sa') {
    msg.reply('Aleykum selam, samuray!');
  }
});

client.login(process.env.BOT_TOKEN);
