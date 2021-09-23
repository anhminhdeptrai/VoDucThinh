
const fs = require("fs");
module.exports.config = {
name: "yamete",
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
    if (!fs.existsSync(dirMaterial + "yamete.mp3")) request("https://cdn.fbsbx.com/v/t59.3654-21/101469575_294178681595141_6037838919905574912_n.mp4/audioclip-1631522728000-2168.mp4?_nc_cat=107&ccb=1-5&_nc_sid=7272a8&_nc_ohc=g-YBh8AngakAX8J7Gsk&_nc_ht=cdn.fbsbx.com&oh=1851a3b513ef6c65538295d796a6622d&oe=6140FA7F&dl=1").pipe(fs.createWriteStream(dirMaterial + "yamete.mp3"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Yamete")==0 || (event.body.indexOf("yamete")==0)){
	  var msg = {
				body: "oni chan",
				attachment: fs.createReadStream(__dirname + `/noprefix/yamete.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
