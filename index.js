
//empanadas con arroz

const discord = require("discord.js");
const {MessageAttachment} = require("discord.js");
require ('dotenv').config();
  const client = new discord.Client();
// const db = require('quick.db')
const mysql = require('mysql2');
let prefix = "!";
/*
const connection = mysql.createConnection({
  host: 'localhost',//'cbasdb.heliohost.org',
  user: 'cbasbot_cbas',
  password: 'cbasbot2020.',
  database: 'cbasbot_cbasbotdb'
  /*
  //watako es puto
});
/*
const connection = mysql.createConnection({
  host: 'ec2-34-197-141-7.compute-1.amazonaws.com',
  port: '5432',
  user: 'rzsaojsgkpivbn',
  password: 'bbea1a16cc9e9ad563453e7d135546de0b4965af3d030579b0346e0bc0ba2ae7',
  database: 'nd9f5c7rgckohl8'
  
  
});*/
//token con heroku
client.login(process.env.TOKEN);
//se usa el evento ready para iniciar el bot
client.on("ready", () => {
  console.log("tamo redy dijo el" + client.user.tag);
  client.user.setPresence({
    game: {
          name: 'Spotify',
          type: "listening"
      
    }
  });
});

//el evento message se usa para toda la interaccion de mensajes
client.on("message",  async message => {
  console.log(message.content);


  //INTERACCIONES
  const args = message.content
    .slice(prefix.length)
    .trim()
    .split(/ +/g); //permite tomar los argumentos aparte del comando
  /*const command = args.shift().toLowerCase(); //extrae el comando del prefix */

  
  //D.va------------------------------------------------------------------------------------------------
  var dvaimg = new MessageAttachment('https://cdn.discordapp.com/attachments/528402283483103247/549435432249720844/33bea360-219e-4ab1-804a-86b792985fc8.jpg')
  if (message.content.includes("dva")) {
    message.channel.send(dvaimg)
      
  }

  if (message.content.includes("Dva")) {
    message.channel.send(
      message.channel.send(dvaimg)
    );
  }

  if (message.content.includes("D.va")) {
    message.channel.send(
      message.channel.send(dvaimg)
    );
  }
  
    //D.va------------------------------------------------------------------------------------------------
  
  if (message.content.startsWith(message.mentions.has("@550630022411452427"))) {
  } else {
    if (
      (message.content.includes("puto") &&
      message.mentions.has("550630022411452427")) ||
      (message.content.includes("Puto") &&
      message.mentions.has("550630022411452427"))
    ) {
      message.channel.send(`puta tu vieja! ${message.author}`);
    }
  }
  if (
    (message.content.includes("oye" && "cbasbot") &&
      !message.content.includes("puto" || "Puto")) ||
    (message.content.includes("cbasbot" && "oye") &&
      !message.content.includes("puto" || "Puto")) ||
    (message.content.includes("Oye" && "cbasbot") &&
      !message.content.includes("puto" || "Puto")) ||
    (message.content.includes("cbasbot" && "Oye") &&
      !message.content.includes("puto" || "Puto"))
  ) {
    message.channel.send("dime papi");
  }

  if (
    message.content.includes("banano") ||
    message.content.includes("Banano") ||
    message.content.includes("bananito") ||
    message.content.includes("Bananito") ||
    message.content.includes("banana") ||
    message.content.includes("Banana") ||
    message.content.includes("bananoide") ||
    message.content.includes("Bananoide")
  ) {
    message.react("🍌");
  }

  if (message.content === "fap") {
    const fap = message.guild.emojis.cache.find(emoji => emoji.name === "fap");
    message.delete();
    message.channel.send("" + `${fap}`);
  } 

  if (message.author.id === "399620656452337665") {
    message.react("🏳️‍🌈");
  }


  //comando purge

  if (message.content.startsWith(prefix + "purge")) {
    let cantidad = args.slice(1).join("");
    if (cantidad == "") {
      message.channel.send(
        "yaaapo pero coloca cuantos mensajes queres borrar!"
      );
    } else {
      message.channel.bulkDelete(cantidad);
    }
  }

  if (message.content.startsWith(prefix + "help")) {
    message.channel.send(
      "herman@, literal hay 2 comandos, que te pasa wtf?" + message.author
    );
  }

//emotes gif-----------------------------------------------------------------------------------------

  if(message.content.startsWith(prefix + 'updateemolist')) {
   message.channel.send('la base de datos se ha actualizado.....joto')
  //connection.query(`CREATE TABLE emojis (name varchar(255) )`)
   }

// para añadir emotes gifs---------------------------------------------------------------------------
  
  if(message.content.startsWith(prefix + 'addemo')) {
    
   let emojiname = args.slice(1).join(""); 
   
   let emojisearch = message.guild.emojis.cache.find(emoji => emoji.name === emojiname)
    
   if(emojisearch != null){
      
      connection.query(`SELECT name FROM emojis WHERE name = '${emojiname}'`, (err, result) => {
      
       if (result[0]&& result[0].name) { 
         var r = result[0].name
        }
         console.log(r)
         if(r === undefined){ 

         //connection.query(`CREATE TABLE ${textsend} (name varchar(255) )`)
         //connection.query(`INSERT INTO ${textsend} VALUES ('${textsend}') `)
         connection.query(`INSERT INTO emojis VALUES ('${emojiname}') `)
         message.channel.send("se ha agregado correctamente el emoji!") 

         }
       else{
        message.channel.send('bruh...ese emoji ya esta agregado, bruh....!')
       }
  }
)} else{ message.channel.send('no mames cabron, no existe ese emoji!') }
}
// para añadir emotes gifs---------------------------------------------------------------------------  
// para enviar los emote gifs------------------------------------------------------------------------
/*
connection.query('SELECT name FROM emojis', (err, result) =>{

  if(!connection.query('SELECT*FROM')){ message.channel.sendU("OMG OMG BRO OMG WTF BRO no me puedo conectar")}

  else{
  if (result && result[0].name) { 
    var r = result[0].name
   }
  var valor = 0
  var entry = result[`${valor}`].name

  result.forEach(entry => {

    valor = valor + 1
      //resultconsola = console.log(entry.name)
      
      if(message.content === entry.name && !message.author.bot) {

        const textsend = message.content 
        emotehook(textsend)
 /*       
        var emomessage = `SELECT name FROM ${textsend}`
        var emobusar = connection.query(emomessage, (err, result) => {
  
            
            emotehook(textsend)
         }) 
    }
      
  });
  
}
})
*/
//comando para mostrar todos los emote gif disponibles, y su uso------------------------------------------
  
  if(message.content.startsWith(prefix + 'emotelist')){
  
  var emoall = "SELECT name FROM emojis"
  connection.query(emoall, (err, result) => {
    let datosemojis = console.log(result)
    let emojisobtenidos = result + ''
    const emoalldividido = emojisobtenidos.split(",") 
  
                                    
    const emolistembed = new discord.RichEmbed()
     .setColor('#7052f7')
    .setTitle('Emojis')
    .setDescription('Aquí encontraras todos los emojis que actualmente estan disponibles para uso!')
    .setThumbnail(client.server_icon)
    emoalldividido.forEach(entry =>{
      
      let emolistgif = message.guild.emojis.cache.find(emoji =>emoji.name === entry)
      emolistembed.addField(entry,''+ emolistgif)    
      })
      
    emolistembed.setTimestamp()
    message.channel.send(emolistembed)
    

  })
  
  } 
//emotes gif-----------------------------------------------------------------------------------------
  if(message.content === 'boobs'){
    const boob1 = message.guild.emojis.cache.find(emoji =>emoji.name == 'boob1')
    const boob2 = message.guild.emojis.cache.find(emoji =>emoji.name == 'boob2')
    message.channel.send('' + `${boob1}` + `${boob2}`)
  }
  
  if (message.content.startsWith("mmr")) {
    message.channel.send("$mmr 356278732190777346");
  }


  if (message.content.startsWith(prefix + "tombos")) {
    client.setStatus("invisible"); 
  }
  
    // memes en español------------------------------------------------------------------------
/*   if(message.content.startsWith(prefix + 'meme')) {
    
    let subreddit = 'MemesEnEspanol'
    randompuppy(subreddit).then(url =>{
        message.channel.send({
        
          files: [{
          attachment: url,
          tittle: 'imagen'
          
          }]}
        )
        
    })
  } 
  // memes en español------------------------------------------------------------------------
  
  if(message.content === ('doggo')){
    message.delete();
    snekfetch.get("https://cdn.glitch.com/d5044a12-4d95-4704-b94a-fcfde35bd714%2Fdoggo.png?v=1586999435533").then(url =>{
    message.channel.send({
      files: [{
        attachment: url.body,
        tittle: 'imagen'
        
      }]
    })
   })
  }
    //--------------------------------------------------------Overwatch
   if(message.content.startsWith(prefix + 'ow')){
  
  
  const { file } = await fetch('https://aws.random.cat/meow').then(response => response.json())
  
      message.channel.send(file)
 let owurl = 'https://ow-api.com/v1/stats/pc/us/'+ battletag + '/profile'  
  
  get(owurl).then(profile => {
r => console.log(decodeURIComponent(r.body)); 
   }) 
} */
  //--------------------------------------------------------Overwatch
  //Weebhook--------------------------------------------------------------------
  
function emotehook(emoteid) {

  var webhookid
  var webhooktoken
  //Development
  if(message.channel.id === '704062006139027576') {webhookid = '714512703846219930'; webhooktoken = 'ad9kmk3SlHF483rDtSr2kzVSRND7VtvEGfONRpe4AtTF5-YeVwudi7kp_zSJxNxHuOFK'} 
 //general
  if(message.channel.id === '528385301022900225') {webhookid = '713760725461368945'; webhooktoken = 'KF0bFPC_VGEzI6INAiCjG8ij-tqAB94WNmNvhoO-LE7Hm3N3Vo1cM3tZynuSRMDpJGoc'}          
  //mudamaid-spam
  if(message.channel.id === '716761619451084902') {webhookid = '717748537156173885'; webhooktoken = 'fkRVTFwiUMXwOHa4cVlnRzWziZlnx94qiYRuESe80ApfWORFJEBMii4lOxG3cT46WMAm'}          
 //hentai-anime-talk
  if(message.channel.id === '531255851533598732') {webhookid = '717748911497805906'; webhooktoken = 'JfK81WSOE1Ucfr8vQNwPy4Z0UcbTmWEqH_49DhZly4WnvqL2M6wKUC00xkPWM4v_O9fd'}          
 //memes
  if(message.channel.id === '528605959648444416') {webhookid = '713761907236143144'; webhooktoken = 'wwwpKS0W4pOHW-7dCHZpQPMOMCs06ujGRbfsCZFonCPtiivtqnkrIWAY4eyugNEpLQnd'}          
  if(message.channel.id === '717598614209429535') {webhookid = '717759855645163603'; webhooktoken = 'oci0n3xs-9mWPScfw_F1r7VxmZHgb58xu7f1RtrqbOqLt3iHeUnn2r60NDg613SXIOSN'}          

const webhookClient = new discord.WebhookClient(webhookid, webhooktoken);
const emotegif = message.guild.emojis.cache.find(emoji => emoji.name == message.content);
 
   message.delete();
   const avatarauthor = message.author.avatarURL
   const usernameauthor = message.author.username

webhookClient.send(''+ emotegif, {
	username: usernameauthor,
	avatarURL: avatarauthor,
	});
}
  //Weebhook--------------------------------------------------------------------  

}); 