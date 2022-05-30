FROM fusuf/whatsasena:latest

RUN git clone https://oguz162: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@github.com/oguz162/Hidro2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
