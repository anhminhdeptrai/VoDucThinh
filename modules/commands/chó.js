
const fs = require("fs");
module.exports.config = {
name: "chó",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Siêu nhân chó",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "chó.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/191224686_4212327395500539_9127931338966982227_n.mp4/video-1631345395.mp4?_nc_cat=103&ccb=1-5&_nc_sid=060d78&_nc_ohc=issn8RrAlxoAX_wWvsr&vabr=585054&_nc_ht=video.xx&oh=e5b4750d6033aa7eb1cbfe8466d40b3d&oe=613DA114&dl=1").pipe(fs.createWriteStream(dirMaterial + "chó.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chó")==0 || (event.body.indexOf("chó")==0)){
	  var msg = {
				body: "Siêu nhân chó nè",
				attachment: fs.createReadStream(__dirname + `/noprefix/chó.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
