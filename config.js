const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID: process.env.SESSION_ID || "LzRVDKqR#zJmexy7N0faFAYea4hE_lzvHXR0bpq5pxH9sxJ42S1I",
  MONGODB: process.env.MONGODB || "mongodb://mongo:vwHyDDrCcOdsyBvgADCPXeoDtoVohSGH@tramway.proxy.rlwy.net:59353",
  OWNER_NUM: process.env.OWNER_NUM || "94783314361",
};
