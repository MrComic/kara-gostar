const strapi = require("@strapi/strapi");
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.PORT);
strapi({
  options: { port: 443 },
  port: 443,
  autoReload: true,
  serveAdminPanel: true,
}).start();
