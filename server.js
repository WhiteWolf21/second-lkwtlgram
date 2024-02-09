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
bot.start((ctx) => ctx.reply('Welcome'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on(message('sticker'), (ctx) => ctx.reply('👍'))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()

// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'))
process.once('SIGTERM', () => bot.stop('SIGTERM'))