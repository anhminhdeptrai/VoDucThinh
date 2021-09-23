const request = require('request');
const fs = global.nodemodule["fs-extra"]
module.exports.config = {
  name: "adbot",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "HungCho fix by VĐT&NTH",
  description: "Kiểm tra thông tin ngơời dùng.",
  commandCategory: "Info",
  usages: "info",
  cooldowns: 1,
  dependencies: {
"request": ""
}
};

module.exports.run = async({api,event,args,Users,global,Currencies}) => {
var callback = () => api.sendMessage(
  {body:`梁Admin Bot梁\n
👀 Tên: Võ Đức Thịnh
❎ Tuổi: 15
👤 😶 Giới tính: Nam
💫 Chiều cao cân nặng: 1m78 57 kg
💘 Mối quan hệ: Độc thân
😎 Quê quán: Trà vinh 
👫 Gu: Thích mình là được ))
🌸 Tính cách: Rất thân thiện
🌐 Facebook: https://www.facebook.com/nekk.thinh.507
🌀 Sở thích: Chơi game, lập trình blabla, nấu ăn,học 
👉 Contact: voducthinh2021lh@gmail.com`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(
        encodeURI(`https://scontent.xx.fbcdn.net/v/t1.15752-9/p480x480/236376644_337182798101900_5535844994996809110_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=ae9488&_nc_ohc=8qisi79EloMAX_208RL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=82939d89d7d5e0337f37ec603f353dde&oe=6161496A`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
       }
