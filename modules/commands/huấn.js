
const fs = require("fs");
module.exports.config = {
name: "huấn",
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
    if (!fs.existsSync(dirMaterial + "huan.mp3")) request("https://cdn.fbsbx.com/v/t59.3654-21/95013104_2553583904886185_4334577816570953728_n.mp4/audioclip-1631435075000-17972.mp4?_nc_cat=108&ccb=1-5&_nc_sid=7272a8&_nc_ohc=22gGayDu0MQAX9yK3zl&_nc_ht=cdn.fbsbx.com&oh=374d4970246771ac5309255bc204a7cd&oe=613FA050&dl=1").pipe(fs.createWriteStream(dirMaterial + "huan.mp3"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("huấn")==0 || (event.body.indexOf("huấn")==0)){
	  var msg = {
				body: "Có làm mới có ăn",
				attachment: fs.createReadStream(__dirname + `/noprefix/huan.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
