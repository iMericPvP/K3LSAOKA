const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '$'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(`$help | $inv | ${client.guilds.size} Servers `,"http://twitch.tv/Noobbot")
  console.log('')
  console.log('')
  console.log('╔[═════════════════════════════════════════════════════════════════]╗')
  console.log(`[Start] ${new Date()}`);
  console.log('╚[═════════════════════════════════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════════════════════════════]╗');
  console.log(`Logged in as * [ " ${client.user.username} " ]`);
  console.log('')
  console.log('Informations :')
  console.log('')
  console.log(`servers! [ " ${client.guilds.size} " ]`);
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log(`channels! [ " ${client.channels.size} " ]`);
  console.log('╚[════════════════════════════════════]╝')
  console.log('')
  console.log('╔[════════════]╗')
  console.log(' Bot Is Online')
  console.log('╚[════════════]╝')
  console.log('')
  console.log('')
});

client.login(process.env.BOT_TOKEN);





const jackeo = ['' , '452292328569307137' , '424313545421750274' , ''];
client.on('message', message => {
var prefix = "$";
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
    var argresult = message.content.split(` `).slice(1).join(' ');
      if (!jackeo.includes(message.author.id)) return;
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command === "ownerbotlol")  {
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **');
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "emb")    {
  if(!message.channel.guild) return message.reply('** __This command only for servers⛔__  **');
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor("RANDOM")
    message.channel.sendEmbed(say);
    message.delete();
  }


});



client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'bot')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Noobbot`)
      .addField('Servers | سيرفرات',`[** __${client.guilds.size}__ **]`,true)
      .addField('Users | مستخدمين',`[** __${client.users.size}__ **]`,true)
      .addField('Channels | رومات',`[** __${client.channels.size}__** ]`,true)
	  .addField('Language',`[** JS**]`,true)
	  .addField('Support Server | سيرفر السبورت',`[** __https://discord.gg/knNsyZ__ **]`,true)
	  .setFooter("NoobBot")  
      msg.channel.send({embed:embed});
    }
  });


client.on('message' , message => {
var prefix = "$"

if (message.author.bot) return;
if (message.content.startsWith(prefix + "contact")) {
if (!message.channel.guild) return;
let args = message.content.split(" ").slice(1).join(" ");
Client.users.get("452292328569307137").send(
    "\n" + "**" + "● السيرفر :" + "**" +
    "\n" + "**" + "» " + message.guild.name + "**" +
    "\n" + "**" + " ● المرسل : " + "**" +
    "\n" + "**" + "» " + message.author.tag + "**" +
    "\n" + "**" + " ● الرسالة : " + "**" +
    "\n" + "**" + args + "**")

let embed = new Discord.RichEmbed()
     .setAuthor(message.author.username, message.author.avatarURL)
     .setDescription('📬 تم ارسال الرسالة الى صاحب البوت بنجاح')
     .setThumbnail(message.author.avatarURL)
     .setFooter("NoobBot")
                                                

message.channel.send(embed);


}
    
});




client.on('message' , async (message) => {
 if (message.content.startsWith(prefix + 'say')) {
  const args = message.content.substring(prefix.length).split(' ');

 message.delete();
args.shift() 
let msg = args.join(' ') 
message.channel.createWebhook(message.author.username, message.author.avatarURL) 
    .then(wb => {
        const user = new Discord.WebhookClient(wb.id, wb.token) 
        user.send(msg); 
        user.delete() 
    })
    .catch(console.error)
 }
});







   client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help") {
         message.react('👌')
	 message.channel.send('**تم ارسالك في الخاص** :mailbox_with_mail: ');
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			-=- اوامر ادمنيه -=-
❖$ban @someone [reason] | اعطاء العضو باند
❖$kick @someone [reason] | اعطاء العضو كيك
❖$mute @someone [reason] | اعطاء العضو ميوت
❖$cc [number] | صنع رتب برقم
❖$unmute @someone [reason] | ازاله الميوت من العضو
❖$clear [number] | مسح الرسائل [NEW]
❖$role @someone [rank] | اعطاء رتبه لشخص 
❖$role all [rank]| اعطاء رتبه للكل
❖$role bots [rank]| اعطاء رتبه لكل البوتات
❖$role humans [rank] | اعطاء رتبه للبشريين
❖$roleremove @someone [rank] | ازاله الرتبه من شخص معين
❖$move @someone | سحب شخص الي روم [NEW]
❖$mutechannel | قفل الشات
❖$unmutechannel | فك منع الكتابه بلروم
`)
   message.author.sendEmbed(embed)
    
   }
   }); 

   	  client.on('message', message => {
        let args = message.content.split(" ").slice(1).join(" ")
        let men = message.mentions.users.first()
        if(message.content.startsWith(prefix + "roll")){
            if(!args) return message.channel.send("يجب كتابه رقم")
            message.channel.send(Math.floor(Math.random() * args))
        }
    });



client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			 -=- اوامر عامة -=-
❖$avatar @somone | صورتك او صوره الي منشنته
❖$server | معلومات السيرفر
❖$angaz | كتابه كلامك بصوره انجاز ماينكرفتي
❖$members | حالات الاعضاء
❖$serveravatar | صوره السيرفر
❖$inv | رابط اضافه البوت
❖$say [message] | تكرار كلامك ببوت بنفس صورتك واسمك
❖$support | رابط سيرفر السبورت
❖$day | تفاصيل اليوم
❖$cat | صور قطط
❖$dog | صور كلاب
❖$roll [number] | قرعه
❖$draw [message] | كتابه كلامك في صوره
❖$bot | معلومات البوت
❖$ranks | يعرض لك الرتب الي بلسيرفر 
❖$user | وقت صنع حسابك ودخولك السيرفر
❖$id | معلومات حسابك
❖$stim | منبه
`)
   message.author.sendEmbed(embed)
    
   }
   }); 
   
   
      client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			-=- الترحيب -=- [NEW]
