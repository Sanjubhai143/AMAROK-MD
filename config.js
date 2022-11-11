const toBool = (x) => x == 'true'
const { Sequelize } = require('sequelize')
const { existsSync } = require('fs')
if (existsSync('config.env')) require('dotenv').config({ path: './config.env' })
const DATABASE_URL = process.env.DATABASE_URL === undefined ? './database.db' : process.env.DATABASE_URL
module.exports = {
  VERSION: require('./package.json').version,
  LOGS: toBool(process.env.LOGS) || true,
  ALWAYS_ONLINE: toBool(process.env.ALWAYS_ONLINE),
  IMGBB_KEY: ["76a050f031972d9f27e329d767dd988f","deb80cd12ababea1c9b9a8ad6ce3fab2","78c84c62b32a88e86daf87dd509a657a"],
  ALIVE_LOGO: process.env.ALIVE_LOGO || "https://i.imgur.com/c9CNgT5.jpeg",
  SESSION_ID:process.env.SESSION_ID || "MWhoSnNSclY=",
  ANTILINK: toBool(process.env.ANTI_LINK) || false,
  ANTILINK_ACTION: process.env.ANTI_LINK || "kick",
  LANG: process.env.LANG ||  'EN',
  HANDLERS: process.env.PREFIX || '[.]',
  RMBG_KEY: process.env.RMBG_KEY || false,
  BRANCH: "main",
  PACKNAME: process.env.PACKNAME || "𝐀𝐌𝐀𝐑𝐎𝐊",
  AUTHOR: process.env.AUTHOR || "𝐂𝐘𝐁𝐄𝐑𝐗𝐊𝐈𝐃",
  DATABASE: DATABASE_URL === './database.db' ? new Sequelize({ dialect: 'sqlite', storage: DATABASE_URL, logging: false }) : new Sequelize(DATABASE_URL, {dialect: 'postgres', ssl: true, protocol: 'postgres', dialectOptions: { native: true, ssl: { require: true, rejectUnauthorized: false },}, logging: false }),
  BOT_INFO: process.env.BOT_INFO || '𝘈𝘮𝘢𝘳𝘰𝘬;𝘊𝘺𝘣𝘦𝘳𝘹𝘬𝘪𝘥;0;https://i.imgur.com/w5wr6c1.jpeg;https://chat.whatsapp.com/I3aOiLY2Ydc258VkV7p0Md',
  SUDO: process.env.SUDO || "919728714060",
  SONG_DWNLD: process.env.SONGDWNLD || "Song Is Downloading Wait...!",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || " ",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || " ",
  OWNER_NAME: process.env.OWNER_NAME || "𝐂𝐘𝐁𝐄𝐑𝐗𝐊𝐈𝐃",
  BOT_NAME: process.env.BOT_NAME || "𝐀𝐌𝐀𝐑𝐎𝐊",
  WORK_TYPE: process.env.WORK_TYPE || "public",
};
