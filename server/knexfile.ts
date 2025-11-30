export default {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./src/database/database.db",
    },
    migrations: {
      extension: "ts",
      directory: "./src/database/migrations",
    },
    seeds: {
      directory: "./src/database/seeds",
      extension: "ts",
    },
    useNullAsDefault: true,
  },
};
