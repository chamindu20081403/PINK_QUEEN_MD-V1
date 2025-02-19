const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "a6J12ZII#HV6IZ2_gM0iIXUQltLc516cB_KSHJlnou3_WuB_3ItU",
  MONGODB: process.env.MONGODB || "mongodb://mongo:IEcVaBGSwZNfRMzHDshqhTpKayzYAjwH@shortline.proxy.rlwy.net:43054",
  OWNER_NUM: process.env.OWNER_NUM || "94783314361",
};
