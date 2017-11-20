const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	   client.user.setPresence({game: {name: "with Jorge | j.help", type: 0}});
});

var prefix = "j."

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ping')) {
	
		 message.channel.send(`Pong! :ping_pong:  \`${Date.now() - message.createdTimestamp} ms\``);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'hello')) {
	
		 message.channel.send(`Hello ${message.author.username}! :wave:`);
		
	}
});


client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dbs')) {
	
		 message.channel.send(`Oof the previous episode of Dragon Ball Super was :ok_hand:`);
		
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'xd')) {
	
		 message.channel.send(`XD`);
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'ssj')) {
	
	
const embed = new Discord.RichEmbed()

  .setTitle("AAAAAAAAAAAAAAAAAAAAAAAAAH")

  .setColor(0xF7FE2E)
  .setImage("https://media.giphy.com/media/3o6fJ1DYT1w2mvZyE0/giphy.gif")


  message.channel.send({embed});
	}
});

client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'wait')) {
		

		 message.channel.send(`Wait`);
		message.channel.send(`Wait`);
		message.channel.send(`Wait`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'invite')) {
	
		 message.channel.send(`Hey i cant join your server you know because i am a bot XD, but you can add me to your server in here:\nhttps://discordapp.com/api/oauth2/authorize?client_id=372862753154793472&scope=bot&permissions=1`);
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'help')) {
	
		 message.author.send(`${message.author.username} you need a little help with the commands, there you go:\n **-j.hello**\n **-j.dbs**\n **-j.ssj**\n **-j.dex help**\n **-j.xd**\n **-j.wait**\n **-j.invite**\n **-j.ping**`);
	 message.channel.send(`${message.author.username} message sent :mailbox:`)
	}
});
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex help')) {
	
		 message.author.send(`${message.author.username} you need a little help with dex commands, there you go:\n **-j.dex (Mach Mirror Fakemon)**\n **-j.dex list**`);
	 message.channel.send(`${message.author.username} message sent :mailbox:`)
	}
});
//Mach Mirror Pokedex
//List
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex list')) {
	
		 message.channel.send(`${message.author.username} here's the dex. \n**-Forshadic #1**\n **-Psychind #2**\n **-Foligsnow #3**\n**-Kascal #4**\n **-Skaloogan #5**\n **-Kingasrush #6**\n**-Pterark #41**\n **-Pteravolt #42**\n**-Parttiblow #61**\n **-Lattishine #62**\n**-Toxitrik #75**\n**-Ghoulantern #251**`);
	}
});
//1
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex forshadic')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Forshadic #1")
  .setAuthor("Artie", "https://cdn.discordapp.com/avatars/310089392230498315/483a341d8a0fd9eef1908870ba922f40.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("This Pokemon loves to play and make stuff out of snow, it uses it's psychic abilities to attack any trespassers who try to harm them and will do anything to protect it's trainer.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380474283324866561/unknown.png")
.addField("Types:",
    "Psychic/Ice.")
		.setFooter("Description by TSComega.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//2
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex psychind')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Psychind #2")
  .setAuthor("Artie", "https://cdn.discordapp.com/avatars/310089392230498315/483a341d8a0fd9eef1908870ba922f40.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("This is the evolution of forshadic, this pokemon loves to make snowballs and to throw them at people, it uses it's psychic abilities to protect it's trainer and makes snowmen to attack pokemon that attack it")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/381264180134543372/unknown.png")
.addField("Types:",
    "Psychic/Ice.")
		.setFooter("Description by TSComega.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//3
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex foligsnow')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Foligsnow #3")
  .setAuthor("Jorge Adolfo", "https://cdn.discordapp.com/avatars/304357538101723137/699fc601494f622dce54c01bf3359ad3.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Foligsnow are known for living in icy caves and high atop mountains. It's fur acts as an insulator so that it can protect itself from the harsh and cold Mirren winds.")
  .setImage("https://cdn.discordapp.com/attachments/351931134764122113/381268709978931200/unknown.png")
.addField("Types:",
    "Psychic/Ice.")
		.setFooter("Description by Splitzblue.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//4
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex kascal')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Kascal #4")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("The Thief Pokemon, this is one of the cutest pokemon in the mirren region and it uses it's cuteness to decieve people and steal. it is known to steal items, money and sometimes even trainer cards! and it sometimes even steals from its own trainer!")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380477611618467852/unknown.png")
.addField("Types:",
    "Fighting.")
		.setFooter("Description by TSComega.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//41
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex pterark')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Pterark #41")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Its eyes are too sensitives to sunlight, thats why it spends most of its time in its nest. Its wings arent developed enough for it to fly, and its legs are too short for it to run.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380930829872005131/unknown.png")
.addField("Types:",
    "Flying/Rock.")
		.setFooter("Description by Gaming U-Septor.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//42
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex pteravolt')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Pteravolt #42")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Although naturally passive, it will do anything to protect its nest. Scientists speculate that it was able to manipulate nearby clouds and use them to create rain and massive thunderstorms.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380930922398089226/unknown.png")
.addField("Types:",
    "Electric/Rock.")
		.setFooter("Description by Gaming U-Septor.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//61
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex parttiblow')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Parttiblow #61")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("The party bomb pokemon, the color of the lower half of its body indicates when it will explode, whoever, this Pokemons explosions are harmless, so it has a hard time defending itself.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/381575732075167754/unknown.png")
.addField("Types:",
    "Dark/Fairy.")
		.setFooter("Description by Gaming U-Septor.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//62
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex lattishine')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Lattishine #62")
  .setAuthor("Gaming U-Septor", "https://cdn.discordapp.com/avatars/272583532562612226/f74812b9672d780bf598c5d47b3c2f7e.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("The Late Night Pokemon, these pokemon are nocturnal, they hunt using the lights on it's torso to attract other pokemon. They're also known to be very loud.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/381669313347584000/unknown.png")
.addField("Types:",
    "Dark/Fairy.")
		.setFooter("Description by Gaming U-Septor.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//75
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex toxitrik')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Toxitrik #75")
  .setAuthor("ArceusTube", "https://cdn.discordapp.com/avatars/350101239364714508/14cf7783293a82caf8655b81bf60add5.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("Toxitrik the snake pokemon, this pokemon is known for being able to make whirlwinds of fire with its tail and at the same time paralyze its enemies with its electric body.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/381583800108580865/unknown.png")
.addField("Types:",
    "Electric/Poison.")
		.setFooter("Description by Jorge Adolfo. Art by Alice.")
  .setTimestamp()
  message.channel.send({embed});
	}
});
//251
client.on('message', message => {
	if (message.author === client.user) return;
	if (message.content.startsWith(prefix + 'dex ghoulantern')) {
	
		const embed = new Discord.RichEmbed()
  .setTitle("Ghoulantern #251")
  .setAuthor("ArceusTube", "https://cdn.discordapp.com/avatars/350101239364714508/14cf7783293a82caf8655b81bf60add5.jpg")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor(0x7401DF)
  .setDescription("This Pokemon is known to be a ghostly spirit that guides other ghost Pokemon and humans. It is rumored that Ghoulanterns are supposedly dead souls of the Firebreathers that roamed the Mirren region.")
  .setImage("https://cdn.discordapp.com/attachments/372491249221107714/380470852073816065/unknown.png")
.addField("Types:",
    "Ghost/Fire.")
		.setFooter("Description by SplitzBlue.")
  .setTimestamp()
  message.channel.send({embed});
	}
});

client.login(process.env.BOT_TOKEN);

