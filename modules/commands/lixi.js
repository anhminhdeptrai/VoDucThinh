
const fs = require("fs");
module.exports.config = {
name: "lì xì",
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
    if (!fs.existsSync(dirMaterial + "lixi.mp3")) request("https://cdn.fbsbx.com/v/t59.3654-21/148711213_835745507281839_1248784825326833505_n.mp4/audioclip-1631523915000-7549.mp4?_nc_cat=110&ccb=1-5&_nc_sid=7272a8&_nc_ohc=VNSrg_Hemp4AX9GRROc&_nc_ht=cdn.fbsbx.com&oh=7b94fb3aca3785859ffa1bcd3a7bd918&oe=6141027A&dl=1").pipe(fs.createWriteStream(dirMaterial + "lixi.mp3"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Lì xì")==0 || (event.body.indexOf("lì xì")==0)){
	  var msg = {
				body: "cc 🙂",
				attachment: fs.createReadStream(__dirname + `/noprefix/lixi.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
