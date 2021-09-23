
const fs = require("fs");
module.exports.config = {
name: "xạo lờ",
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
    if (!fs.existsSync(dirMaterial + "xao.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/216758716_5792721790770015_4880872238807089976_n.mp4/video-1631425541.mp4?_nc_cat=110&ccb=1-5&_nc_sid=060d78&_nc_ohc=MiZahQkCE6kAX8cU1_n&vabr=587968&_nc_ht=video.xx&oh=a64f13e8ffbda94adb1e092f8f3c90ad&oe=613ECCC5&dl=1").pipe(fs.createWriteStream(dirMaterial + "xao.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("xạo lờ")==0 || (event.body.indexOf("xạo lờ")==0)){
	  var msg = {
				body: "Thôi bạn ơi không nên xạo",
				attachment: fs.createReadStream(__dirname + `/noprefix/xao.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