❖$setWlc style [text, embed, image] | تغيير ستايل الترحيب [NEW]
❖$setWlc channel #channel_name | تغير روم الترحيب [NEW]
❖$setWlc message [message] | تغير رساله الترحيب [NEW]
`)
   message.author.sendEmbed(embed)
    
   }
   }); 


client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			 -=- اوامر بورد كاست -=-
❖$bc [message] | بورد كاست للكل و مطور
❖$2bc [message] | بورد كاست للكل غير مطور
❖$3bc [message] | بورد كاست للونلاين فقط و غير مطور
❖$user-bc @someone [message] | رساله لشخص واحد 
❖$role-bc @rank [message] | رساله لكل من يملك الرتبه الممشنه
`)
   message.author.sendEmbed(embed)
    
   }
   }); 
   
      client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			 -=- العاب -=-
❖$rps [ورقة - مقص - حجر] 
❖$hack @somone | لعبه الهكر مع ذكر اسمك للي هكرته
❖$hac-2 @some
❖$لعبه اعلم | اعلم
❖$لعبه اموجي | ايموجي
❖$لعبه ماينكرفت | ماينكرفت
❖$لعبه عواصم | عواصم
❖$لعبه فكك | فكك
`)
   message.author.sendEmbed(embed)
    
   }
   }); 



client.on('message', message => {
    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField(' » الرسالة : ', args)
            .addField(' » سيرفر : ', message.guild.name)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});




client.on('message', message => {
if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + '2bc') {
if(!message.channel.guild) return message.reply('**:x: اسف لكن هذا الامر للسيرفرات فقط **');         
if (!args[1]) {
return;
}
  message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
      var bc = new Discord.RichEmbed()
      .addField('args')
      .setThumbnail(message.guild.iconURL)
      .setColor('RANDOM')
      m.sendMessage(args)
  });
         if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply(":x: **ليس لديك صلاحية للنشر هنا**");
  const AziRo = new Discord.RichEmbed()   
  .setColor('RANDOM')
  message.channel.sendEmbed(AziRo);          
}
} else {
  return;
}
});




client.on("message", message => {

            if (message.content.startsWith(prefix + "3bc")) {
                         if (!message.member.hasPermission("ADMINISTRATOR"))  return;
  let args = message.content.split(" ").slice(1);
  var argresult = args.join(' '); 
  message.guild.members.filter(m => m.presence.status !== 'offline').forEach(m => {
 m.send(`${argresult}\n ${m}`);
})
 message.channel.send(`\`${message.guild.members.filter(m => m.presence.status !== 'online').size}\` : عدد الاعضاء المستلمين`); 
 message.delete(); 
};     
});




      client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			 :musical_note:  موسيقي :musical_note: 
قريبا
`)
   message.author.sendEmbed(embed)
    
   }
   }); 
   
         client.on("message", message => {
	var prefix = "$";
 if (message.content === "$help") {
  const embed = new Discord.RichEmbed() 
      .setColor("#000000")
      .setDescription(`
			 :information_source:  معلومات البوت :information_source: 
❖مطورين البوت |  『LB』 Mohamed192837465#7033 
❖لغه البوت | JS
❖رابط البوت | https://discordapp.com/oauth2/authorize?client_id=472111075114876968&permissions=2080374975&scope=bot
❖سيرفر السبورت | https://discord.gg/knNsyZd
`)
   message.author.sendEmbed(embed)
    
   }
   }); 

   
   
   
   client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**You Don't Have ` BAN_MEMBERS ` Permission**");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**I Don't Have ` BAN_MEMBERS ` Permission**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**اسم | Name**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل | By**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب | Reason**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});





client.on('message', message => {
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك صلاحيات**");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**انا لا املك صلاحيات**");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  /*let b5bzlog = client.channels.find("name", "5bz-log");
  if(!b5bzlog) return message.reply("I've detected that this server doesn't have a 5bz-log text channel.");*/
  if (message.mentions.users.size < 1) return message.reply("**منشن شخص**");
  if(!reason) return message.reply ("**اكتب سبب الطرد**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**لايمكنني طرد شخص اعلى من رتبتي يرجه اعطاء البوت رتبه عالي**");

  message.guild.member(user).kick(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`Kicked!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**اسم | Name**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**من قبل | By**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**السبب | Reason**", '**[ ' + `${reason}` + ' ]**')
  message.channel.send({
    embed : banembed
  })
}
});





