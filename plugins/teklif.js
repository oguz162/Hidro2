const Asena = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');
const got = require('got');

Asena.addCommand({pattern: 'teklif ?(.*)', fromMe: true}, (async (message, match) => {
    
    if (match[1] === '') return await message.sendMessage('*zahmet olmassa bi isim yaz be*!');
    
    await message.sendMessage('*şimdi sana güzel bir teklifte bulunacağım hazırmısın* *' + match[1] + '*');
    
    await new Promise(r => setTimeout(r, 2000));

    await message.sendMessage('*Sen benim çikolatam*\n\n╔╦╦\n╠╬╬╬╣\n╠╬╬╬╣ I ♥\n╠╬╬╬╣\n╚╩╩╩╝');

    await new Promise(r => setTimeout(r, 2000));

    await message.sendMessage('*Sen benim en güzel gecem*\n\n★ ° . *　　　°　.　°☆ 　. * ● ¸ \n. 　　　★ 　° :. ★　 * • ○ ° ★　 \n.　 * 　.　 　　　　　. 　 \n° 　. ● . ★ ° . *　　　°　.　°☆ \n　. * ● ¸ . 　　　★ 　° :●. 　 * \n• ○ ° ★　 .　 * 　.　 　　　　　.\n 　 ° 　. ● . ★ ° . *　　　°　.　\n°☆ 　. * ● ¸ . 　　　★ 　\n° :. 　 * • ○ ° ★　 .　 * 　.　 \n　★　　　　. 　 ° 　.  . 　    ★　 　　\n° °☆ 　¸. ● . 　　★　★ \n° . *　　　°　.　°☆ 　. * ● ¸ . \n★ ° . *　　　°　.　°☆ 　. * ● ¸ \n. 　　　★ 　° :. 　 * • ○ ° ★　 \n.　 * 　.　 　★     ° :.☆*');

    await new Promise(r => setTimeout(r, 2000));

    await message.sendMessage('*Sen benim en güzel şarkım*\n\n*Sehabe* - *Başkası haram*\n0:35 ━❍──────── -5:32\n↻     ⊲  Ⅱ  ⊳     ↺\nVOLUME: ▁▂▃▄▅▆▇ 100%');

    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*Sen benim ayıcığım*\n\n───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───\n───█▒▒░░░░░░░░░▒▒█───\n────█░░█░░░░░█░░█────\n─▄▄──█░░░▀█▀░░░█──▄▄─\n█░░█─▀▄░░░░░░░▄▀─█░░█');

    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*Sen benim kediciğim*\n\n──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█');
    
    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*Seninle evlenip kendi evimize taşınsak ve bir aile olsak*\n\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒\n▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒\n░█▀█▀█░█▀██░█▀█░█▄█▄█░\n░█▀█▀█░█▀████▀█░█▄█▄█░\n███████▀█████████████');
    
    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*ailece televizyon izlesek*\n\n░▀▄░░▄▀\n▄▄▄██▄▄▄▄▄░▀█▀▐░▌\n█▒░▒░▒░█▀█░░█░▐░▌\n█░▒░▒░▒█▀█░░█░░█\n█▄▄▄▄▄▄███══════');
    
    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*ailece bide tatile gitsek*\n\n░░▄▀▀▀▄░▄▄░░░░░░╠▓░░░░\n░░░▄▀▀▄█▄░▀▄░░░▓╬▓▓▓░░\n░░▀░░░░█░▀▄░░░▓▓╬▓▓▓▓░\n░░░░░░▐▌░░░░▀▀███████▀\n▒▒▄██████▄▒▒▒▒▒▒▒▒▒▒▒▒');
                          
    await new Promise(r => setTimeout(r, 2000));
    
// buton mesajı!
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 'elbette hayır'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'tabiki evet'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'neeeeee hayırr'}, type: 1},
        
      ]
      
      const buttonMessage = {
          contentText: "*benimle bir ömüre varmısın*\n\n╔══╗\n╚╗╔╝\n╔╝(¯`v´¯)\n╚══.¸. *' + match[1] + '*",
          footerText: '🍅🍅🍅',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
