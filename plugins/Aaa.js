const Asena = require('../events');
const axios = require('axios')
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');

Asena.addCommand({pattern: 'test ?(.*)', fromMe: true}, (async (message, match) => {
    
    if (match[1] === '') return await message.sendMessage('*zahmet olmassa bi isim yaz be*!');

    await message.sendMessage('*şimdi sana güzel bir teklifte bulunacağım hazırmısın*. *' + match[1] + '*');
    
    await new Promise(r => setTimeout(r, 2000));

    var image = await axios.get('https://images.app.goo.gl/jJHVkHgHuCnhGVmc8', { responseType: 'arraybuffer' })

    await message.client.sendMessage(message.jid,Buffer.from(image.data), MessageType.image, {mimetype: Mimetype.jpg, caption: 'sen benim çikilotamsın'})

}))
