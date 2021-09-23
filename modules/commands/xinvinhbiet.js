
const fs = require("fs");
module.exports.config = {
name: "Xin vĩnh biệt",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Vĩnh biệt cụ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "vinhbietcu.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/240935344_3588056364564135_3359366936831957915_n.mp4/video-1631360501.mp4?_nc_cat=110&ccb=1-5&_nc_sid=060d78&_nc_ohc=MtbomggCOWkAX-QS0ll&vabr=916558&_nc_ht=video.xx&oh=b7d9554cb2793d37102b3106f7c45e41&oe=613D7DCB&dl=1").pipe(fs.createWriteStream(dirMaterial + "vinhbietcu.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("vĩnh biệt")==0 || (event.body.indexOf("vĩnh biệt")==0)){
	  var msg = {
				body: "Thôi vĩnh biệt cụ😔",
				attachment: fs.createReadStream(__dirname + `/noprefix/vinhbietcu.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
