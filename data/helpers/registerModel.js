const db = require('../../data/dbConfig.js');

function find() {
    return db('register');
}

function findById(id) {
    return db('register')
        .where({ id })
        .first();
}

function add(users) {
    return db('register')
        .insert(users, 'id')
        .then(([id]) => {
            return findById(id);
        });
}

function update(id, changes) {
    return db('register')
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
    return db('register')
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