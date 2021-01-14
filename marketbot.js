const Discord = require(`discord.js`);
const bot = new Discord.Client( {
  fetchAllMembers: true
  
});


bot.login(process.env.token);

function catchErr (err) {
    
    

    bot.users.cache.get("342630541079609355").send("Hiba: ```" + err + "```");

}

  

bot.on (`ready`, () => {
   
    try {
    console.log(`Bejelentkezve mint ${bot.user.tag}!`);
    const status =  `${bot.guilds.cache.size} szeró`; 
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
       
      
        
        let fog = args[args.length - 1];

        uzenet.shift();
        uzenet.shift();
        uzenet.join(" ");

     
      
        
        if (message.author == bot.user) {
            return;
        }

 

        
     if (message.author.id === "342630541079609355") {

    
   
            if (message.content.startsWith("!pub")) {

              
            
                         bot.channels.cache.get(args[1]).send(`${uzenet.join(" ")}`);
           
        
                                return;
                              
                     }

             


            if (message.content.startsWith("!dm")) {

             
         
                           bot.users.cache.get(args[1]).send(`${uzenet.join(" ")}`);
                          
                               message.channel.send(`Az üzenet sikeresen kiküldve **${bot.users.cache.get(args[1]).username}** számára.`);
             
                           return;
                        
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

 bot.users.cache.get("342630541079609355").send(infEmbed);
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
 
  if (message.content.toLowerCase().includes("mlk")) {

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

           bot.users.cache.get("342630541079609355").send(mfkembed);
          
             
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



    }
    catch (err) {
        catchErr (err, message);
    }

} );

// szerver join

bot.on("guildMemberAdd", guildMember => {

  try {

     if (guildMember.guild.id === "510895729351327785") {

        guildMember.send(`***Üdv a ${guildMember.guild.name} szerveren! \n Esetleg ha kíváncsi lennél a Magyar LoL Közösség szerverünkre is, itt egy meghívó, amivel felmehetsz oda is társalogni:*** \n https://discord.gg/fvYWhXp 😎`);
      

     }

  }

  catch (err) {

     catchErr(err, message);
     
  }
      

});