client.on('message', message => {   
if (message.author.boss) return;
var prefix = "$";
if (!message.content.startsWith(prefix)) return;
let command = message.content.split(" ")[0];
command = command.slice(prefix.length);
let args = message.content.split(" ").slice(1);
if (command == "mute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انت لا تملك صلاحيات !! ").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).addRole(muteRole);
const muteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`Muted!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**اسم | Name**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**من قبل | By**", '**[ ' + `${message.author.tag}` + ' ]**',true)
.addField("**السبب | Reason**", '**[ ' + `${reason}` + ' ]**',true)
message.channel.send({embed : muteembed});
var muteembeddm = new Discord.RichEmbed()
.setAuthor(`Muted!`, user.displayAvatarURL)
.setDescription(`
انت معاقب بميوت! 
 ${message.author.tag} من قبل
[ ${reason} ] السبب
`)
.setFooter(`في سيرفر : ${message.guild.name}`)
.setColor("RANDOM")
 user.send( muteembeddm);
}
if (command == "unmute") {
if (!message.channel.guild) return;
if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.reply("انتا لا تملك صلاحيات").then(msg => msg.delete(5000));
if(!message.guild.member(client.user).hasPermission("MANAGE_MESSAGES")) return message.reply("البوت لايملك صلاحيات ").then(msg => msg.delete(5000));;
let user = message.mentions.users.first();
let muteRole = message.guild.roles.find("name", "Muted");
if (!muteRole) return message.reply("** لا يوجد رتبة الميوت 'Muted' **").then(msg => {msg.delete(5000)});
if (message.mentions.users.size < 1) return message.reply('** يجب عليك المنشن اولاً **').then(msg => {msg.delete(5000)});
let reason = message.content.split(" ").slice(2).join(" ");
message.guild.member(user).removeRole(muteRole);
const unmuteembed = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setThumbnail(user.displayAvatarURL)
.addField("**اسم | Name**",  '**[ ' + `${user.tag}` + ' ]**',true)
.addField("**من قبل | By**", '**[ ' + `${message.author.tag}` + ' ]**',true)
message.channel.send({embed : unmuteembed}).then(msg => msg.delete(5000));
var unmuteembeddm = new Discord.RichEmbed()
.setDescription(`تم فك الميوت عنك ${user}`)
.setAuthor(`UnMute!`, user.displayAvatarURL)
.setColor("RANDOM")
  user.send( unmuteembeddm);
}
});


client.on('message', msg => {
	var prefix = "$";
  if (msg.author.bot) return;
  if (!msg.content.startsWith(prefix)) return;
  let command = msg.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = msg.content.split(" ").slice(1);

    if(command === "clear") {
        const emoji = client.emojis.find("name", "wastebasket")
    let textxt = args.slice(0).join("");
    if(msg.member.hasPermission("MANAGE_MESSAGES")) {
    if (textxt == "") {
        msg.delete().then
    msg.channel.send("***يجب كتابه رقم`***").then(m => m.delete(3000));
} else {
    msg.delete().then
    msg.delete().then
    msg.channel.bulkDelete(textxt);
        msg.channel.send("```تم مسح: " + textxt + "\n رسائل```").then(m => m.delete(3000));
        }    
    }
}
});




client.on('message', message => { 
    if (message.content.startsWith(prefix + 'ranks')) {

        const Rank = message.guild.roles.map(e => e.toString()).join(" ");

        const RankList = new Discord.RichEmbed()
            .setTitle('➠ Roles.') 
            .setAuthor(message.guild.name, message.guild.iconURL) 
            .setColor('RANDOM') 
            .setDescription(Rank) 
            .setFooter(message.guild.name) 
        message.channel.send(RankList) 
    }
});


client.on("message", message => {
	var args = message.content.split(' ').slice(1); 
	var msg = message.content.toLowerCase();
	if( !message.guild ) return;
	if( !msg.startsWith( prefix + 'role' ) ) return;
	if( msg.toLowerCase().startsWith( prefix + 'roleremove' ) ){
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد سحب منه الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد سحبها من الشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().removeRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم سحب من **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.removeRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.removeRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم سحب من البشريين رتبة**');
		} 	
	} else {
		if( !args[0] ) return message.reply( '**:x: يرجى وضع الشخص المراد اعطائها الرتبة**' );
		if( !args[1] ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );
		var role = msg.split(' ').slice(2).join(" ").toLowerCase(); 
		var role1 = message.guild.roles.filter( r=>r.name.toLowerCase().indexOf(role)>-1 ).first(); 
		if( !role1 ) return message.reply( '**:x: يرجى وضع الرتبة المراد اعطائها للشخص**' );if( message.mentions.members.first() ){
			message.mentions.members.first().addRole( role1 );
			return message.reply('**:white_check_mark: [ '+role1.name+' ] رتبة [ '+args[0]+' ] تم اعطاء **');
		}
		if( args[0].toLowerCase() == "all" ){
			message.guild.members.forEach(m=>m.addRole( role1 ))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء الكل رتبة**');
		} else if( args[0].toLowerCase() == "bots" ){
			message.guild.members.filter(m=>m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البوتات رتبة**');
		} else if( args[0].toLowerCase() == "humans" ){
			message.guild.members.filter(m=>!m.user.bot).forEach(m=>m.addRole(role1))
			return	message.reply('**:white_check_mark: [ '+role1.name+' ] تم اعطاء البشريين رتبة**');
		} 
	} 
});


client.on('guildCreate', guild => {
  var embed = new Discord.RichEmbed()
  .setColor(0x5500ff)
  .setDescription(`**شكرا لك لي اضافتي لي سيرفرك :heart: ويارب يفيدك وعليشان تعرف اوامره اكتب $help**`)
      guild.owner.send(embed)
});




