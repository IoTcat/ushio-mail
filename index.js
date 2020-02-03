

var mail = (url) => {

	var o = {
		send: (to, subject, body, from) => send(to, subject, body, from)
	};


	const request = require('request');

	var send = (to, subject, body, from) => {
		return new Promise((resolve, reject) => {
			request(url + `?to=${to}&subject=${subject}&body=${body}&from=${from}`, (err, res, body) => {
				resolve(body);
			});
		});
	};

	return o;
}


module.exports = mail;

