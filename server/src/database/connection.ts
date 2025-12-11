import knex from "knex";
import config from "../../knexfile";

const environment = process.env.NODE_ENV || "production";

const connection = knex(config[environment]);

export default connection;
