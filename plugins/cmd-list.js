let handler = async (m, { conn }) => {
conn.reply(m.chat, `
*< π»πΈπππ° π³π΄ π²πΎπΌπ°π½π³πΎπ / ππ΄πππΎπ π°ππΈπΆπ°π½π³πΎπ />*

${Object.entries(global.db.data.sticker).map(([key, value], index) => `*${index + 1}.-*\n*π²πΎπ³πΈπΆπΎ:* ${value.locked ? `*(πππππππππ)* ${key}` : key}\n*π²πΎπΌπ°π½π³πΎ/ππ΄πππΎ* ${value.text}`).join('\n\n')}
`.trim(), null, {mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a, b) => [...a, ...b], [])})
}
handler.command = ['listcmd', 'cmdlist']
handler.rowner = true
handler.limit = 1
handler.register = true
export default handler
