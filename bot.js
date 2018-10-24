const Discord = require('discord.js');
const client = new Discord.Client();

console.log("Welcome Again !");
 
 client.on("guildMemberRemove", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
لو سمحت طالبق طلب تكقا ادخل السيرفر
                               [https://discord.gg/Btkyrk] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`)
}).catch(console.error)

})
 
client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
سلام عليكم يا قلبي 
لو سمحت طالبق طلب تكقا ادخل السيرفر
                               [https://discord.gg/Btkyrk] 
الدعووة خاصة لك ي قلبي ... [ ${member}  ]
**`) 
}).catch(console.error)
})
client.login('NTA0NzM5MTU4NzUzOTM1Mzk5.DrJamw.QD9RlsDpj04dp3hQPk2FAYQKrkc');