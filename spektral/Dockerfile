FROM fusuf/whatsasena:latest

RUN git clone https://oguz162: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@github.com/oguz162/asena2 /root/WhatsAsenaDuplicated
WORKDIR /root/WhatsAsenaDuplicated/
ENV TZ=Europe/Istanbul
RUN npm install supervisor -g
RUN yarn install --no-audit

CMD ["node", "bot.js"]
