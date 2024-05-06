const strapi = require("@strapi/strapi");
const dotenv = require("dotenv");
dotenv.config();
console.error(process.env.PORT);
process.env.HOST = "0.0.0.0";
process.env.PORT = "salam";
process.env.APP_KEYS =
  "Vm3YdasvT8X8p/j1JTAhHg==,8Xc+DoMJmsv6xNYQJYkztw==,kjbC6LseP4rKVamwOh3D/w==,2RSYSVpqdgyyQaGFH7zFRA==";
process.env.API_TOKEN_SALT = "Fm+V3osCYS/4CZhTqJMuGw==";
process.env.ADMIN_JWT_SECRET = "n0G5pYqJ6Zyv1iES3gM5mw==";
process.env.TRANSFER_TOKEN_SALT = "AI8j5Ro69iFusnjdpsJ58g==";
process.env.DATABASE_CLIENT = "mysql";
process.env.DATABASE_HOST = "185.55.227.143";
process.env.DATABASE_PORT = "3306";
process.env.DATABASE_NAME = "karagostar_production";
process.env.DATABASE_USERNAME = "karagostar";
process.env.DATABASE_PASSWORD = "Ma@Iran@1402";
process.env.DATABASE_SSL = "false";
process.env.JWT_SECRET = "CbWb7VFcVxvQ471tCPorsw==";
process.env.TRANSFER_TOKEN =
  "d3e7541d1b5d6888e7c6450d83fed58759268228f97fddaf5dcf73e398c8dabcc11e1a5d464ebf1af3da17dfba46263f79fe17f6bcee66faa3cbf7e6569a75de75f91c8dfdf5f608dba3eb26134e62d0b6c5e854fede5a378f56f6153437cad1ca4b830017632243948f3bbccab908f4b672d9e6526fdf0fa0e34e66f44a697e";

strapi().start();
