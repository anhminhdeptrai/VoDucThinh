
const fs = require("fs");
module.exports.config = {
name: "đen",
	version: "1.0.0",
	hasPermssion: 0,
	description: "đi về nhà",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "đem.mp3")) request("https://cdn.fbsbx.com/v/t59.3654-21/240455321_707985327260825_8607286787739471462_n.mp4/audioclip-1631374186000-200229.mp4?_nc_cat=110&ccb=1-5&_nc_sid=7272a8&_nc_ohc=Y5qf8iH8qwgAX_vj7ea&_nc_ht=cdn.fbsbx.com&oh=763d9a686d7c2cfeefeb0e25a2927973&oe=613EAD07&dl=1").pipe(fs.createWriteStream(dirMaterial + "đen.mp3"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("đen")==0 || (event.body.indexOf("đen")==0)){
	  var msg = {
				body: "Đi Về Nhà",
				attachment: fs.createReadStream(__dirname + `/noprefix/đen.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
