module.exports = {
	name: 'delete',
	category: 'Ticket',
	description: 'Delete a specified ticket.',
	aliases: ['deltick'],
	usage: 'delete',
	userperms: ['ADMINISTRATOR'],
	botperms: [],
	premium: true,
	run: async (client, message, args) => {
		if(message.channel.name.includes('ticket-')) {
			message.channel.delete();
		}
		else {
			return message.reply('you cannot use this command here. Please use this command when you want to delete a ticket.');
		}
	},
};