
const fs = require("fs");
module.exports.config = {
name: "mixi2",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Độ tộc",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "dotoc.mp3")) request("https://cdn.fbsbx.com/v/t59.3654-21/227839380_569037667445167_864617447568224848_n.mp4/audioclip-1631374513000-210939.mp4?_nc_cat=108&ccb=1-5&_nc_sid=7272a8&_nc_ohc=AWD2LmwhQUEAX9mMauJ&_nc_ht=cdn.fbsbx.com&oh=4fb5b4b9d2b48ecfa4aa56fdd61cd1c0&oe=613E9947&dl=1").pipe(fs.createWriteStream(dirMaterial + "dotoc.mp3"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("mixi2")==0 || (event.body.indexOf("mixi2")==0)){
	  var msg = {
				body: "Độ mixi mãi chất",
				attachment: fs.createReadStream(__dirname + `/noprefix/dotoc.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
