/*const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const hrs = new Date().getHours({ timeZone: 'Europe/Istanbul' })

const Language = require('../language');
const Lang = Language.getString('system_stats');
	
	Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
	       
	       var r_text = new Array ();

        r_text[0] ="/root/asena2/media/foto/android_logo_vs_apple_hd_apple.jpg";
        r_text[1] ="/root/asena2/media/foto/images.jpeg";
        r_text[2] ="/root/asena2/media/foto/pexels-alex-andrews-816608.jpg";
        r_text[3] ="/root/asena2/media/foto/pexels-andre-furtado-370717.jpg";
        r_text[4] ="/root/asena2/media/foto/pexels-anete-lusina-4792733.jpg";
        r_text[5] ="/root/asena2/media/foto/pexels-christina-morillo-1181675.jpg";
        r_text[6] ="/root/asena2/media/foto/pexels-hitesh-choudhary-693859.jpg";
        r_text[7] ="/root/asena2/media/foto/pexels-lee-campbell-115655.jpg";
        r_text[8] ="/root/asena2/media/foto/pexels-markus-spiske-1089438.jpg";
        r_text[9] ="/root/asena2/media/foto/pexels-otavio-fonseca-4665064.jpg";
        r_text[10] ="/root/asena2/media/foto/pexels-pixabay-2150.jpg";
        r_text[11] ="/root/asena2/media/foto/pexels-pixabay-270404.jpg";
        r_text[12] ="/root/asena2/media/foto/pexels-sharad-kachhi-3937174.jpg";
        r_text[13] ="/root/asena2/media/foto/pexels-sora-shimazaki-5926382.jpg";
        r_text[14] ="/root/asena2/media/foto/pexels-thisisengineering-3861969.jpg";
        r_text[15] ="/root/asena2/media/foto/pexels-tito-noverian-putra-1820388.jpg";
        r_text[16] ="/root/asena2/media/foto/pexels-tranmautritam-326520.jpg";
        r_text[17] ="/root/asena2/media/foto/rave_media_1649050802429.jpeg";
        r_text[18] ="/root/asena2/media/foto/1025.jpg";
        r_text[19] ="/root/asena2/media/foto/1026.jpg";
        r_text[20] ="/root/asena2/media/foto/1027.jpg";
        r_text[21] ="/root/asena2/media/foto/1028.jpg";
        r_text[22] ="/root/asena2/media/foto/1029.jpg";
        r_text[23] ="/root/asena2/media/foto/1030.jpg";
        r_text[24] ="/root/asena2/media/foto/1031.jpg";
        r_text[25] ="/root/asena2/media/foto/1032.jpg";
        r_text[26] ="/root/asena2/media/foto/1320.jpg";
        r_text[27] ="/root/asena2/media/foto/1321.jpg";
        r_text[28] ="/root/asena2/media/foto/IMG_20220110_001032_702.jpg";
        r_text[29] ="/root/asena2/media/foto/Zero two.jpg";
        
        var plk_say = new Date().toLocaleString('tr', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        var plk_here = new Date().toLocaleDateString(get_localized_date)
        var afnplk = '```⏱ Saat :' + plk_say + '```\n\n ```📅 Tarih :' + plk_here + '```'
        var wish = ''
        if (hrs >= 06 && hrs <= 12) wish = 'ⒼÜⓃⒶⓎⒹⒾⓃ ⛅'
        if (hrs >= 12 && hrs <= 18) wish = 'İ𝕐İ ÖĞ𝕃𝔼ℕ𝕃𝔼ℝ 🌞'
        if (hrs >= 18 && hrs <= 00) wish = 'İ𝓨İ 𝓐𝓚Ş𝓐𝓜𝓛𝓐𝓡 🌥'
        if (hrs >= 00 && hrs <= 06) wish = 'İ𝕐İ 𝔾𝔼ℂ𝔼𝕃𝔼ℝ 🌙'

        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '' + wish + '\n*'+Config.ALIVEMSG+'*\n*Senin için tam potansiyel çalışıyorum*\n\n```𝔅𝔬𝔱 𝔖𝔞𝔥𝔦𝔟𝔦:``` *'+Config.OWNER+'*\n```𝔅𝔬𝔱 İ𝔰𝔪𝔦:``` *'+Config.BOT+'*\n```ℕ𝕌𝕄𝔸ℝ𝔸:``` '+Config.PHONE+'\n```𝕍𝔼ℝ𝕊İ𝕆ℕ:``` '+Config.VERSİON+'\n```𝕎𝕆ℝ𝕂𝕋𝕐ℙ𝔼:``` *'+Config.WORKTYPE+'*\n```ℍ𝔸ℕ𝔻𝕃𝔼ℝ𝕊:``` '+Config.HANDLERS+'\n⏱ 𝔖𝔞𝔞𝔱: ```' + plk_say + '```\n📅 𝔗𝔞𝔯𝔦𝔥: ```' + plk_here + '```' }
        )
  
}));
*/
