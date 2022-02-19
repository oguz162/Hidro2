FROM fusuf/whatsasena:latest

RUN git clone https://oguz162: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@github.com/oguz162/asena2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
