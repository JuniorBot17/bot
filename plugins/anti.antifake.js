//import db from '../lib/database.js'

let handler = m => m

handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
	if (!m.isGroup) return !1
	let chat = global.db.data.chats[m.chat]
	if (isBotAdmin && chat.antifake) {
		
   if (m.sender.startsWith('92' || '92')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('90' || '90')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('234' || '234')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

   if (m.sender.startsWith('994' || '994')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('93' || '93')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('94' || '94')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('95' || '95')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('91' || '91')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('98' || '98')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('20' || '20')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('212' || '212')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('220' || '220')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }


if (m.sender.startsWith('222' || '222')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('224' || '224')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }

if (m.sender.startsWith('223' || '223')) {
   	global.db.data.users[m.sender].banned = true
 m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   }
   
   if (m.sender.startsWith('265' || '265')) {
   	global.db.data.users[m.sender].banned = true
  m.reply(`🌱𝙷𝙾𝙻𝙰 𝚃𝙴 ✔️𝙸𝙽𝙵𝙾𝚁𝙼𝙰 𝚀𝚄𝙴 𝙴𝚂𝚃𝙰 𝙿𝚁𝙾𝙷𝙸𝙱𝙸𝙳𝙾 𝙽𝚄𝙼𝙴𝚁𝙾𝚂 𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂 𝙴𝙽 𝙴𝙽 𝙴𝚂𝚃𝙴 𝙶𝚁𝚄𝙿𝙾 𝙿𝚄𝙴𝙳𝙴 𝚀𝚄𝙴 𝚂𝙴𝙰𝚂 𝚄𝙽 𝙸𝙽𝚃𝚁𝚄𝚂𝙾😐 𝙰𝚂Í 𝚀𝚄𝙴 𝚂𝙴𝚁Á𝚂 𝙴𝙻𝙸𝙼𝙸𝙽𝙰𝙳𝙾📵`)
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
   } 
   
}  

 
    }
export default handler