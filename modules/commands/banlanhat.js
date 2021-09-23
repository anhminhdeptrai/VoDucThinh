
const fs = require("fs");
module.exports.config = {
name: "bạn là nhất",
	version: "1.0.0",
	hasPermssion: 0,
	description: "Bạn là nhất",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "banlanhat.mp3")) request("https://cdn.fbsbx.com/v/t59.3654-21/182890947_1476605636008459_9073181507541953311_n.mp4/audioclip-1631349264000-3944.mp4?_nc_cat=107&ccb=1-5&_nc_sid=7272a8&_nc_ohc=xRRp_IYUOCcAX_mZ3sU&_nc_ht=cdn.fbsbx.com&oh=dd957e19ee4ec0f7d2cb8a617fa88ab3&oe=613E35FA&dl=1").pipe(fs.createWriteStream(dirMaterial + "banlanhat.mp3"));
}
module.exports.handleEvent = function({ api, event }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bạn là nhất")==0 || (event.body.indexOf("Bạn là nhất")==0)){
	  var msg = {
				body: "Địt mẹ bạn là nhất",
				attachment: fs.createReadStream(__dirname + `/noprefix/nhatban.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

}
