const db = require('../../data/dbConfig.js');

function find() {
    return db('users');
}

function findById(id) {
    return db('users')
        .where({ id })
        .first();
}

function add(users) {
    return db('users')
        .insert(users, 'id')
        .then(([id]) => {
            return findById(id);
        });
}

function update(id, changes) {
    return db('users')
        .where({ id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                return findById(id);
            } else {
                return null;
            }
        });
}

function remove(id) {
    return db('users')
        .where({ id })
        .del();
}

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
};