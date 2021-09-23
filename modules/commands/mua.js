
const fs = require("fs");
module.exports.config = {
name: "múa dao",
	version: "1.0.0",
	hasPermssion: 0,
	description: "dao",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "mua.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/242362862_4346963825340680_1534882602967347017_n.mp4/video-1632300661.mp4?_nc_cat=111&ccb=1-5&_nc_sid=060d78&_nc_ohc=ZdmYKOLfzGQAX8FNWfK&vabr=401278&_nc_ht=video.xx&oh=074031d703231f8ea1160cec9607353c&oe=614BF3E6&dl=1").pipe(fs.createWriteStream(dirMaterial + "mua.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("múa")==0 || (event.body.indexOf("Múa")==0)){
	  var msg = {
				body: ":))))",
				attachment: fs.createReadStream(__dirname + `/noprefix/mua.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
