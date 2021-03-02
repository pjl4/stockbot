const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');


client.on('ready', () => {
	console.log(`Logged in as ${client.user.tag}`);
});


try {
	client.login(token);
} catch (error) {
	console.log(error);
}
