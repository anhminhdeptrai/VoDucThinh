
const fs = require("fs");
module.exports.config = {
name: "cua gái",
	version: "1.0.0",
	hasPermssion: 0,
	description: "cua gái cc",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "cuagai.mp3")) request("https://cdn.fbsbx.com/v/t59.3654-21/240828207_3975276292601652_4008722701776752453_n.mp4/audioclip-1631350292000-6217.mp4?_nc_cat=110&ccb=1-5&_nc_sid=7272a8&_nc_ohc=w3D6EcXFGnUAX8gGMrO&_nc_ht=cdn.fbsbx.com&oh=5dc2e65f10fa2a745837e354da6f4315&oe=613E3C92&dl=1").pipe(fs.createWriteStream(dirMaterial + "cuagai.mp3"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Cua gái")==0 || (event.body.indexOf("Cua gái")==0)){
	  var msg = {
				body: "Bố mẹ còng lưng nuôi m đi học yêu cc",
				attachment: fs.createReadStream(__dirname + `/noprefix/cuagai.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
