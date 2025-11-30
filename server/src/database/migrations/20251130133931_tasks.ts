import { Knex } from "knex";

const STATUS =  ["In Progress", "Completed", "Won't do"]

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable("tasks", (table) => {
        table.increments("id").primary()
        table.integer("board_id").unsigned().references("id").inTable("boards").onDelete("CASCADE")
        table.string("title").notNullable()
        table.text("description").nullable()
        table.string("status").notNullable().checkIn(STATUS)

        table.string("icon").nullable()
        table.timestamp("created_at").defaultTo(knex.fn.now())
        table.timestamp("updated_at").defaultTo(knex.fn.now())
    })
}


export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTable("tasks")
}

