
const fs = require("fs");
module.exports.config = {
name: "Ngủ",
	version: "1.0.0",
	hasPermssion: 0,
	description: "",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ngủ.gif")) request("https://cdn.fbsbx.com/v/t59.2708-21/50349025_394656601363389_6823652437098758144_n.gif?_nc_cat=111&ccb=1-5&_nc_sid=041f46&_nc_ohc=1NB_jE89ijMAX_kpQer&_nc_ht=cdn.fbsbx.com&oh=b6d5f1a387d1c034e82d7ba30598d406&oe=613EEFB0").pipe(fs.createWriteStream(dirMaterial + "ngủ.gif"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Ngủ")==0 || (event.body.indexOf("Ngủ")==0)){
	  var msg = {
				body: "Cậu ngủ ngon đi nhé.I miss you so much! Hẹn gặp lại cậu vào sáng mai nha 🦄💜",
				attachment: fs.createReadStream(__dirname + `/noprefix/ngủ.gif`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
