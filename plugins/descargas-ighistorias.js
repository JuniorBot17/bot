/* CREDITOS A https://github.com/FG98F */
import axios from 'axios'
import hx from 'hxz-api' 

let handler = async (m, { conn, args, usedPrefix, command, text}) => {
if (!text) throw `${mg}𝙄𝙉𝙂𝙍𝙀𝙎𝙀 𝙀𝙇 𝙉𝙊𝙈𝘽𝙍𝙀 𝘿𝙀 𝙐𝙎𝙐𝘼𝙍𝙄𝙊 𝘿𝙀 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙋𝘼𝙍𝘼 𝘿𝙀𝙎𝘾𝘼𝙍𝙂𝘼𝙍 𝙇𝘼𝙎 𝙃𝙄𝙎𝙏𝙊𝙍𝙄𝘼𝙎\n𝙀𝙅𝙀𝙈𝙋𝙇𝙊\n*${usedPrefix + command} hades*\n\n𝙀𝙉𝙏𝙀𝙍 𝙄𝙉𝙎𝙏𝘼𝙂𝙍𝘼𝙈 𝙐𝙎𝙀𝙍𝙉𝘼𝙈𝙀 𝙏𝙊 𝘿𝙊𝙒𝙉𝙇𝙊𝘼𝘿 𝙎𝙏𝙊𝙍𝙄𝙀𝙎\n𝙀𝙓𝘼𝙈𝙋𝙇𝙀\n*${usedPrefix + command} Hades-bot`

hx.igstory(text).then(async (result) => {
for (let i of result.medias) {
if (i.url.includes("mp4")) {            
conn.sendFile(m.chat, i.url, 'igstory.mp4', wm, m)
} else {     
conn.sendFile(m.chat, i.url, '', '', m)
}}});
  
let info = `☘️𝐓𝐔 𝐏𝐄𝐃𝐈𝐃𝐎 𝐅𝐔𝐄 𝐄𝐍𝐓𝐑𝐄𝐆𝐀𝐃𝐎 𝐂𝐎𝐍 É𝐗𝐈𝐓𝐎📚
`.trim()  
await conn.sendHydrated(m.chat, info, wm, null, md, '𝙶𝙸𝚃𝙷𝚄𝙱', null, null, [
['𝐄𝐒𝐓𝐀𝐃𝐎', '/estado'],
['𝑴𝑬𝑵𝑼', '/menu'],
['𝐆𝐑𝐔𝐏𝐎𝐒️', '/grupos']
], m,)  
}
handler.help = ['igstory <username>']
handler.tags = ['downloader']
handler.command = ['igstory', 'ighistoria', 'ighistorias' ]
handler.exp = 87
export default handler
