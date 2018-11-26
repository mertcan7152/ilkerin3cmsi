const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Bot Durumu: ${client.user.tag} Aktif!`);
  
  client.user.setStatus('online').catch(console.error);

});

client.on('message', message => {
  if (message.channel.name == undefined) {
    var kanal = client.channels.get("516692159664226305");
    kanal.send(` **Yazan :** \n ${message.author} \n **Yazdığı Mesaj :** \n ${message.content} \n **Bu Arkadaş sunucuda reklam yapıyor.** <@332236158199398400> <@435927696325738506> <@266664611606953985> <@483996294822756372>`);
  }
});

client.on('message', msg => {
    if (msg.content.toLowerCase() === 'bandashki') {
    msg.channel.sendMessage('blatata');
  }
});

client.login(process.env.BOT_TOKEN);
