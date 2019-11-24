const database = require('../controllers/firebase');

/**
 * You should NOT use this class directly.
 */
class baseModel {
    constructor(db, key, path='') {
        this.db = db;
        this.key = key;
        this.path = `${path}/${key}`;
        this.value = {};
    }

    map() {
        throw new Error('Please define the model in this function');
    }

    async fetch() {
        let data = await database.fetch(this.db, this.path);
        this.map(data);
        return this.value;
    }

    async update(value=this.value, preCondition) {
        await database.update(value, preCondition);
    }

    createEntry() {
        await database.create(this.value);
    }

}