
const fs = require("fs");
module.exports.config = {
name: "Sad",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Nhạc buồn",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "sad.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/214061649_4908917005806445_590525217488968923_n.mp4/video-1631347983.mp4?_nc_cat=105&ccb=1-5&_nc_sid=060d78&_nc_ohc=vUnlDLJKswEAX-e1kiS&vabr=354931&_nc_ht=video.xx&oh=46339f46163c13bc5e9d82fd90305aad&oe=613D8398&dl=1").pipe(fs.createWriteStream(dirMaterial + "sad.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Sad")==0 || (event.body.indexOf("Sad")==0)){
	  var msg = {
				body: "Nhạc buồn về tâm trạng ngắn đoạn",
				attachment: fs.createReadStream(__dirname + `/noprefix/buon.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