client.on('message', message => {
	var prefix = "$";
if(!message.channel.guild) return;
if(message.content.startsWith(prefix + 'move')) {
 if (message.member.hasPermission("MOVE_MEMBERS")) {
 if (message.mentions.users.size === 0) {
 return message.channel.send("``عليك كتابه $move @somone``")
}
if (message.member.voiceChannel != null) {
 if (message.mentions.members.first().voiceChannel != null) {
 var authorchannel = message.member.voiceChannelID;
 var usermentioned = message.mentions.members.first().id;
var embed = new Discord.RichEmbed()
 .setTitle("Succes!")
 .setColor("#000000")
 .setDescription(`تم سحب <@${usermentioned}> الي رومك الصوتي!`)
var embed = new Discord.RichEmbed()
.setTitle(`تم سحبك الي روم ثاني في سيرفر ${message.guild.name}`)
 .setColor("RANDOM")
.setDescription(`**<@${message.author.id}> تم سحبك الي روم صوتي اخر**`)
 message.guild.members.get(usermentioned).setVoiceChannel(authorchannel).then(m => message.channel.send(embed))
message.guild.members.get(usermentioned).send(embed)
} else {
message.channel.send("``لا تستطيع سحب "+ message.mentions.members.first() +" `يجب ان يكون هذه العضو في روم صوتي`")
}
} else {
 message.channel.send("**``يجب ان تكون في روم صوتي لكي تقوم بسحب العضو أليك``**")
}
} else {
message.react("❌")
 }}});
   
   
   
   
   client.on('message', message => {

    if (message.content === "$mutechannel") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**انا لا املك صلاحيات**");
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }
//Mohamed192837465
if (message.content === "$unmutechannel") {
    if(!message.channel.guild) return message.reply(' This command only for servers');
  if(!message.guild.member(client.user).hasPermission("MANAGE_CHANNELS")) return message.reply("**انا لا املك صلاحيات**");
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }



});




