
exports.up = function (knex, Promise) {
    return knex.schema.table('users', (tbl) => {
        tbl
            .string('fullname', 128);
    })
};

exports.down = function (knex, Promise) {
    return knex.schema.table('users', (tbl) => {
        tbl.dropColumn('fullname');
    })
};
