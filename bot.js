const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot Durumu: ${client.user.tag} Aktif!`);
  
  client.user.setGame('Saçlarıyla')
});

client.on('message', message => {
  if (message.channel.name == undefined) {
    var kanal = client.channels.get("516692159664226305");
    kanal.send(` **Yazan :** \n ${message.author} \n **Yazdığı Mesaj :** \n ${message.content} \n **Bu Arkadaş sunucuda reklam yapıyor.** <@&496985754694844417> <@&510097526708502529> <@&480249685303492618> <@&509772567654170625>`);
  }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'bandashki') {
    msg.channel.sendMessage('blatata');
  }
});

client.on('message', message => {
  if (message.channel.name() === undefined) {
    let mesaj = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setAuthor(`${user.username}`)
      .setImage(user.displayAvatarURL)
      .setTimestamp()
client.channels.get("516692159664226305").send (`**Yazdığı Mesaj :** ${message.content}`);
  }
});

client.login(process.env.BOT_TOKEN);
