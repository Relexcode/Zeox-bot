module.exports = {
    name: 'nuke',
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_CHANNELS')) return;
        if(!message.guild.me.hasPermission('MANAGE_CHANNELS')) return message.reply('you need perms!!!')

        await message.channel.clone().then((ch) => {
            ch.setParent(message.channel.parent.id);
            ch.setPosition(message.channel.position);
            message.channel.delete();

            ch.send('This channel has been nuked! ')
        })
    }
}