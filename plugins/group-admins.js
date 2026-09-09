const handler = async (m, { conn, command }) => {
  if (!m.mentionedJid[0] &&!m.quoted) {
    let texto = `🍓 𓆩 ***𝗙𝗥𝗘𝗦𝗜𝗧𝗔 𝗕𝗢𝗧*** 𓆪 🍓

*Uso:* 💖
.${command} @user → Para ${command === 'promote' || command === 'promover' || command === 'daradmin'? 'promover' : 'degradar'}
.${command} → Responde al mensaje del user

> *Solo admins*`
    return m.reply(texto, m.chat)
  }

  let user = m.mentionedJid[0]? m.mentionedJid[0] : m.quoted.sender
  let action = command === 'promote' || command === 'promover' || command === 'daradmin'? 'promote' : 'demote'

  let msgAccion = action === 'promote'
? `🍓 𓆩 ***𝗡𝗨𝗘𝗩𝗔 𝗔𝗗𝗠𝗜𝗡*** 𓆪 🍓

.⃟𖥔 ݁. 𖦹˙— \`\`PROMOTE\`\` —˙𖦹.🍓꒷

👑 *Nueva Admin:* @${user.split('@')[0]}
💖 *Por:* @${m.sender.split('@')[0]}

━━━━━━━━━━━
*Powered by*: ***FRESITA BOT*** 🍓`
    : `🍓 𓆩 ***𝗗𝗘𝗚𝗥𝗔𝗗𝗔𝗗𝗔*** 𓆪 🍓

.⃟𖥔 ݁. 𖦹˙— \`\`DEMOTE\`\` —˙𖦹.🍓꒷

📉 *Ya no es Admin:* @${user.split('@')[0]}
💔 *Por:* @${m.sender.split('@')[0]}

━━━━━━━━━━━
*Powered by*: ***FRESITA BOT*** 🍓`

  await m.react(action === 'promote'? '👑' : '📉')
  await conn.groupParticipantsUpdate(m.chat, [user], action)
  m.reply(msgAccion, m.chat, { mentions: [user, m.sender] })
}

handler.help = ['promote @user', 'demote @user']
handler.tags = ['grupos']
handler.command = /^(promote|promover|daradmin|demote|degradar|quitaradmin)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true

export default handler