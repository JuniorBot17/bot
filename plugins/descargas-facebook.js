import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command }) => {
if (!args[0]) throw `${mg}πππππππ ππ ππππΌπΎπ πΏπ ππΌπΎππ½πππ ππΌππΌ πΏπππΎπΌπππΌπ ππ πππΏππ\nπππππππ\n*${usedPrefix + command} https://www.facebook.com/watch?v=636541475139*\n\nπππππ πΌ ππΌπΎππ½πππ ππππ ππ πΏππππππΌπΏ πππΏππ\nπππΌππππ\n*${usedPrefix + command} https://fb.watch/dcXq_0CaHi/*`
const { result } = await facebookdl(args[0]).catch(async _ => await facebookdlv2(args[0]))
for (const { url, isVideo } of result.reverse()) conn.sendFile(m.chat, url, `facebook.${!isVideo ? 'bin' : 'mp4'}`, `β¨ *ENLACE | URL:* ${url}`, m)
  let info = `βοΈππ ππππππ πππ πππππππππ πππ Γπππππ 
`.trim()
  
await conn.sendHydrated(m.chat, info, wm, null, md, 'πΆπΈππ·ππ±', null, null, [
['ππππππ', '/estado'],
['π΄π¬π΅πΌ', '/menu'],
['πππππποΈ', '/grupos']
], m,)
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i
handler.register = true
export default handler