client.on('message', message => {
    if (message.content.startsWith("$avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});










client.on('message', function(msg) {
    if(msg.content.startsWith (prefix  + 'server')) {
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .setTitle(`Noobbot`)
      .addField('عدد الرتب',`[** __${msg.guild.roles.size}__ **]`,true)
      .addField('عدد الاعضاء',`[** __${msg.guild.memberCount}__ **]`,true)
      .addField('الرومات الكتابيه',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
      .addField('الرومات الصوتيه',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
	  .addField('اونر السيرفر',`[** __${msg.guild.owner}__ **]`,true)
      .addField('صنع السيرفر في',msg.guild.createdAt.toLocaleString())
	  .setFooter("لكي تعرف حالات الاعضاء  قم بكتابه $members | لكي تعرف ماهي رتب السيرفر قم بكتابه $ranks")  
      msg.channel.send({embed:embed});
    }
  });

   
   
   const sql = require("sqlite");
client.on("message", async message => {
    if (message.content.startsWith(prefix + "angaz")) {
         var ids = [
            "20",
            "1",
            "13",
            "18",
            "17",
            "9",
            "31",
            "22",
            "23",
            "2",
            "11",
            "19",
            "24",
            "25",
            "12",
            "33"
            ]
            const randomizer = Math.floor(Math.random()*ids.length);
            const args = message.content.split(" ").slice(1).join(" ")
    if (!args) return message.channel.send("**اكتب وش تبي يكون بلانجاز**");
    const image = new Discord.Attachment(`https://www.minecraftskinstealer.com/achievement/a.php?i=${ids[randomizer]}&h=Achievement Get!&t=${args}`, "achievement.png");
message.channel.send(image)
	}
});
   
   

   
   
         client.on('message',function(message) {
  if (message.author.bot) return;


                  if(!message.channel.guild) return;

                    if (message.content === prefix + "members") {
 const embed = new Discord.RichEmbed()

    .setDescription(`**Members info ✨
 اونلاين:   ${message.guild.members.filter(m=>m.presence.status == 'online').size}
  حاله حمراء       ${message.guild.members.filter(m=>m.presence.status == 'dnd').size}
  حاله صفراء:     ${message.guild.members.filter(m=>m.presence.status == 'idle').size}
  الاوفلاين:     ${message.guild.members.filter(m=>m.presence.status == 'offline').size}
   عدد الاعضاء:  ${message.guild.memberCount - message.guild.members.filter(m=>m.user.bot).size}
 البوتات: ${message.guild.members.filter(m=>m.user.bot).size} **`)
         message.channel.send({embed});

    }
      }); 
	  
	  
	  

   
   
   
   client.on("message", message => {    
    if(!message.channel.guild) return;
if(message.author.bot) return;
if(message.content === "$serveravatar"){ 
    const embed = new Discord.RichEmbed()

.setTitle(`**NoobBot**`)
.setAuthor(message.author.username, message.guild.iconrURL)
.setColor('RANDOM')
.setImage(message.guild.iconURL)

message.channel.send({embed});
}
});



client.on('message', message => {
  if(message.content === '$support') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discord.gg/knNsyZd')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});


client.on('message', message => {
  if(message.content === '$inv') {
  const embed = new Discord.RichEmbed()
  .setTitle('Click here')
  .setURL('https://discordapp.com/oauth2/authorize?client_id=472111075114876968&permissions=2080374975&scope=bot')
  .setColor('RANDOM')
  message.channel.send({embed: embed});
  }
});


client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'day')) {
var today = new Date()
let Day = today.toString().split(" ")[0].concat("day");
let Month = today.toString().split(" ")[1]
let Year = today.toString().split(" ")[3]
message.channel.send(`\`${Day}\` \`${Month}\` \`${Year}\`\n\`Time of day:\` \`${today.toString().split(" ")[4]}\``)
}
}); 



client.on('message', message => {
    var prefix = "$"
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") {
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});


client.on('message', ra3d => {
var prefix = "$";
                        let args = ra3d.content.split(" ").slice(1).join(" ")
if(ra3d.content.startsWith(prefix + 'cc')) {
    if(!args) return ra3d.channel.send('`يرجا عليك كتابه رقم الالوان`');
             if (!ra3d.member.hasPermission('MANAGE_ROLES')) return ra3d.channel.sendMessage('`**⚠ | `[MANAGE_ROLES]` لا يوجد لديك صلاحية**'); 
              ra3d.channel.send(`**✅ |تم صنع __${args}__ الوان**`);
                  setInterval(function(){})
                    let count = 0;
                    let ecount = 0;
          for(let x = 1; x < `${parseInt(args)+1}`; x++){
            ra3d.guild.createRole({name:x,
              color: 'RANDOM'})
              }
            }
       });
	   
	   
var moment = require("moment");
client.on('message', message => {
  var prefix = '$';
  
  if (message.content.startsWith(prefix + "user")) {
  if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);
   message.guild.fetchInvites().then(invs => {
      let member = client.guilds.get(message.guild.id).members.get(message.author.id);
      let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
      let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
      var moment = require('moment');
      var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
 var heg;
 if(men) {
     heg = men
 } else {
     heg = message.author
 }
var mentionned = message.mentions.members.first();
  var h;
 if(mentionned) {
     h = mentionned
 } else {
     h = message.member
 }
moment.locale('ar-TN');
      var id = new  Discord.RichEmbed()
    .setColor("!0a0909")
    .setAuthor(message.author.username, message.author.avatarURL) 
.addField('تاريخ صنع الحساب:', `${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} **\n** \`${moment(heg.createdTimestamp).fromNow()}\`` ,true) 
.addField('وقت دخولك السيرفر:', `${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')} \n \`${moment(h.joinedAt).fromNow()}\``, true)
.setFooter("Noobbot")  
    message.channel.sendEmbed(id);
})
}       
});



const Canvas = require("canvas")
const fs = require("fs")
const jimp = require("jimp")

let sw = JSON.parse(fs.readFileSync("./setWlc.json", "UTF8"))

 

    client.on('message', message => {


 

        let mothed = ['text', 'embed', 'image'];

        let sets = message.content.split(" ").slice(1).join(" ")

        let style = message.content.split(" ").slice(2).join(" ")

        let stym = message.content.split(" ").slice(3).join(" ")

        let msz = message.content.split(" ").slice(2).join(" ")

        let cha = message.content.split(" ").slice(2).join(" ")

        let r = message.content.split(" ").slice(4).join(" ")

 

 

        if(message.content.startsWith(prefix + "setWlc")) {

    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**تحتاج صلاحيه**")

            if(!sw[message.guild.id]) sw[message.guild.id] = {

                cha: "welcome",

                msz: "Welcome Bro",

                styler: "text"

            };

 

            if(!sets) {

                message.channel.send(`**للستخدام:
            ${prefix}setWlc style <text, image, embed>
            ${prefix}setWlc msg <message>
            ${prefix}setWlc channal <channel name>**`)

            }

 

            if(!mothed) {

                message.channel.send(`**للستخدام: ${prefix}setWlc style <text, imgae, embed>**`)

            }

 

            if(message.content === prefix + 'setWlc style image') {

                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**تحتاج صلاحيه MANAGE_CHANNELS**")

                sw[message.guild.id].styler = 'image'

                message.channel.send(`**تم تغير الي ${sw[message.guild.id].styler}**`)

            }

 

            if(message.content === prefix + 'setWlc style embed') {

                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**تحتاج صلاحيه MANAGE_CHANNELS**")

                 sw[message.guild.id].styler = 'embed'

                message.channel.send(`**تم تغير الي ${sw[message.guild.id].styler}**`)            }

 

            if(message.content === prefix + 'setWlc style text') {

                if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**تحتاج صلاحيه MANAGE_CHANNELS**")

                 sw[message.guild.id].styler = 'text'

                message.channel.send(`**تم تغير الي  ${sw[message.guild.id].styler}**`)

            }

 

        }

 

        if(message.content.startsWith(prefix + "setWlc msg")) {

            if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("**تحتاج صلاحيه MANAGE_CHANNELS**")

            if(!msz) {

                message.channel.send("للستخدام: $setWlc msg <message>")

            } else {

                message.channel.send(`**تم تغير الي __${msz}__**`)

                sw[message.guild.id].msk = msz

            }

        }

 

        if(message.content.startsWith(prefix + "setWlc channel")) {

            if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send("**تحتاج صلاحيه MANAGE_CHANNELS**")

            if(!ch) {

                message.channel.send("للستخدام: $setWlc channel <channel name>")

            }

            let chn = message.guild.channels.find("name", ch)

            if(!chn) {

                message.channel.send("**لا ينكنني ان ارا هذه الروم**")

            }

            else {

                 sw[message.guild.id].cha = chn.name

                 message.channel.send(`**تم تغير الي __${chn.name}__**`)

                 }

        }

 

        fs.writeFile('./setWlc.json', JSON.stringify(sw), (err) => {

if (err) console.error(err);

})

})

 

 

client.on('guildMemberAdd', member => {

    let channel = member.guild.channels.find("name", sw[member.guild.id].cha)

 

    if(sw[member.guild.id].styler === "text") {

        channel.sendMessage(`<@${member.user.id}>, ${sw[member.guild.id].msk}`)

    }

 

    if(sw[member.guild.id].styler === "embed") {

 

        const embed = new Discord.RichEmbed()

        .setTitle("Member joind.")

        .setColor("GREEN")

        .setThumbnail(member.user.avatarURL)

        .setDescription(`**${sw[member.guild.id].msk}**`)

        .addField("**Member name**", `[<@${member.user.id}>]`,true)

        .addField("**Now we are**", `[${member.guild.memberCount}]`,true)

        channel.sendMessage(`<@${member.user.id}>`)

        channel.sendEmbed(embed)

    }

 

    if(sw[member.guild.id].styler === "image") {

        if (member.user.bot) return;

const w = ['./setwelcome.png'];

        let Image = Canvas.Image,

            canvas = new Canvas(749, 198),

            ctx = canvas.getContext('2d');

        ctx.patternQuality = 'bilinear';

        ctx.filter = 'bilinear';

        ctx.antialias = 'subpixel';

        ctx.shadowColor = 'rgba(0, 0, 0, 0.4)';

        ctx.shadowOffsetY = 2;

        ctx.shadowBlur = 2;

        ctx.stroke();

        ctx.beginPath();

 

        fs.readFile(`${w[Math.floor(Math.random() * w.length)]}`, function (err, Background) {

            if (err) return console.log(err);

            let BG = Canvas.Image;

            let ground = new Image;

            ground.src = Background;

            ctx.drawImage(ground, 0, 0, 749, 198);

 

})

 

                let url = member.user.displayAvatarURL.endsWith(".webp") ? member.user.displayAvatarURL.slice(5, -20) + ".png" : member.user.displayAvatarURL;

                jimp.read(url, (err, ava) => {

                    if (err) return console.log(err);

                    ava.getBuffer(jimp.MIME_PNG, (err, buf) => {

                 if (err) return console.log(err);

 

ctx.font = '35px Aeland';

                        ctx.fontSize = '40px';

                        ctx.fillStyle = "#FFFFFF";

                        ctx.textAlign = "center";


 

                        //ur name

                        ctx.font = '40px Impact';

                        ctx.fontSize = '48px';

                        ctx.fillStyle = "#FFFFFF";

                        ctx.textAlign = "center";

                        ctx.fillText(member.user.username, 420, 100);

 

                         ctx.font = '30px Impact';

                        ctx.fontSize = '20px';

                        ctx.fillStyle = "#FFFFFF";

                        ctx.textAlign = "center";

                        ctx.fillText(sw[member.guild.id].msk, 410, 170);

 

 

                        //Avatar

                        let Avatar = Canvas.Image;

                              let ava = new Avatar;

                              ava.src = buf;

                              ctx.beginPath();

                              ctx.arc(115, 100, 90, 0, Math.PI*2);

                                 ctx.closePath();

                                 ctx.clip();

                                 ctx.drawImage(ava, 5, 5, 200, 200);

              
 
        channel.sendFile(canvas.toBuffer())

 

 

 

})

})

 

    }

 

})
var dat = JSON.parse("{}");
function forEachObject(obj, func) {
    Object.keys(obj).forEach(function (key) { func(key, obj[key]) });
}
client.on("ready", () => {
    var guild;
    while (!guild)
        guild = client.guilds.get("398497261635764224");
    guild.fetchInvites().then((data) => {
        data.forEach((Invite, key, map) => {
            var Inv = Invite.code;
            dat[Inv] = Invite.uses;
        });
    });
});


   const ms = require("ms");
client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'stim')) {
         let args = message.content.split(" ").slice(1);
let Timer = args[0];
if(!args[0]){
  return message.channel.send("يجب كتابه الفتره الزمنيه");
}
if(args[0] <= 0){
  return message.channel.send("يجب كتابه الفتره الزمنيه");
}
message.channel.send("تم" + `${ms(ms(Timer), {long: true})}`)

setTimeout(function(){
  message.channel.send(`الوقت انتها, ${ms(ms(Timer), {long: true})}` + message.author.toString())
}, ms(Timer));
} 
})
   
  client.on('message', message => {
     if(message.content.startsWith(prefix + "user-bc")) {
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("UserBC", `تبي من يجيه الرساله؟ ${message.author.tag}?`)
            .setFooter(`NoobBot`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("UserBC", `تبي الرساله وش؟ ${user.tag}?`)
        return message.channel.send({embed});
    }
    embed.addField("UserBC", `تم بنجاح`)
        .setFooter(`Noob Bot `);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("جاتك رساله", `**${reason}**`)
        .setFooter(`من ${message.author.tag}.`);
    user.send({embed: embed1});
}
});



  





























