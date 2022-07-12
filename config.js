const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://dapuhy.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://dapuhy.xyz': 'piceg',
}

// Other
global.namabot = ['⛧ S A T H A N ⸸ ']
global.namaowner = ['⛧ S A T H A N ⛥']
global.owner = ['94775792013']
global.premium = ['94775792013']
global.packname = 'Sticker By'
global.author = '⛧ S A T H A N ⸸ '
global.sessionName = 'zxyn'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.mess = {
    success: '✓ Success',
    admin: 'Group Admin Special Features!',
    botAdmin: 'Bot Must Be Admin First!',
    owner: 'Owner Bot s Special Features',
    group: 'Features Used Only For Groups!',
    private: 'Features Used Only For Private Chat!',
    bot: 'Bot Number User Special Features',
    wait: 'Loading...',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./lib/ab67616d0000b273e10e2e89ef9b6516991eb36c.jpg')
global.visoka = { url: 'https://telegra.ph/file/39c0aba89c1281605b7de.mp4' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
