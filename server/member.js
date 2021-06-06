const { ReactionPages } = require('reconlx');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'members',
    premium: true,
    /** 
     * @param {Client} client
     * @param {message} message
     * @param {string[]} args
     */
    run: async(client, message, args) => {
        const members = message.guild.members.cache
        .filter((m) => !m.user.bot)
        .sort((a, b) => a.joinedTimestamp - b.joinedTimestamp);

        const arrayOfmemebers = members.array();
        const ids = [];
        arrayOfmemebers.forEach((mem) => {
            ids.push(mem.user.id);
        })
        let index = 1;
        if(ids.length > 10) {
            const chunks = convertChunk(ids, 10);
            const arry = [];
            for (chunk of chunks) {
                const description = chunk.map((v) => `#${index++} **${message.guild.members.cache.get(v).user.tag}**`);
                arry.push(
                    new MessageEmbed()
                    .setTitle('join leaderboard')
                    .setDescription(description)
                    .setColor('RANDOM')
                )
            }
            ReactionPages(message, arry, true)
        } else {
            const description = ids.map((v) => `#${index++} **${message.guild.members.cache.get(v).user.tag}**`);
            message.channel.send(
                new MessageEmbed()
                .setTitle('join leaderboard')
                .setDescription(description)
                .setColor('RANDOM')
            )
        }
    }
}

function convertChunk(arr, size) {
    const array = [];
    for (let i = 0; i < arr.length; i+= size) {
        array.push(arr.slice(i, i+size))
    }
    return array;
}