const devs = ['452292328569307137','424313545421750274'];
const adminprefix = "$$"


client.on('message', message => {
      if (!devs.includes(message.author.id)) return;
  if (message.content.startsWith(adminprefix + 'bcallforholl')) {
    if (!devs.includes(message.author.id)) return; 
let args = message.content.split(' ').slice(1).join(' ');

message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}});


 




client.on('message', message => {
     if(message.content.startsWith(prefix + "hack")) {
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("Hacker", `تبي تهكر من؟`)
            .setFooter(`Noobbot`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("Hacker", `اكتبله شيء قبل لا تهكره`)
        return message.channel.send({embed});
    }
    embed.addField("Hacker", `تم بنجاح ${user.tag}!`)
        .setFooter(`Noobbot`);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("NoobBot", `تم تهكيرك يا نوب`)
		.addField("الهكر كتب لك", `**${reason}**`)
        .setFooter(`من ${message.author.tag}.`);
    user.send({embed: embed1});
}
});



client.on('message', message => {
     if(message.content.startsWith(prefix + "hac-2")) {
 let args = message.content.split(" ").slice(1);

    var user = message.mentions.users.first();
    var reason = args.slice(1).join(' ');
    const embed = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp();

    if (!user) {
        embed.addField("Hacker", `تبي تهكر من؟`)
            .setFooter(`Noobbot`);
        return message.channel.send({embed});
    } if (!reason) {
        embed.addField("Hacker", `اكتبله شيء قبل لا تهكره`)
        return message.channel.send({embed});
    }
    embed.addField("Hacker", `تم بنجاح ${user.tag}!`)
        .setFooter(`Noobbot`);
    message.channel.send({embed});
    const embed1 = new Discord.RichEmbed()
        .setColor(0xFFB200)
        .setTimestamp()
        .addField("Noobbot", `تم تهكيرك يا نوب`)
		.addField("الهكر قالك", `**${reason}**`)
        .setFooter(`الهكر غير معروف`);
    user.send({embed: embed1});
}
});









 
                  






   
   

   
   
   




