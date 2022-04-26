const Asena = require('../events');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const Config = require('../config');
const hrs = new Date().getHours({ timeZone: 'Europe/Istanbul' })

const Language = require('../language');
const Lang = Language.getString('system_stats');
	
	Asena.addCommand({pattern: 'alive', fromMe: true, desc: Lang.ALIVE_DESC}, (async (message, match) => {
	       
	       var r_text = new Array ();

        r_text[0] ="https://www.hdwallpapers.in/download/android_logo_vs_apple_hd_apple-HD.jpg";
        r_text[1] ="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?cs=srgb&dl=pexels-markus-spiske-1089438.jpg&fm=jpg";
        r_text[2] ="https://images.pexels.com/photos/374559/pexels-photo-374559.jpeg?cs=srgb&dl=pexels-digital-buggu-374559.jpg&fm=jpg";
        r_text[3] ="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?cs=srgb&dl=pexels-thisisengineering-3861969.jpg&fm=jpg";
        r_text[4] ="https://images.pexels.com/photos/276452/pexels-photo-276452.jpeg?cs=srgb&dl=pexels-pixabay-276452.jpg&fm=jpg";
        r_text[5] ="https://images.pexels.com/photos/693859/pexels-photo-693859.jpeg?cs=srgb&dl=pexels-hitesh-choudhary-693859.jpg&fm=jpg";
        r_text[6] ="https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?cs=srgb&dl=pexels-markus-spiske-1089438.jpg&fm=jpg";
        r_text[7] ="https://images.pexels.com/photos/270404/pexels-photo-270404.jpeg?cs=srgb&dl=pexels-pixabay-270404.jpg&fm=jpg";
        r_text[8] ="https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg?cs=srgb&dl=pexels-sora-shimazaki-5926382.jpg&fm=jpg";
        r_text[9] ="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?cs=srgb&dl=pexels-christina-morillo-1181675.jpg&fm=jpg";
        r_text[10] ="https://images.pexels.com/photos/3937174/pexels-photo-3937174.jpeg?cs=srgb&dl=pexels-sharad-kachhi-3937174.jpg&fm=jpg";
        r_text[11] ="https://images.pexels.com/photos/4665064/pexels-photo-4665064.jpeg?cs=srgb&dl=pexels-otavio-fonseca-4665064.jpg&fm=jpg";
        r_text[12] ="https://images.pexels.com/photos/4792733/pexels-photo-4792733.jpeg?cs=srgb&dl=pexels-anete-lusina-4792733.jpg&fm=jpg";
        r_text[13] ="https://images.pexels.com/photos/1820388/pexels-photo-1820388.jpeg?cs=srgb&dl=pexels-tito-noverian-putra-1820388.jpg&fm=jpg";
        r_text[14] ="https://images.pexels.com/photos/326520/pexels-photo-326520.jpeg?cs=srgb&dl=pexels-tranmautritam-326520.jpg&fm=jpg";
        r_text[15] ="https://images.pexels.com/photos/115655/pexels-photo-115655.jpeg?cs=srgb&dl=pexels-lee-campbell-115655.jpg&fm=jpg";
        r_text[16] ="https://images.pexels.com/photos/370717/pexels-photo-370717.jpeg?cs=srgb&dl=pexels-andre-furtado-370717.jpg&fm=jpg";
        r_text[17] ="https://images.pexels.com/photos/2150/sky-space-dark-galaxy.jpg?cs=srgb&dl=pexels-pixabay-2150.jpg&fm=jpg";
        r_text[18] ="https://images.pexels.com/photos/816608/pexels-photo-816608.jpeg?cs=srgb&dl=pexels-alex-andrews-816608.jpg&fm=JGP";
        
        var plk_say = new Date().toLocaleString('LK', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
        const get_localized_date = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
        var plk_here = new Date().toLocaleDateString(get_localized_date)
        var afnplk = '```⏱ Saat :' + plk_say + '```\n\n ```📅 Tarih :' + plk_here + '```'
        var wish = ''
        if (hrs >= 06 && hrs <= 12) wish = 'ⒼÜⓃⒶⓎⒹⒾⓃ ⛅'
        if (hrs >= 12 && hrs <= 18) wish = 'İ𝕐İ ÖĞ𝕃𝔼ℕ𝕃𝔼ℝ 🌞'
        if (hrs >= 18 && hrs <= 00) wish = 'İ𝓨İ 𝓐𝓚Ş𝓐𝓜𝓛𝓐𝓡 🌥'
        if (hrs >= 00 && hrs <= 06) wish = 'İ𝕐İ 𝔾𝔼ℂ𝔼𝕃𝔼ℝ 🌙'

        var i = Math.floor(19*Math.random())
        var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })
        await message.client.sendMessage(message.jid, Buffer.from(respoimage.data), MessageType.image, {mimetype: Mimetype.png, caption: '' + wish + '\n*'+Config.ALIVEMSG+'*\n*Senin için tam potansiyel çalışıyorum*\n\n```𝔅𝔬𝔱 𝔖𝔞𝔥𝔦𝔟𝔦:``` *'+Config.OWNER+'*\n```𝔅𝔬𝔱 İ𝔰𝔪𝔦:``` *'+Config.BOT+'*\n```ℕ𝕌𝕄𝔸ℝ𝔸:``` '+Config.PHONE+'\n```𝕍𝔼ℝ𝕊İ𝕆ℕ:``` '+Config.VERSİON+'\n```𝕎𝕆ℝ𝕂𝕋𝕐ℙ𝔼:``` *'+Config.WORKTYPE+'*\n```ℍ𝔸ℕ𝔻𝕃𝔼ℝ𝕊:``` '+Config.HANDLERS+'\n⏱ 𝔖𝔞𝔞𝔱: ```' + plk_say + '```\n📅 𝔗𝔞𝔯𝔦𝔥: ```' + plk_here + '```' }
        )
  
}));
