const { Client, Message, MessageEmbed } = require('discord.js');
const { MessageButtons, MessageButton } = require('discord-buttons');
module.exports = {
    name: 'invite',
    run: async(client, message, args) => {
        const button5 = new MessageButton()
        .setStyle('green')
        .setLabel("Invite me")
        .setID('button5')
        .setURL('https://discord.com/oauth2/authorize?client_id=848547049217720330&scope=bot&permissions=8589934591')
        const button6 = new MessageButton()
        .setStyle('red')
        .setLabel("Support server")
        .setID('button6')
        .setURL('https://discord.gg/FjFAnAuGym')

        message.channel.send('click this button for my invite url or support server!', {
            buttons: [button5, button6]
        });

  
    },
};