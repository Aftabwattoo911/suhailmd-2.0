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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_14_06_12_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMDksXG4gICAgICAgIDMsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjE0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDM2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDExLFxuICAgICAgICA3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDUwLFxuICAgICAgICA5MixcbiAgICAgICAgMTE4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNzIsXG4gICAgICAgIDczLFxuICAgICAgICAxMTYsXG4gICAgICAgIDExOSxcbiAgICAgICAgODksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTAzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMDcsXG4gICAgICAgIDYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNCxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIyNixcbiAgICAgICAgNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAxODksXG4gICAgICAgIDg1LFxuICAgICAgICAxNDcsXG4gICAgICAgIDg4LFxuICAgICAgICA0NixcbiAgICAgICAgNTIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMzgsXG4gICAgICAgIDExNixcbiAgICAgICAgNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTIyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMTksXG4gICAgICAgIDYsXG4gICAgICAgIDIxLFxuICAgICAgICAzMSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICA3NixcbiAgICAgICAgNTQsXG4gICAgICAgIDY5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5NixcbiAgICAgICAgODEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMzgsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgOSxcbiAgICAgICAgMTE5LFxuICAgICAgICA5OSxcbiAgICAgICAgNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA4LFxuICAgICAgICA5MCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTAxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjAsXG4gICAgICAgIDM4LFxuICAgICAgICAyMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNixcbiAgICAgICAgNjksXG4gICAgICAgIDY2LFxuICAgICAgICA0NixcbiAgICAgICAgMTgyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTA5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDU1LFxuICAgICAgICAxMTYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgNTksXG4gICAgICAgIDg3LFxuICAgICAgICAxODYsXG4gICAgICAgIDE2LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA2LFxuICAgICAgICA1MCxcbiAgICAgICAgNjYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMixcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDUxLFxuICAgICAgICA3OCxcbiAgICAgICAgNDEsXG4gICAgICAgIDgxLFxuICAgICAgICA0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjA1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDcyLFxuICAgICAgICA0MixcbiAgICAgICAgNDYsXG4gICAgICAgIDE5LFxuICAgICAgICAxMzAsXG4gICAgICAgIDU0LFxuICAgICAgICA0OCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMTIsXG4gICAgICAgIDUzXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDc4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMxLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MixcbiAgICAgICAgNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExOCxcbiAgICAgICAgMzAsXG4gICAgICAgIDc5LFxuICAgICAgICAxMzksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA4MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUyLFxuICAgICAgICAyNDksXG4gICAgICAgIDMwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDcwLFxuICAgICAgICA5MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAzMSxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAzNCxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NSxcbiAgICAgICAgNzEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU2LFxuICAgICAgICA5MixcbiAgICAgICAgMjE5LFxuICAgICAgICAxODksXG4gICAgICAgIDExNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAzMixcbiAgICAgICAgMjUyLFxuICAgICAgICA4NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyLFxuICAgICAgICAxODksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTUsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTA4LFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEyMyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI3MGpTL1lVbldlaEw4MUN3M3Bvc0pPM0JranZaekZnU011MVlNMWRwZFZJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjkyMzA5NzA3NjYyMEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiODZGQUUwMzQ2QTdBRTBDNDg1REFBRTM2NEI4MDNBQjNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzMzNzUzMTgzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIlRkLVEzMlhWUUxXUWkyV29MLXNvU0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMGJlOTgzN2UtYjJlMi00OTU3LWJkMjMtOWU5OWQ1NTkwOTdjXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk3LFxuICAgICAgMTYyLFxuICAgICAgMTU2LFxuICAgICAgNTgsXG4gICAgICAxMjEsXG4gICAgICA4MyxcbiAgICAgIDE1OCxcbiAgICAgIDc1LFxuICAgICAgMjMzLFxuICAgICAgODQsXG4gICAgICAyOCxcbiAgICAgIDE5NCxcbiAgICAgIDI1LFxuICAgICAgMTIxLFxuICAgICAgMTE2LFxuICAgICAgMjE5LFxuICAgICAgMjMzLFxuICAgICAgNzYsXG4gICAgICAxNjIsXG4gICAgICAxMVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAzNSxcbiAgICAgIDM4LFxuICAgICAgMzQsXG4gICAgICAyMDMsXG4gICAgICAxMjksXG4gICAgICAyMzcsXG4gICAgICA3OCxcbiAgICAgIDIyOSxcbiAgICAgIDE0NCxcbiAgICAgIDIxOSxcbiAgICAgIDY0LFxuICAgICAgMjI2LFxuICAgICAgMjgsXG4gICAgICAxNTEsXG4gICAgICAwLFxuICAgICAgODYsXG4gICAgICAxLFxuICAgICAgMjI5LFxuICAgICAgMTEsXG4gICAgICAxNTRcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNkdMQktQWVhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzA5NzA3NjYyMDoyOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMTgzODI0ODM1MTg2ODMwOjI5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk1pYW4gQWZ0YWIgSHVzc2FpbiBXYXR0b29cIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNKRDNpeFFRMlBMYnVnWVlBeUFBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIlRaM3Y0czA2VStGVjRSTE5rWFd2cWt3THlpMnNWTmpmK2ljWERKbGx1MGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiZ1ExTkJKNHFXMVBtSXZvdkIzb0ZJLy9VMTZBYk9aNGhLcGllWE1vd3hnWEpJRTNwMW8wWVo4U3Rnd0UzemJLTzh2RmdlNFFTVDJEaFh1UmhiWkE1Q1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwia2pMSktPaGVySFZwTkZ3RG82Sk9WY2pXWlpMelVXbzMvYlVnRUZldC9sUEphNGtLREJHNWg2YWN5bHdzWS9MWHlRWmExN25nRFpubWkxU2ZETUpzaEE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMDk3MDc2NjIwOjI5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzM3NTMxNzksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLOFBcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUs4UC5qc29uIjogIntcImtleURhdGFcIjpcIlZEanJFdDBKMnNmSktZSlpGY1IrY1NnWGtaSzNwcmtoVjZjdU83UjF1RFE9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDIxMzg1MDksXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzI3MDU0Mjk5NjRcIn0iCn0="  // PUT your SESSION_ID 


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
