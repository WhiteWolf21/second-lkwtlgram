var express = require('express');
var app = express();
var path = require('path');
var public = path.join(__dirname, '');

const { Telegraf } = require('telegraf')
const { message } = require('telegraf/filters')

// viewed at http://localhost:8080
app.get('/', function(req, res) {
    res.sendFile(path.join(public, 'index.html'));
});

app.use('/', express.static(public));

app.listen(8000);

const bot = new Telegraf("6949645327:AAG7DvPiW0ZRyKvUmeKIursUbQv2Ed7k0wc")
bot.launch();
  bot.on(message(), (ctx) => {
    return ctx.replyWithHTML(`💰💰🎡<b>Chào mừng tới Vòng Quay May Mắn</b>🎡💰💰

Hãy sẻ chia với <b>bạn bè</b> thông qua <b>app link</b> - https://t.me/unluckywheelbot/lucky !!!
`);
  });