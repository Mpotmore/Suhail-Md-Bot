const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="samsamsun789@gmail.com"
global.location="Lahore,Pakistan."
global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.DATABASE_URI = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/d5b1c3544fedc23e11a06.jpg" ; // SET LOGO FOR IMAGE 



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5',  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "true";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3,
global.disablepm = process.env.DISABLE_PM || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES|| "text",
global.waPresence= process.env.WAPRESENCE ||  "set according to your need" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "923184474176,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd-1.vercel.app"
global.scan = "https://suhail-md-vtsf.onrender.com/";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "V.1.2.8",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "Suhail-MD",
  packname: process.env.PACK_NAME || "♥️",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",

  sessionName:process.env.SESSION_ID || "",  // PUT SESSION SUHAIL_21_33_10_31_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDgwLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMDksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDM5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTA5LFxuICAgICAgICA3OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTcwLFxuICAgICAgICAyMjksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDI0LFxuICAgICAgICAwLFxuICAgICAgICAxNzksXG4gICAgICAgIDUzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEwLFxuICAgICAgICAxODEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMzBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA5MyxcbiAgICAgICAgMzgsXG4gICAgICAgIDM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIyLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQwLFxuICAgICAgICA4MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNjMsXG4gICAgICAgIDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMDgsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDcsXG4gICAgICAgIDE5NixcbiAgICAgICAgMzQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTE5LFxuICAgICAgICAxMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDgyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDU3LFxuICAgICAgICAyMzksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjI2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMzMsXG4gICAgICAgIDk2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NixcbiAgICAgICAgNTAsXG4gICAgICAgIDY0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDc3LFxuICAgICAgICAyOCxcbiAgICAgICAgMzksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODksXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjA1LFxuICAgICAgICAzNyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICA2NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxODQsXG4gICAgICAgIDc5LFxuICAgICAgICAxNCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNixcbiAgICAgICAgMzAsXG4gICAgICAgIDM3LFxuICAgICAgICA1MSxcbiAgICAgICAgODcsXG4gICAgICAgIDI2LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNjcsXG4gICAgICAgIDg1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTE1LFxuICAgICAgICA4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNDIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA1NSxcbiAgICAgICAgNzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyOCxcbiAgICAgICAgODQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDIyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDExMSxcbiAgICAgICAgNSxcbiAgICAgICAgNjYsXG4gICAgICAgIDAsXG4gICAgICAgIDg3LFxuICAgICAgICAyNyxcbiAgICAgICAgMzAsXG4gICAgICAgIDE3MixcbiAgICAgICAgNzksXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjI4LFxuICAgICAgICA1MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDE1NixcbiAgICAgICAgNyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMjYsXG4gICAgICAgIDQ2LFxuICAgICAgICA2LFxuICAgICAgICAxMCxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMTUsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICA1MyxcbiAgICAgICAgNDksXG4gICAgICAgIDE0NixcbiAgICAgICAgMTk5LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMCxcbiAgICAgICAgMjExLFxuICAgICAgICAyMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzUsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwid0VUQzRaSTVMemM1YXJtV2QzL3JKd283cmFGM1Rub3VmSmRrVDFsOGZyVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidTJ1THJJR0VTamU1YUtzZ3doa1dRd1wiLFxuICBcInBob25lSWRcIjogXCIzYzA5MjcwYS1hZTI5LTRkZjAtOGQwMC0zYWJhMWQ4ZWQxOGZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODEsXG4gICAgICAxOCxcbiAgICAgIDEwMCxcbiAgICAgIDk0LFxuICAgICAgMTU0LFxuICAgICAgMTUsXG4gICAgICA2NixcbiAgICAgIDQ0LFxuICAgICAgOTEsXG4gICAgICAyMDcsXG4gICAgICAzMCxcbiAgICAgIDIxMixcbiAgICAgIDExMSxcbiAgICAgIDc5LFxuICAgICAgNTcsXG4gICAgICAyNDIsXG4gICAgICAxMDMsXG4gICAgICA0MCxcbiAgICAgIDExNCxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNDcsXG4gICAgICA3LFxuICAgICAgMTEzLFxuICAgICAgMTIsXG4gICAgICAyMTQsXG4gICAgICAyMzcsXG4gICAgICAxNzUsXG4gICAgICAyMjYsXG4gICAgICAxNDEsXG4gICAgICA1MSxcbiAgICAgIDE1NCxcbiAgICAgIDY1LFxuICAgICAgMjA2LFxuICAgICAgMTAsXG4gICAgICAxMzEsXG4gICAgICAyNTUsXG4gICAgICAyMjksXG4gICAgICAyNDIsXG4gICAgICAxNTIsXG4gICAgICAyMjNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiWjhaTDZGV0JcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjI1NDc1NzI1Mzk2MjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIlBoYWJ5XCIsXG4gICAgXCJsaWRcIjogXCIxMjI4MTkyODc0OTQ3ODg6MzZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTy84czdFR0VLM3ZqN2tHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ2ZW9QcWMvbUFCQm9KVzROWnVocXI4Y2pxSm0zazQrN0dSUlVvUnBUZHhNPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIitDb09OV1BZT2RPenNoYW1QUllOdy9RdE9JdFdOZ2xBVzV0c1lYakF4dUhxYm16bEk2dGg5ZTM0WjRCbU5reHhFQ0U4OFFTTVM0K1l0VnYwc1dHT0JBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImh1VGVWQVlSUXh1dEV6bjNBV0pzVHAySmR3bjMwMWUrM2huUkVRRUUrTDZXL05jYlUzMXdOWlJUV3g5ZDk5eEZZVXJmbUIwWFhOdFdEZGV4UVJ6VEFnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDc1NzI1Mzk2MjozNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwNDEwNDE4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBSTJGXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFJMkYuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrb2pWQTdwOEUwYU1MZ29xdWh6dzhtY3FKMDlEcVlIc1VnQTdQd29QcjNjPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE3MTQyMjQ3NTAsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMFwifSIKfQ==ID HERE 
  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,

  aitts_Voice_Id : process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE||process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",



};




























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
 
