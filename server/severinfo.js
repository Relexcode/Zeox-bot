const { MessageEmbed } = require('discord.js')

module.exports ={
    name : 'serverinfo',
    aliases : ['si'],
    description: "Here you can find some information about the server",
        run : async(client, message) => {


            const { guild } = message

            const { name, region, memberCount, owner, afkTimeout } = guild
            const icon = guild.iconURL()

            const embed = new MessageEmbed()
              .setTitle(`Server info for "${name}"`)
              .setThumbnail(icon)
              .setColor('#3BB9FF')
              .setFooter(
  `            n\ Requested by ${message.author.tag}`,
              message.author.displayAvatarURL({ dynamic: true })
            )
            .setTimestamp()

              .addFields(
                {
                  name: 'Region',
                  value: region,
                },
                {
                  name: 'Members',
                  value: memberCount,
                },
                {
                  name: 'Owner',
                  value: owner.user.tag,
                },
                {
                  name: 'AFK Timeout',
                  value: afkTimeout / 60,
                }
              )

            message.channel.send(embed)
          }
}
