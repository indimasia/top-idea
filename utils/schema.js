import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";
import { integer } from "drizzle-orm/pg-core";

export const ideas = mysqlTable("ideas", {
    id:serial("id").primaryKey(),
    title:varchar("title", {
        length: 255,
    }).notNull(),
    description:varchar("description", {
        length: 255,
    }).notNull(),
    vote:integer("vote").default(0),
    createdAt: varchar("createdAt", {
        length: 255,
    }).notNull(),
});