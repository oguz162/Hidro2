FROM fusuf/whatsasena:latest

RUN git clone https://oguz162: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@github.com/oguz162/asena2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
