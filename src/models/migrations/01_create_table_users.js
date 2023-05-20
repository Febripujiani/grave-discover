const { tables, user_roles } = require("../../config");
const encryption = require("../../utils/encryption");

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  await knex.schema.createTable(tables.users, function (table) {
    table.increments();
    table.string("name").notNullable();

    // Auth
    table.string("username").unique().notNullable();
    table.string("password").notNullable();
    table.string("phone_number").notNullable();
    table.string("email").notNullable();

    table.string("role").defaultTo(user_roles.user).notNullable();

    table.datetime("created_at").defaultTo(knex.fn.now());
    table.datetime("updated_at").defaultTo(null).nullable();
    table.boolean("is_block").defaultTo(false);

    //-> Indexing
    table.index(["username", "password"], "credential_login");
    table.index(["id", "role"], "token_validation_used");
  });

  await knex(tables.users).insert([
    {
      name: "Administrator",

      username: "admin",
      password: encryption.encode("adaajadeh"),
      phone_number: "082214252455",
      email: "admin@grave-discover.sipapasi.com",
      role: user_roles.admin,
    },
  ]);
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable(tables.users);
};
