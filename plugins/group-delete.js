let handler = async (m, { conn, usedPrefix, command }) => {

if (!m.quoted) return conn.reply(m.chat, `🍓 𓆩 ***𝗙𝗥𝗘𝗦𝗜𝗧𝗔 𝗕𝗢𝗧*** 𓆪 🍓

*Uso:* Responde al mensaje que deseas eliminar con *${usedPrefix + command}*`, m)

try {
let delet = m.message.extendedTextMessage.contextInfo.participant
let bang = m.message.extendedTextMessage.contextInfo.stanzaId
await m.react('🗑️')
await conn.reply(m.chat, `🍓 𓆩 ***𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗢*** 𓆪 🍓\n\n💖 *Listo, borré el mensaje*`, m)
return conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
 } catch {
await m.react('🗑️')
await conn.reply(m.chat, `🍓 𓆩 ***𝗠𝗘𝗡𝗦𝗔𝗝𝗘 𝗘𝗟𝗜𝗠𝗜𝗡𝗔𝗗𝗢*** 𓆪 🍓\n\n💖 *Listo, borré el mensaje*`, m)
return conn.sendMessage(m.chat, { delete: m.quoted.vM.key })
}
}

handler.help = ['del @msg']
handler.tags = ['grupos']
handler.command = /^del(ete)?$/i
handler.admin = true
handler.botAdmin = true
handler.group = true

export default handler