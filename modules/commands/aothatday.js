
const fs = require("fs");
module.exports.config = {
name: "ảo thật đấy",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Hôm nay trời đẹp thế nhờ!!",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ao.mp3")) request("https://cdn.fbsbx.com/v/t59.3654-21/179525481_750415302298158_538025449404561343_n.mp4/audioclip-1631426712000-8490.mp4?_nc_cat=108&ccb=1-5&_nc_sid=7272a8&_nc_ohc=VoO4pAwsDPEAX8mQgsg&_nc_ht=cdn.fbsbx.com&oh=49173446010788d4ca2de21e614d868e&oe=613EEF83&dl=1").pipe(fs.createWriteStream(dirMaterial + "ao.mp3"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("ảo")==0 || (event.body.indexOf("Ảo")==0)){
	  var msg = {
				body: "Địt mẹ ảo thật",
				attachment: fs.createReadStream(__dirname + `/noprefix/ao.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
