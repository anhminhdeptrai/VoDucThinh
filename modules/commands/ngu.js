
const fs = require("fs");
module.exports.config = {
name: "ngu",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Ngu như mày!!",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ngu.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/119309770_2862881517147056_8796402356644434927_n.mp4/video-1631344888.mp4?_nc_cat=101&ccb=1-5&_nc_sid=060d78&_nc_ohc=OwFlcpMv18IAX-VhxzG&vabr=364451&_nc_ht=video.xx&oh=8baecce00881aece0e5b347fecf5007b&oe=613D8898&dl=1").pipe(fs.createWriteStream(dirMaterial + "ngu.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ngu")==0 || (event.body.indexOf("ngu")==0)){
	  var msg = {
				body: "Trường hợp này bó tay..!!",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngu.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
