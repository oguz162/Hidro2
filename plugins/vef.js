const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const fs = require('fs');
const con = require('../config')

//Desc
const TRvefdesc = "Türkçe ses efektlerini gönderir."
const TRvefneed = "*Herhangi bir efekt ismi girmen gerekiyor*"


Asena.addCommand({pattern: 'vef ?(.*)', fromMe: true, desc: TRvefdesc}, (async (message, match) => {  

    if (match[1] === '') return await message.reply(message.jid, TRvefneed, MessageType.text);

    if (match[1] === 'arkadaşlar ben gidiyorum' || match[1] === 'Arkadaşlar ben gidiyorum' || match[1] === 'Arkadaşlar ben gidiyorum') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Arkadaşlar ben gidiyorum.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'kurumuş boğazım' || match[1] === 'Kurumuş boğazım' || match[1] === 'Kurumuş boğazım') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Kurumuş boğazım.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'sikmeseler bari' || match[1] === 'Sikmeseler bari' || match[1] === 'Sikmeseler bari') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Sikmeseler bari.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'sağda tükür'|| match[1] === 'Sağda tükür'|| match[1] === 'Sağda tükür' || match[1] === 'Sağda tükür') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Sağda tükür.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp4Audio, ptt: true}
        )
    }
    else if (match[1] === 'bak sen' || match[1] === 'Bak sen' || match[1] === 'Bak sen' || match[1] === 'Bak sen') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Bak sen.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'ehe' || match[1] === 'ehe' || match[1] === 'ehe' || match[1] === 'ehe') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/ehe.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'bav çiki' || match[1] === 'Bav çiki' || match[1] === 'Bav çiki'|| match[1] === 'Bav çiki') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Bav çiki.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'seni sürekli' || match[1] === 'Seni sürekli' || match[1] === 'Seni sürekli' || match[1] === 'Seni sürekli') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Seni sürekli.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'bağırma lan' || match[1] === 'Bağırma lan'|| match[1] === 'Bağırma lan'|| match[1] === 'Bağırma lan') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Bağırma lan.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === '404' || match[1] === '404' || match[1] === '404' || match[1] === '404') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/404.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'adam ya adam' || match[1] === 'Adam ya adam' || match[1] === 'Adam ya adam' || match[1] === 'Adam ya adam') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Adam ya adam.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'adam öldü' || match[1] === 'Adam öldü' || match[1] === 'Adam öldü' || match[1] === 'Adam öldü') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Adam öldü.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'allah allah' || match[1] === 'Allah allah' || match[1] === 'Allah allah' || match[1] === 'Allah allah') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Allah allah.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'amogus' || match[1] === 'Amogus' || match[1] === 'Amogus' || match[1] === 'Amogus') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Amogus.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'bane' || match[1] === 'Bane' || match[1] === 'Bane' || match[1] === 'Bane') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Bane.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'bruh' || match[1] === 'Bruh' || match[1] === 'Bruh' || match[1] === 'Bruh') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Bruh.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'kırmızı şortlu' || match[1] === 'Kırmızı şortlu' || match[1] === 'Kırmızı şortlu' || match[1] === 'Kırmızı şortlu') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Kırmızı şortlu.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'ne diyo' || match[1] === 'Ne diyo' || match[1] === 'Ne diyo' || match[1] === 'Ne diyo') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Ne diyo.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'gökte ne var'|| match[1] === 'Gökte ne var'|| match[1] === 'Gökte ne var'|| match[1] === 'Gökte ne var') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Gökte ne var.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'seni'|| match[1] === 'hiç'|| match[1] === 'alakadar'|| match[1] === 'etmez') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Seni hiç alakadar etmez.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'neyi başaramadın' || match[1] === 'Neyi başaramadın' || match[1] === 'Neyi başaramadın' || match[1] === 'Neyi başaramadın') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Neyi başaramadın.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'seni sürekli' || match[1] === 'Seni sürekli' || match[1] === 'Seni sürekli' || match[1] === 'Seni sürekli') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Seni sürekli.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'supra' || match[1] === 'Supra' || match[1] === 'Supra' || match[1] === 'Supra') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Supra.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'vay canına' || match[1] === 'Vay canına' || match[1] === 'Vay canına' || match[1] === 'Vay canına') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Vay canına.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'öyle mi' || match[1] === 'Öyle mi'|| match[1] === 'Öyle mi' || match[1] === 'Öyle mi') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Öyle mi.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else if (match[1] === 'şeymi dostum'|| match[1] === 'Şeymi dostum' || match[1] === 'Şeymi dostum' || match[1] === 'Şeymi dostum') {

        await message.client.sendMessage(
            message.jid, 
            fs.readFileSync("/root/asena2/ses kayıtları/Şeymi dostum.mp3"),
            MessageType.audio, 
           { mimetype: Mimetype.mp3Audio, ptt: true}
        )
    }
    else {
        await message.client.sendMessage(
            message.jid, 
            '```Bulunamadı! Varolan Liste:```\n\n💿404\n💿Adam ya adam\n💿Adam öldü\n💿Allah allah\n💿Amogus\n💿Arkadaşlar ben gidiyorum\n💿Bak sen\n💿Bakıyorsun öyle\n💿Bane\n💿Bav çiki\n💿Bağırma lan\n💿Bruh\n💿Ehe\n💿Gökte ne var\n💿Hanım hanım\n💿Kurumuş boğazım\n💿Kırmızı şortlu\n💿Ne diyo\n💿Neyi başaramadın\n💿Sağda tükür\n💿Seni hiç alakadar etmez\n💿Seni sürekli\n💿Sikmeseler bari\n💿Supra\n💿Tek kankam\n💿Vay canına\n💿Öyle mi\n💿Şeymi dostum',
            MessageType.text
        )
    }
}));
