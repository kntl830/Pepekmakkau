import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

// Owner
global.owner = [
['601161755627', 'Zeltoria', true],
]
global.mods = []
global.prems = []
// Info
global.nomorwa = '601161755627'
global.packname = 'Bot Premium'
global.author = '© RasGembel'
global.namebot = '​Bot Premium'
global.wm = '© Bot Premium'
global.stickpack = 'Bot Premium'
global.stickauth = 'wa.me/601161755627'
global.fotonya = 'https://telegra.ph/file/edc03ab2e6825472d5ea4.jpg'
// Link Sosmed
global.sig = 'https://www.instagram.com/xyroinee'
global.sgh = 'https://github.com/Xyroinee'
global.sgc = 'https://chat.whatsapp.com/LAWdMIQri9SKee5kqmISH0'
// Donasi
global.psaweria = 'https://saweria.co/Zeltoria'
global.ptrakterr = 'https://trakteer.id/zeltoria'
global.povo = '08566518189'
// Info Wait
global.wait = '_Sedang Di Proses, Mohon Tunggu_....'
global.eror = 'Terjadi Kesalahan Coba Lagi Nanti!'
global.multiplier = 69 
// Apikey
global.rose = '7bbbf7df4aaae5c9f807b347' //api.itsrose.life
global.xyro = 'se6oBnFH6f'// api.xyroinee.xyz
// Catatan : Jika Mau Work Fiturnya
// Masukan Apikeymu
// Gapunya Apikey? Ya Daftar
// Daftar Ke Website Tersebut Untuk
// Mendapatkan Apikey Kamu
global.APIs = {
    xyro: "https://api.xyroinee.xyz",
    popcat : 'https://api.popcat.xyz'
}

/*Apikey*/
global.APIKeys = {
    "https://api.xyroinee.xyz": "se6oBnFH6f",
}

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})
