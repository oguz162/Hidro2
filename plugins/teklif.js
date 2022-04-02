const Asena = require('../events');
const {MessageType, MessageOptions} = require('@adiwajshing/baileys');
const Config = require('../config');
const got = require('got');

Asena.addCommand({pattern: 'teklif ?(.*)', fromMe: true}, (async (message, match) => {
    
    if (match[1] === '') return await message.sendMessage('*zahmet olmassa bi isim yaz be*!');
    
    await message.sendMessage('*şimdi sana güzel bir teklifte bulunacağım hazırmısın*. *' + match[1] + '*');
    
    await new Promise(r => setTimeout(r, 2000));

    await message.sendMessage('*Sen benim çikolatamsın*\n\n╔╦╦\n╠╬╬╬╣\n╠╬╬╬╣ I ♥\n╠╬╬╬╣\n╚╩╩╩╝');

    await new Promise(r => setTimeout(r, 2000));

    await message.sendMessage('*Sen benim en güzel gecemsin*\n\n★ ° . *　　　°　.　°☆ 　. * ● ¸ \n. 　　　★ 　° :. ★　 * • ○ ° ★　 \n.　 * 　.　 　　　　　. 　 \n° 　. ● . ★ ° . *　　　°　.　°☆ \n　. * ● ¸ . 　　　★ 　° :●. 　 * \n• ○ ° ★　 .　 * 　.　 　　　　　.\n 　 ° 　. ● . ★ ° . *　　　°　.　\n°☆ 　. * ● ¸ . 　　　★ 　\n° :. 　 * • ○ ° ★　 .　 * 　.　 \n　★　　　　. 　 ° 　.  . 　    ★　 　　\n° °☆ 　¸. ● . 　　★　★ \n° . *　　　°　.　°☆ 　. * ● ¸ . \n★ ° . *　　　°　.　°☆ 　. * ● ¸ \n. 　　　★ 　° :. 　 * • ○ ° ★　 \n.　 * 　.　 　★     ° :.☆*');

    await new Promise(r => setTimeout(r, 2000));

    await message.sendMessage('*Sen benim en güzel şarkımsın*\n\n*Sehabe* - *Başkası haram*\n0:35 ━❍──────── -5:32\n↻     ⊲  Ⅱ  ⊳     ↺\nVOLUME: ▁▂▃▄▅▆▇ 100%');

    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*Sen benim ayıcığımsın*\n\n───▄▀▀▀▄▄▄▄▄▄▄▀▀▀▄───\n───█▒▒░░░░░░░░░▒▒█───\n────█░░█░░░░░█░░█────\n─▄▄──█░░░▀█▀░░░█──▄▄─\n█░░█─▀▄░░░░░░░▄▀─█░░█');

    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*Sen benim kediciğimsin*\n\n──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█');
    
    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*Seninle evlenip kendi evimize taşınsak ve bir aile olsak*\n\n▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\n▒▒▄▄▄▒▒▒█▒▒▒▒▄▒▒▒▒▒▒▒▒\n▒█▀█▀█▒█▀█▒▒█▀█▒▄███▄▒\n░█▀█▀█░█▀██░█▀█░█▄█▄█░\n░█▀█▀█░█▀████▀█░█▄█▄█░\n███████▀█████████████');
    
    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*ailece televizyon izleyip*\n\n░▀▄░░▄▀\n▄▄▄██▄▄▄▄▄░▀█▀▐░▌\n█▒░▒░▒░█▀█░░█░▐░▌\n█░▒░▒░▒█▀█░░█░░█\n█▄▄▄▄▄▄███══════');
    
    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*ailece bide tatile gitsek*\n\n░░▄▀▀▀▄░▄▄░░░░░░╠▓░░░░\n░░░▄▀▀▄█▄░▀▄░░░▓╬▓▓▓░░\n░░▀░░░░█░▀▄░░░▓▓╬▓▓▓▓░\n░░░░░░▐▌░░░░▀▀███████▀\n▒▒▄██████▄▒▒▒▒▒▒▒▒▒▒▒▒');
                          
    await new Promise(r => setTimeout(r, 2000));
    
    await message.sendMessage('*bunların hepsini kabul edip*');
                          
    await new Promise(r => setTimeout(r, 2000));
    
// buton mesajı!
    const buttons = [
        {buttonId: 'id1', buttonText: {displayText: 'elbette hayır'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'tabiki evet'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'neeeeee hayırr'}, type: 1},
        
      ]

      const buttonMessage = {
          contentText: "*benimle bir ömüre varmısın*\n\n╔══╗\n╚╗╔╝\n╔╝(¯`v´¯)\n╚══.¸. *Güzellik*",
          footerText: 'Zlose',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));
