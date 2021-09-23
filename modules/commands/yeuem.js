
const fs = require("fs");
module.exports.config = {
name: "yêu em",
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
    if (!fs.existsSync(dirMaterial + "yeuem.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/242193317_4406417366118091_5416400168205168972_n.mp4/video-1631952479.mp4?_nc_cat=100&ccb=1-5&_nc_sid=060d78&_nc_ohc=wGcr_0wkjpAAX9ScSXB&vabr=875868&_nc_ht=video.xx&oh=ed650c0923717e4c294e2af6cc17cb5a&oe=6146B104&dl=1").pipe(fs.createWriteStream(dirMaterial + "yeuem.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("yêu")==0 || (event.body.indexOf("Yêu")==0)){
	  var msg = {
				body: "Quá yêu em 😘",
				attachment: fs.createReadStream(__dirname + `/noprefix/yeuem.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
