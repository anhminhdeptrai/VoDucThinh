
const fs = require("fs");
module.exports.config = {
name: "chán",
	version: "1.0.0",
	hasPermssion: 0,
	description: "chán nhờ",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "chan.mp4")) request("https://video.xx.fbcdn.net/v/t42.3356-2/158695708_3970238983028424_8413391635254469729_n.mp4/video-1631348748.mp4?_nc_cat=106&ccb=1-5&_nc_sid=060d78&_nc_ohc=1gD5jEKCQ0cAX8ccQz2&vabr=413874&_nc_ht=video.xx&oh=75d09ae57144771c1713680787abcbc5&oe=613D8F7A&dl=1").pipe(fs.createWriteStream(dirMaterial + "chan.mp4"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("chán")==0 || (event.body.indexOf("chán")==0)){
	  var msg = {
				body: "Tôi cười chưa chắt tôi đã vui 😞",
				attachment: fs.createReadStream(__dirname + `/noprefix/chan.mp4`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
