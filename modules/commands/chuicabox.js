module.exports.config = {
	name: "chửi cả box",
	version: "1.0.1",
	hasPermssion: 1,
	credits: "Bùi Lê Bảo Luân UwU",
	description: "Chửi tất cả thành viên trong nhóm xong thoát khỏi nhóm",
	commandCategory: "group",
	usages: "chuicabox",
	cooldowns: 20
dependencies: {
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async function({ api, event, args, Threads }) {
	try {
		var listUserID = (await Threads.getInfo(event.threadID)).participantIDs;
		const botID = api.getCurrentUserID();
		listUserID = listUserID.filter(ID => ID != botID && ID != event.senderID);
		var body = (args.length != 0) ? args.join(" ") : "Bảo Luân UwU", mentions = [], index = 0;
		
	a("Để tao dập lồn cả cái box này!");
setTimeout(() => {a({body: "" + " " + name, mentions: arraytag})}, 3000);
setTimeout(() => {a({body: "Địt lồn cái box như con cặc" + " " + name, mentions: arraytag})}, 5000);
setTimeout(() => {a({body: "Box toàn mấy thằng óc chó thiểu năng haha!" + " " + name, mentions: arraytag})}, 7000);
setTimeout(() => {a({body: "Ra đây mà solo với bot của Bảo Luân đẹp trai nè" + " " + name, mentions: arraytag})}, 9000);
setTimeout(() => {a({body: "Box toàn lũ gà lồn" + " " + name, mentions: arraytag})}, 12000);
setTimeout(() => {a({body: "Ra đây đĩ chó ra tao dập lồn cả họ nhà chúng mày" + " " + name, mentions: arraytag})}, 15000);
setTimeout(() => {a({body: "Lên đây địt mẹ cái box lồn" + " " + name, mentions: arraytag})}, 17000);
setTimeout(() => {a({body: "Không ra tao địt tung lồn cả cái box này giờ" + " " + name, mentions: arraytag})}, 20000);
setTimeout(() => {a({body: "Thích bắn lỗ nào hả lũ lồn ngu dốt" + " " + name, mentions: arraytag})}, 23000);
setTimeout(() => {a({body: "Con cặc địt mẹ mày" + " " + name, mentions: arraytag})}, 25000);
setTimeout(() => {a({body: "Đéo ra tao report fb chết mẹ tụi mày" + " " + name, mentions: arraytag})}, 28500);
setTimeout(() => {a({body: "Bố mày bắn rap chết cụ mày giờ" + " " + name, mentions: arraytag})}, 31000);
setTimeout(() => {a({body: "Tụi mày vẫn đéo dám ra à" + " " + name, mentions: arraytag})}, 36000);
setTimeout(() => {a({body: "Thôi để tao xỉ vả dần vào bản mặt lồn tụi mày nhé" + " " + name, mentions: arraytag})}, 39000);
setTimeout(() => {a({body: "Trước đó cho tao xin nghỉ 1p nhé để t soạn lyrics húp chúng mày" + " " + name, mentions: arraytag})}, 40000);
setTimeout(() => {a({body: "Xin phép mở đầu thì" + " " + name, mentions: arraytag})}, 65000);
setTimeout(() => {a({body: "Đầu tiên tao xin phép địt từ trên xuống dưới con" + " " + name, mentions: arraytag})}, 70000);
setTimeout(() => {a({body: "Tao địt từ lỗ lồn đến lỗ nhị con lồn" + " " + name, mentions: arraytag})}, 75000);
setTimeout(() => {a({body: "Lồn thì to như lồn trâu thủ dâm ống cống ấy nhé con" + " " + name, mentions: arraytag})}, 80000);
setTimeout(() => {a({body: "Lồn bị địt mòn 1 bên còn bên kia chó đụ" + " " + name, mentions: arraytag})}, 85000);
setTimeout(() => {a("Tao mệt rồi đéo chửi cái box này nữa")} , 90000);
setTimeout(() => {a({body: "Nào Bảo Luân update lyric thì chửi tiếp nhé" + " " + name, mentions: arraytag})}, 95000);
setTimeout(() => {a({body: "Cảm ơn các bạn đã nghe mình chửi nha" + " " + name, mentions: arraytag})}, 100000);
setTimeout(() => {a({body: "Xin chào và hẹn gặp lại bạn ở chương trình lần sau nha" + " " + name, mentions: arraytag})}, 105000);
setTimeout(() => {a("Chào tạm biệt 🥺 lew lew")} , 110000);
module.exports.run = async function({ api, event, args }) {
    const tid = args.join(" ")
   let namee = await api.getThreadInfo(tid)
  if (!tid) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);

else return api.removeUserFromGroup(api.getCurrentUserID(), tid, () => api.sendMessage("", event.threadID, event.messageID));

}