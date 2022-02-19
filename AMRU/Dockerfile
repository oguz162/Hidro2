FROM fusuf/whatsasena:latest

RUN git clone https://oguz162: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@github.com/oguz162/asena2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
