
const fs = require("fs");
module.exports.config = {
name: "Quê",
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
    if (!fs.existsSync(dirMaterial + "que.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/241783748_4365604970171942_2454112112181628554_n.mp4/video-1631522042.mp4?_nc_cat=105&ccb=1-5&_nc_sid=060d78&_nc_ohc=OKRRygOx0YIAX9qYnSe&vabr=639663&_nc_ht=video.xx&oh=919f814e85472103fcf321029a034cae&oe=614055A1&dl=1").pipe(fs.createWriteStream(dirMaterial + "que.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Quê")==0 || (event.body.indexOf("quê")==0)){
	  var msg = {
				body: "Ôi con sông quê",
				attachment: fs.createReadStream(__dirname + `/noprefix/que.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
