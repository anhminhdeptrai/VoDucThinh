
const fs = require("fs");
module.exports.config = {
name: "chill",
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
    if (!fs.existsSync(dirMaterial + "chill.mp3")) request("https://cdn.fbsbx.com/v/t59.3654-21/106959240_705352693651165_2851758977941844029_n.mp4/audioclip-1631538117000-280189.mp4?_nc_cat=108&ccb=1-5&_nc_sid=7272a8&_nc_ohc=6tgAEqArD2UAX_A5oCZ&_nc_ht=cdn.fbsbx.com&oh=aa510a16c9b642ed36c9fb4f3e6682e8&oe=6140D053&dl=1").pipe(fs.createWriteStream(dirMaterial + "chill.mp3"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Chill")==0 || (event.body.indexOf("chill")==0)){
	  var msg = {
				body: "Nhạc chill",
				attachment: fs.createReadStream(__dirname + `/noprefix/chill.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