client.on("message", message => {
      if (message.content === "$ping") {
      const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('**Pong!:**' , `${Date.now() - message.createdTimestamp}` + ' ms')
  message.channel.sendEmbed(embed);
    }
});















 













































client.on('message' , message => {
  var prefix = "$";
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "role-bc")) {
    let args = message.content.split(" ").slice(1);

    if(!args[0]) {
      message.channel.send("قم بمنشنه رتبه معينه");
        return;
    }

      if(args[0] == "@everyone") {
        message.channel.send(`لقد تم ارسال هذه الرسالة الى ${message.guild.memberCount} اعضاء`);
        message.guild.members.forEach(mi => {
          mi.send(
          "الرسالة :" + "\n" +
         "**" + `${args[1]}` + "**"
          );
        });
        return;
      }
          var role = message.mentions.roles.first();
            if(!role) {
              message.reply("يرجا كتابه اسم رتبه موجوده");
                return;
            }
        message.guild.members.filter(m => m.roles.get(role.id)).forEach(sa => {
        sa.send(
          "الرساله :" + "\n" +
        "**" + `${args[1]}` + "**"
          );
        });
      message.channel.send(`**لقد تم ارسال هذه الرسالة الى ${message.guild.members.filter(m => m.roles.get(role.id)).size} عظو**`);
    }
});












	
	

	
	
	
	

client.on('message',  (message) => {
        if(message.content.startsWith('$punch')) {
  let user = message.mentions.users.first();
  if (!user) {
    /**
     * The command was ran with invalid parameters.
     * @fires commandUsage
     */
     return message.emit('commandUsage', message, this.help);
 }

  let punches = [
    'https://i.giphy.com/media/iWEIxgPiAq58c/giphy.gif',
    'https://i.giphy.com/media/DViGV8rfVjw6Q/giphy.gif',
    'https://i.giphy.com/media/GoN89WuFFqb2U/giphy.gif',
    'https://i.giphy.com/media/xT0BKiwgIPGShJNi0g/giphy.gif',
    'https://i.giphy.com/media/Lx8lyPHGfdNjq/giphy.gif',
	'https://media.giphy.com/media/l0Iyey3m9aNlZs5i0/giphy.gif',
	'https://media.giphy.com/media/26xBPQU5sWj6KvDqM/giphy.gif',
	'https://media.giphy.com/media/3o6ZtrxkK4jLkmn8He/giphy.gif'
  ];

  message.channel.send({
    embed: {
      description: `اخذ كف ${user.username}! 👊`,
      image: {
        url: punches[Math.floor(Math.random() * punches.length)]
      }
    }
  }).catch(e => {
    client.log.error(e);
  })
        }  
});





client.on('message' , async (message) => {
       if(message.content.startsWith(`$rps حجر`)) {
              
 let responses = [
        'انا اخترت ورقة وانا فزت',
        'انا اخترت مقص وانا خسرت',
        'انا اخترت حجر وهو تعادل',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});





client.on('message' , async (message) => {
       if(message.content.startsWith(`$rps مقص`)) {
              
 let responses = [
        'انا اخترت ورقة وانا خسرت',
        'انا اخترت مقص وهو تعادل',
        'انا اخترت حجر وانا فزت',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});












client.on('message' , async (message) => {
       if(message.content.startsWith(`$rps ورقة`)) {
              
 let responses = [
        'انا اخترت ورقة وهاذا تعادل',
        'انا اخترت حجر وانا خسرت ',
        'انا اخترت مقص وانا فزت',
    ]
    
    // Fetch a random item from the array
    let fetched = responses[Math.floor(Math.random() * responses.length)];
   message.reply(fetched)
       }
  
});







  client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'cat')) {

    
    const {body} = await superagent
  .get(`http://aws.random.cat/meow`);

  const catembed = new Discord.RichEmbed()
  .setColor("#7289DA")
  .setTitle("Cat | قطه")
  .setImage(body.file);
    
 message.channel.send(catembed);

}
}); 
  
  

  const superagent = require('superagent')
client.on('message' , async (message) => {
    if (message.content.startsWith(prefix + 'dog')) {

    
    const { body } = await superagent
    .get('https://dog.ceo/api/breeds/image/random');
    const embed = new Discord.RichEmbed()
    .setColor(0x954D23)
    .setTitle("Dog | كلب")
    .setImage(body.message)
    message.channel.send({embed})
    


}
}); 
  
  
  
  
  
  
  
  
  









client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'اعلم')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./a3lm/a3lm.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const answer = item.answers
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("اعلم  | NoobBot", 'https://cdn.discordapp.com/attachments/462239154630164511/477536845777993728/NOOB_BOT_1.png')
    .setDescription(`** ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //حقوق discord.jpei

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: لم يقم احد بكتابه الجواب الصحيحه في الوقت المناسب`);
            console.log(`[Typing] علم  `);
          })
        })
    })
}
});




