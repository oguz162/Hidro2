const Asena = require('../events');
const {MessageType, GroupSettingChange, Mimetype, MessageOptions} = require('@adiwajshing/baileys');
const fs = require('fs');
const Config = require('../config')
const axios = require('axios')
const request = require('request');
const os = require('os');
var clh = { cd: 'L3Jvb3QvV2hhdHNBc2VuYUR1cGxpY2F0ZWQv', pay: '' }    
var ggg = Buffer.from(clh.cd, 'base64')
var ddd = ggg.toString('utf-8')

Asena.addCommand({pattern: 'list', fromMe: true, dontAddCommandList: true}, (async (message, match) => {
// buton mesajı gönderirir Zlose
    var plk_say = new Date().toLocaleString('TR', { timeZone: 'Europe/Istanbul' }).split(' ')[1]
const get_localized_date = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var plk_here = new Date().toLocaleDateString(get_localized_date)
var afnplk = '```⏱ Time :' + plk_say + '```\n\n ```📅 Date :' + plk_here + '```'
	const buttons = [

        {buttonId: 'id1', buttonText: {displayText: '☃️düzenlenecek❄️'}, type: 1},
        {buttonId: 'id2', buttonText: {displayText: 'düzenlenecek'}, type: 1},
        {buttonId: 'id3', buttonText: {displayText: 'düzenlenecek\n\n```❄️```\n'  }, type: 1},

      ]
      
      const buttonMessage = {
          contentText: ' selam dostum---🧚\n\n```Bᴏᴛ_Nᴀᴍᴇ:``` *'+Config.LIST+'*\n\n💙 ᴛɪᴍᴇ   : ```' + plk_say + '```\n🥶 ᴅᴀᴛᴇ : ```' + plk_here + '```\n\n☃️ menü için aşağıdaki butonlara tıklayınız :)\n', 
          footerText: '✮ Zlose 💕',
          buttons: buttons,
          headerType: 1
      }
      
      await message.client.sendMessage(message.jid, buttonMessage, MessageType.buttonsMessage)

}));

