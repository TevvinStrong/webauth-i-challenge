
exports.up = function (knex, Promise) {
    return knex.schema.createTable('users', (tbl) => {
        tbl.increments('id')

        tbl
            .string('username', 128)
            .unique()
            .notNullable()


        tbl
            .string('password', 128)
            .unique()
            .notNullable()
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.dropTableIfExists('users');
};
