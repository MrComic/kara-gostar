const path = require("path");

module.exports = ({ env }) => {
  if (env("NODE_ENV") == "development") {
    return {
      connection: {
        client: "sqlite",
        connection: {
          filename: path.join(
            __dirname,
            "..",
            env("DATABASE_FILENAME", ".tmp/data.db")
          ),
        },
        useNullAsDefault: true,
      },
    };
  } else {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector: "strapi-connector-mysql",
          settings: {
            client: "mysql",
            host: env("DATABASE_HOST", "localhost"),
            port: env.int("DATABASE_PORT", 3306),
            database: env("DATABASE_NAME", "karagostar-production"),
            username: env("DATABASE_USERNAME", "root"),
            password: env("DATABASE_PASSWORD", ""),
          },
          options: {},
        },
      },
    };
  }
};
