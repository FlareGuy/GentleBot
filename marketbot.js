const Discord = require(`discord.js`);
const bot = new Discord.Client( {
  fetchAllMembers: true
  
});


bot.login(process.env.token);

function catchErr (err) {
    
     bot.fetchUser("342630541079609355");

    bot.users.get("342630541079609355").send("Hiba: ```" + err + "```");

}

  

bot.on (`ready`, () => {
   
    try {
    console.log(`Bejelentkezve mint ${bot.user.tag}!`);
    const status = `${bot.guilds.size} szeró`; 
    bot.user.setActivity ( status, {type: "STREAMING", url: "https://www.twitch.tv/flareguy_" });
    
   

    
    
}

catch (err) {
    catchErr (err);
}

});

bot.on ("message", message => {

    try {

        const args = message.content.substring(message.length).split(" ");
        var uzenet = message.content.substring().split(" ");
       
        bot.fetchUser("342630541079609355");
      
        
        let fog = args[args.length - 1];

        uzenet.shift();
        uzenet.shift();
        uzenet.join(" ");

     
      
        
        if (message.author == bot.user) {
            return;
        }

 

        
     if (message.author.id === "342630541079609355") {

    
   
            if (message.content.startsWith("!pub")) {

                if (args[2] === "001") {
                
                    uzenet.shift();

                    bot.channels.get(args[1]).send(`<a:dancin:699674244652466286> ${uzenet.join(" ")}`);

                  return;
                  
                    } else if (args[2] === "002") {
                  
                         uzenet.shift();

                
                               bot.channels.get(args[1]).send(`<a:infinitygift:525965061789974528> ${uzenet.join(" ")}`);

                           return;   

                            } else if (args[2] === "003") {

                            uzenet.shift();
                            
                            bot.channels.get(args[1]).send(`<a:JOGGERS:702443205345411082> ${uzenet.join(" ")}`);
                             
                            return;

                               } else {
            
                                  bot.channels.get(args[1]).send(`${uzenet.join(" ")}`);
           
        
                                return;
                              }
                     }

             


            if (message.content.startsWith("!dm")) {

                if (args[2] === "001") {
                
                    uzenet.shift();

                    bot.users.get(args[1]).send(`<a:dancin:699674244652466286> ${uzenet.join(" ")}`);

                  message.channel.send(`Az üzenet sikeresen kiküldve **${bot.users.get(args[1]).username}** számára.`);

                  return;

                    } else if (args[2] === "002") {
                  
                         uzenet.shift();
                
                               bot.users.get(args[1]).send(`<a:infinitygift:525965061789974528> ${uzenet.join(" ")}`);

                            message.channel.send(`Az üzenet sikeresen kiküldve **${bot.users.get(args[1]).username}** számára.`);

                              return;  
                     
                              }  else if (args[2] === "003") {
 
                                uzenet.shift();
                       
                                 bot.users.get(args[1]).send(`<a:JOGGERS:702443205345411082> ${uzenet.join(" ")}`);

                                 message.channel.send(`Az üzenet sikeresen kiküldve **${bot.users.get(args[1]).username}** számára.`);
                      
                                return;

                                  } else {
         
                                     bot.users.get(args[1]).send(`${uzenet.join(" ")}`);
                          
                                        message.channel.send(`Az üzenet sikeresen kiküldve **${bot.users.get(args[1]).username}** számára.`);
             
                           return;
                        }
                 } 

        } 
        


     
        var fk = [args[args.length - 1], "baz+", "kussolj", "vicci",  "vicces", " ", args[0], " ", " ", " "];
        var gk = Math.floor(Math.random() * fk.length);
 

    let cube = [ `${args[0]}`, `${fog}`];
    let cuberan = Math.floor(Math.random() * cube.length);
           
    

 if (message.channel.type == "dm") {

function cecca () {
    let infEmbed = new Discord.RichEmbed()
 .setTitle ("Privát üzenetet kaptam!")
  .setColor("RANDOM")
  .addBlankField()
  .addField("Üzenet küldője", `${message.author}`)
  .addBlankField()
  .addField("Üzenet tartalma", `${message.content}`)
  .addBlankField()
  .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
  .setTimestamp();

 bot.users.get("342630541079609355").send(infEmbed);
}

cecca();

 
 } else if (message.channel.id === "730449761240481793") {
 
 
        if (message.content)  {
        
        if (args[3] === !undefined) {

            message.channel.send( cube[cuberan] + " " + args[3])
       return;
        }
        
        message.channel.send( cube[cuberan] + " " + fk[gk]);
        
    }
 }
 
  if (message.content.toLowerCase().includes("mfk")) {

       let mfkembed = new Discord.RichEmbed ()

           .setTitle (`Az "mfk" szó megemlítésre került!`)
           .setColor ("RANDOM")
           .addBlankField()
           .addField ("Szerver neve", `${message.author.lastMessage.guild.name}`)
           .addBlankField ()
           .addField ("Üzenet küldője", `${message.author}`)
           .addBlankField ()
           .addField ("Channel neve", `${message.author.lastMessage.channel.name} \n (${message.author.lastMessage.channel.id})`)
           .addBlankField()
           .addField ("Üzenet tartalma", `${message.content}`)
           .addBlankField()
           .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
           .setTimestamp();

           bot.users.get("342630541079609355").send(mfkembed);
          
             
          return;

     }

     if (message.content.toLowerCase().includes("flare")) {
         
    let flareEmbed = new Discord.RichEmbed ()
     
    .setTitle (`A "Flare" szó megemlítésre került!`)
           .setColor ("RANDOM")
           .addBlankField()
           .addField ("Szerver neve", `${message.author.lastMessage.guild.name}`)
           .addBlankField ()
           .addField ("Üzenet küldője", `${message.author}`)
           .addBlankField ()
           .addField ("Channel neve", `${message.author.lastMessage.channel.name} \n (${message.author.lastMessage.channel.id})`)
           .addBlankField()
           .addField ("Üzenet tartalma", `${message.content}`)
           .addBlankField()
           .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
           .setTimestamp();

           bot.users.get("342630541079609355").send(flareEmbed);
 
           return;
     }
 

     if (message.channel.id === "681568233668739091") {

      if (message.content) {
   
        let ghostEmbed = new Discord.RichEmbed ()
   
           .setTitle (`Új üzenet Ghost Admin chatjében!`)
           .setColor ("RANDOM")
           .addBlankField()
           .addField ("Szerver neve", `${message.author.lastMessage.guild.name}`)
           .addBlankField ()
           .addField ("Üzenet küldője", `${message.author}`)
           .addBlankField ()
           .addField ("Channel neve", `${message.author.lastMessage.channel.name} \n (${message.author.lastMessage.channel.id})`)
           .addBlankField()
           .addField ("Üzenet tartalma", `${message.content}`)
           .addBlankField()
           .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
           .setTimestamp();

           bot.users.get("342630541079609355").send(ghostEmbed);

        }

        
        } 
              
        if (message.channel.id === "706552757674442792") {

          if (message.content) {
   
            let ghostt = new Discord.RichEmbed ()
       
               .setTitle (`Új üzenet Ghost Admin chatjében!`)
               .setColor ("RANDOM")
               .addBlankField()
               .addField ("Szerver neve", `${message.author.lastMessage.guild.name}`)
               .addBlankField ()
               .addField ("Üzenet küldője", `${message.author}`)
               .addBlankField ()
               .addField ("Channel neve", `${message.author.lastMessage.channel.name} \n (${message.author.lastMessage.channel.id})`)
               .addBlankField()
               .addField ("Üzenet tartalma", `${message.content}`)
               .addBlankField()
               .setFooter (bot.user.username, "https://cdn.discordapp.com/attachments/649996051159318551/650397196293767189/botlogo_publ2.png")
               .setTimestamp();
    
               bot.users.get("342630541079609355").send(ghostt);
    
            }


        }



        
         

 
 if (message.content.startsWith("!teszt")) {
 
    message.delete();
    message.channel.send("***.....***")

    .then((msg) =>  {

    setTimeout(() => {
       msg.edit("***1....***");
    }, 4000);

         setTimeout(() => {
            msg.edit("***12...***");
          }, 7000);

           setTimeout(() => {
               msg.edit("***123..***");
            }, 10000);
             
              setTimeout(() => {
                  msg.edit("***1234.***");
                }, 13000);
               
                setTimeout(() => {
                    msg.edit("***12345***");
                }, 16000);
                 
                   setTimeout(() => {

                     msg.edit("***Sikeres teszt!***");

                     }, 19000);

  });
}



    }
    catch (err) {
        catchErr (err, message);
    }

} );

// szerver join

bot.on("guildMemberAdd", guildMember => {

  try {

    if (guildMember.guild.id === "352848014731116556")  {


  
      console.log(`${guildMember.user.username} csatlakozott a Valorant szerverre!`);

     

    
      } else if (guildMember.guild.id === "417247359551012871") {

        guildMember.send("***Üdv a Magyar Fortnite Közösség szerverén! \n Esetleg ha kíváncsi lennél a beszélgetős botunkra, itt egy meghívó, amivel felviheted őt a szerveredre társalogni:*** \n https://discord.com/oauth2/authorize?client_id=667793688910626816&permissions=8&scope=bot 😎");
      

      } else if (guildMember.guild.id === "322071698465882112") {

        guildMember.send("***Üdv Ghost4Rider szerverén! \n Esetleg ha kíváncsi lennél a beszélgetős botunkra, itt egy meghívó, amivel felviheted őt a szerveredre társalogni:*** \n https://discord.com/oauth2/authorize?client_id=667793688910626816&permissions=8&scope=bot 😎");

      }

  }

  catch (err) {

     catchErr(err, message);
     
  }
      

})
