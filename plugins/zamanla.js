const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const Config = require('../config');
	
Asena.addCommand({pattern: 'zamanla ?(.*)', fromMe: true, deleteCommand: false,}, (async (message, match) => {

	        var time = match[1].split(' ')[0]

  await new Promise(r => setTimeout(r, Number(match[1].split(' ')[0])) * 5000 * 300 );
  var u = match[1].split(' ')
  var b = u.slice(1)
  var y = b.toString(8)
  var z = y.replace(/[a-zA-Z0-9],[a-zA-Z0-9]/g, ' ')
  await message.sendMessage(z)

}));
