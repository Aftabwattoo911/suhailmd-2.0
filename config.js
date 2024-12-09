const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_54_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDk3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDM1LFxuICAgICAgICAxODUsXG4gICAgICAgIDkzLFxuICAgICAgICAxOCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMzYsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNjksXG4gICAgICAgIDEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE4NyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyNixcbiAgICAgICAgNzksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDExLFxuICAgICAgICAzOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMzMsXG4gICAgICAgIDYxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjQyLFxuICAgICAgICA5NSxcbiAgICAgICAgMzgsXG4gICAgICAgIDUwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODYsXG4gICAgICAgIDgyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjM4LFxuICAgICAgICA0NixcbiAgICAgICAgMjA2LFxuICAgICAgICA4NyxcbiAgICAgICAgOTYsXG4gICAgICAgIDg4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDIwMixcbiAgICAgICAgODUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNDksXG4gICAgICAgIDU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTEwLFxuICAgICAgICA4NSxcbiAgICAgICAgMjAyLFxuICAgICAgICA0MSxcbiAgICAgICAgMjIxLFxuICAgICAgICA4NSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNjcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMzcsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDgxLFxuICAgICAgICAxODcsXG4gICAgICAgIDQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE4LFxuICAgICAgICA2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjEzLFxuICAgICAgICA4NixcbiAgICAgICAgMTk4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDMsXG4gICAgICAgIDExLFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjE5LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTExLFxuICAgICAgICA0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE4MCxcbiAgICAgICAgNixcbiAgICAgICAgNTgsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAxNzAsXG4gICAgICAgIDI4LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTUsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTMsXG4gICAgICAgIDcsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjI1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNjUsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjEsXG4gICAgICAgIDk3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDExOCxcbiAgICAgICAgNzcsXG4gICAgICAgIDk3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzLFxuICAgICAgICA1NyxcbiAgICAgICAgMzgsXG4gICAgICAgIDVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTIwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgyLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgNDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4NyxcbiAgICAgICAgMTA2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDEwLFxuICAgICAgICAxODcsXG4gICAgICAgIDE4LFxuICAgICAgICA3NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDY5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDM0LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDQyLFxuICAgICAgICA5NixcbiAgICAgICAgMTksXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTg2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTgsXG4gICAgICAgIDUyLFxuICAgICAgICA0MyxcbiAgICAgICAgMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMDUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMzksXG4gICAgICAgIDczLFxuICAgICAgICA0NixcbiAgICAgICAgNjksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTksXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgNDEsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTYsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjE2LFxuICAgICAgICA0MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTIyLFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwickd0b2JwdzYwYkxYWHpGNXY2UUsySG5xZW1nb3AvNno5dkRHVlZZcTFlMD1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCI5MjMxNzE1MDY4NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkIwM0MwNkY0RUJDMjU1OUU1NUNBM0NEREUyRUE4MTA5XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMzc1NjA3NVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzE3MTUwNjg0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNDdBNUE5N0E5MjQ0NURFRkMwNTRGM0EzQkMzMDE3NDZcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNzU2MDc2XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcImQ1bzVOM0gwUVVhX21QakhHM2tqYlFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNWVmZTRmYjQtNDU1OC00MTNhLThjZjktNmJkZWI4NzFiOGJhXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk1LFxuICAgICAgMTA5LFxuICAgICAgMjMxLFxuICAgICAgMjMxLFxuICAgICAgNjMsXG4gICAgICA5NixcbiAgICAgIDEzNixcbiAgICAgIDE2MCxcbiAgICAgIDE2OSxcbiAgICAgIDI0MixcbiAgICAgIDU1LFxuICAgICAgNzgsXG4gICAgICA1NCxcbiAgICAgIDg0LFxuICAgICAgMCxcbiAgICAgIDIzOCxcbiAgICAgIDY3LFxuICAgICAgMTAsXG4gICAgICAzLFxuICAgICAgMTUzXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMjExLFxuICAgICAgMTM1LFxuICAgICAgNTMsXG4gICAgICAyNCxcbiAgICAgIDEwNyxcbiAgICAgIDIzNCxcbiAgICAgIDc0LFxuICAgICAgMjIyLFxuICAgICAgMzQsXG4gICAgICA2LFxuICAgICAgNDIsXG4gICAgICAyMixcbiAgICAgIDEzMixcbiAgICAgIDE4MSxcbiAgICAgIDE0NSxcbiAgICAgIDEwNixcbiAgICAgIDUyLFxuICAgICAgODgsXG4gICAgICAyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkhWVEU3MUc1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCI5MjMxNzE1MDY4NDg6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE0NDMwMjg4MTY0MDYyOToxNkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn5CN8J2VkPCdkI7hu67hlocg77yw8J2ToeGOpeC4oOGRlfCdkobwn6q9XCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHk0OHAwRkVLQ0ozTG9HR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIQi9JdW5teWV4dG5oUS83OCsvUmdkMnFtbTNSNkxhamJVeXBzMUdlUWcwPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNobnQ5bHVYQVJhaW4wMzJwOHFROFNtYklRQUk4ZXJPM3pQcHgzRUQ5OUVTVEtZQVRMSlBnSGN5cE9LVDVuaGNMNGRUVWwzRHZaK1U4NC93enBEUkJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIjhNVGNCQ2dNMGlEeG1qK3ozOXJ0d2FpVXR5UVBKMEc4WHliWGxFREt0NGF1WTFtNEY4a0lycGtBT3hnZkZTeTJPaHJHSUNjUVoxWmV6Rnk2anRqTERBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzE3MTUwNjg0ODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAxNzksXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM3NTYwNjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFPZ1RcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQU9nVC5qc29uIjogIntcImtleURhdGFcIjpcImpIeHJSU3p3OGc0U0ZDOXNybEVubSs0ak5EcFA1RC9WVks1T3ljTDF5L2s9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTQwNDg2OTc1NixcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMzNzU2MDcwNDA5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
