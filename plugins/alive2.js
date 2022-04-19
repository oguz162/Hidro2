const Asena = require('../events');
const {
    MessageType,
    MessageOptions,
    Mimetype
} = require('@adiwajshing/baileys');
const Config = require('../config');

Asena.addCommand({pattern: 'button',fromMe: true}, (async (message, match) => {

    const rows = [{
            title: '.ping',
            description: "\n\n\n◁==internet pinginizi ölçer"
        },
        {
            title: '.speedtest',
            description: "\n\n\n*◁==internet hızınızı ölçer"
        }
    ]

    const sections = [{
        title: "Section 1",
        rows: rows
    }]

    const button = {
        buttonText: '*web panel*!',
        description: "*web hizmetleri*",
        sections: sections,
        listType: 1

    }

    await message.client.sendMessage(message.jid, button, MessageType.listMessage)

}));
