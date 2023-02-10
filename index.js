const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keepalive.js')

var username = '';// put your username here!
var password = process.env.shared;//put your password here!
var shared_secret = process.env.shared;//put your shared secret here!

var games = [12210, 1238840, 271590];  // Put in which games you want it to be played
var status = 7;  // 1 - online, 7 - invisible


user = new steamUser();
user.logOn({ "accountName": username, "password": password, "twoFactorCode": steamTotp.generateAuthCode(shared_secret) });
user.on('loggedOn', () => {
	if (user.steamID != null) console.log(user.steamID + ' - logged in succesfully');
	user.setPersona(status);
	user.gamesPlayed(games);
});