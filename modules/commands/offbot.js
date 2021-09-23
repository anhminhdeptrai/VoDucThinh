module.exports.config = {
	name: "offbot",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "HTHB",
	description: "Tắt bot.",
	commandCategory: "AdminBot",
	cooldowns: 0
        };
module.exports.run = ({event, api}) =>api.sendMessage(" Bot đi kiếm gái địt đây ko chơi vs mn nữa ",event.threadID, () =>process.exit(0))