client.on('message', message => {
    if (!points[message.author.id]) points[message.author.id] = { 
        points: 0,
      };
    if (message.content.startsWith(prefix + 'ايموجي')) { 
        if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));
    
    const type = require('./emoje/emoje.json'); 
    const item = type[Math.floor(Math.random() * type.length)]; 
const answer = item.answers
    const filter = response => { 
        return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
    };
   message.channel.send({embed: new Discord.RichEmbed().setTitle('لديك ثانيه للاجابه بالجواب الصحيح').setThumbnail(`${item.type}`)}).then(function(m) {
             setTimeout(function() {
m.edit({embed: new Discord.RichEmbed().setTitle('لديك 15 ثانيه للاجابه بالجواب الصحيح').setThumbnail('https://images-ext-2.discordapp.net/external/lLOYcLfSQaNo_5Ex0I-gBD5lIW-FfRXO-W_-ZxSpYLA/https/i.imgur.com/iReHvIZ.png?width=100&height=100')})
             }, 1000)
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
            .then((collected) => {
            message.channel.send(`${collected.first().author} ✅ **لقد قمت بكتابة الايموجي بالوقت المناسب**`);
            console.log(`[Game] ${collected.first().author} Answered with the correct answer`);
                let won = collected.first().author;
                points[won.id].points++;
              })
              .catch(collected => { 
                message.channel.send(`:x: لم يقم احد بكتابه الاجابه الصحيحه في الوقت المناسب`);
                console.log(`[Game] ماحد قال الاجابه`);
                    })
            })
    }
    });




client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'رياضيات')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./read/read.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const answer = item.answers
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("رياضيات  | NoobBot", 'https://cdn.discordapp.com/attachments/462239154630164511/477536845777993728/NOOB_BOT_1.png')
    .setDescription(`** ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: لم يقم احد بكتابه الاجابه الصحيحه في الوقت المناسب`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});


client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'ماينكرفت')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./minecraft/minecraft.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const answer = item.answers
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("ماينكرفت  | NoobBot", 'https://cdn.discordapp.com/attachments/462239154630164511/477536845777993728/NOOB_BOT_1.png')
    .setDescription(`** ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: لم يقم احد بكتابه الجواب الصحيح في الوقت المناسب`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});


client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'عواصم')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./3wasem/3wasem.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const answer = item.answers
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**اديك 15 ثاني�� لتوجد العاصمه الصحيحه**').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("عواصم  | NoobBot", 'https://cdn.discordapp.com/attachments/462239154630164511/477536845777993728/NOOB_BOT_1.png')
    .setDescription(`**اكتب عاصمه: ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: لم يقم احد بكتابه الاجابه الصحيحه في الوقت المناسب`);
            console.log(`[Typing] ماحد قال الاجابه `);
          })
        })
    })
}
});

let points = JSON.parse(fs.readFileSync('./Points.json', 'utf8'));
client.on('message', message => {
if (!points[message.author.id]) points[message.author.id] = {
    points: 50,
  };
if (message.content.startsWith(prefix + 'فكك')) { 
    if(!message.channel.guild) return message.reply('**هذا الأمر للسيرفرات فقط**').then(m => m.delete(3000));

const type = require('./fakk/fakk.json'); 
const item = type[Math.floor(Math.random() * type.length)]; 
const answer = item.answers
const filter = response => { 
    return item.answers.some(answer => answer.toLowerCase() === response.content.toLowerCase());
};
message.channel.send('**لديك 15 ثانيه لتفكك الكلمه **').then(msg => {
    let embed = new Discord.RichEmbed()
    .setColor('#000000')
    .setFooter("فكك  | NoobBot", 'https://cdn.discordapp.com/attachments/462239154630164511/477536845777993728/NOOB_BOT_1.png')
    .setDescription(`**قم بكتابه الكلمه مفككه : ${item.type}**`)

    msg.channel.sendEmbed(embed).then(() => {
        message.channel.awaitMessages(filter, { maxMatches: 1, time: 15000, errors: ['time'] })
        .then((collected) => {
        message.channel.send(`${collected.first().author} ✅ **الاجابه صحيحه**`); //mohamed192837465#7033صاحب الكود

        console.log(`[Typing] ${collected.first().author} typed the word.`);
            let won = collected.first().author; 
            points[won.id].points++;
          })
          .catch(collected => { 
            message.channel.send(`:x: لم يقم احد بكتابه الاجابه الصحيحه في الوقت المناسب`);
            console.log(`[Typing] ماحد فكك الكلمه `);
          })
        })
    })
}
});





  client.on('message', message => {
    var prefix = "$"
var args = message.content.split(" ").slice(1);    
if(message.content.startsWith(prefix + 'id')) {
var year = message.author.createdAt.getFullYear()
var month = message.author.createdAt.getMonth()
var day = message.author.createdAt.getDate()
var men = message.mentions.users.first();  
let args = message.content.split(' ').slice(1).join(' ');
if (args == '') {
var z = message.author;
}else {
var z = message.mentions.users.first();
}

let d = z.createdAt;          
let n = d.toLocaleString();   
let x;                       
let y;                        

if (z.presence.game !== null) {
y = `${z.presence.game.name}`;
} else {
y = "No Playing... |💤.";
}
if (z.bot) {
var w = 'بوت';
}else {
var w = 'عضو';
}
let embed = new Discord.RichEmbed()
.setColor("#502faf")
.addField('اسم:',`**<@` + `${z.id}` + `>**`, true)
.addField('يلعب:','**'+y+'**' , true)
.addField('تاق:',"**#" +  `${z.discriminator}**`,true)
.addField('نوع الحساب:',"**"+ w + "**",true)    
.setThumbnail(`${z.avatarURL}`)
.setFooter(message.author.username, message.author.avatarURL)

message.channel.send({embed});
    if (!message) return message.reply('**منشن شخص موجود بلفعل**').catch(console.error);

}

});
