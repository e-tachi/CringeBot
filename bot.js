console.log('CRINGE');

const fetch= require('node-fetch');

const Discord = require('discord.js');
const client = new Discord.Client();
client.login('OTEwOTI2NTU3MzI4MDcyNzY0.YZZ8dw.f-LBwfmK341wbhCQkhpE3QGYukE');

client.on('ready', readydiscord);

function readydiscord(){
    console.log('bruh');
}

client.on('message', gotMessage);

async function gotMessage(msg){
    console.log(msg.content);
    if(msg.content==='who is cringe'){
        msg.reply('PARHS');
    }
    else if (msg.content=='!cringe'){

        let url=`https://g.tenor.com/v1/search?q=cringe&key=${process.env.TENORKEY}&limit=8`
        let response = await fetch(url);
        let json= await response.json();
        const index = Math.floor(Math.random()* json.results.length);
        msg.channel.send(json.results[index].url);
    }
}