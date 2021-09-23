
const fs = require("fs");
module.exports.config = {
name: "chúa hề",
	version: "1.0.0",
	hasPermssion: 0,
	description: "hề",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "he.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/185950227_4000831239986441_8096242825286859146_n.mp4/video-1631350513.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=BG2Jod80nhEAX_EZDwl&vabr=312325&_nc_ht=video.xx&oh=115be49b02d12618c34bff96b0361cf8&oe=613D5F17&dl=1").pipe(fs.createWriteStream(dirMaterial + "he.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chúa hề")==0 || (event.body.indexOf("chúa hề")==0)){
	  var msg = {
				body: "Joker đẳng cấp số 1 Việt Nam",
				attachment: fs.createReadStream(__dirname + `/noprefix/he.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
