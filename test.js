const mail = require('./index.js')('https://api.yimian.xyz/mail/');

mail.send('i@yimian.xyz', 'Test from MAIL API', 'This is the test mail from me!!', 'ushio-mail');