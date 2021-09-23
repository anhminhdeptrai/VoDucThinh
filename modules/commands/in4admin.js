const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "in4admin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HelyT",
  description: "Kiểm tra thông tin người dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁ADMIN BOT梁\n
  \n👀 Tên: Võ Đức Thịnh
  \n❎ Tuổi: 15
  \n👤 😶 Giới tính: Nam
  \n💫 Chiều cao cân nặng: 1m78 57 kg
  \n💘 Mối quan hệ: Độc thân
  \n😎 Quê quán: Trà vinh 
  \n👫 Gu: Thích mình là được ))
  \n🌸 Tính cách: Rất thân thiện lầy lội
  \n🌐 Facebook: https://www.facebook.com/nekk.thinh.507
  \n🌀 Sở thích: Chơi game, lập trình blabla, nấu ăn, học
  \n👉 Contact: voducthinh2021lh@gmail.com`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/233356373_346255903799434_504160964249053453_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=ae9488&_nc_ohc=eR7qDtENqPYAX9OiT9c&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=4b2d0ce82a76fe51f63b81ba09f3948b&oe=616608E6`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       } `,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://graph.facebook.com/${100030751998443}/picture?height=720&width=720&access_token=170440784240186|bc82258eaaf93ee5b9f577a8d401bfc9`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       };
