import stylizedChar from "../utils/fancy.js"

export async function pingTest(client, message) {
    const remoteJid = message.key.remoteJid
    const start = Date.now()

    await client.sendMessage(remoteJid, { text: "📡 Pinging..." }, { quoted: message })

    const latency = Date.now() - start

    await client.sendMessage(remoteJid, {
        text: stylizedChar(
            `🚀 MR GOJO-BOT Network\n\n` +
            `Latency: ${latency} ms\n\n` +
            `MR GOJO TECH`
        )
    }, { quoted: message })
}

