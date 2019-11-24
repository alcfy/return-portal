const { ErrorMessage, throwError } = require("./error");
const admin = require("firebase-admin");

function initialize() {
    admin.initializeApp({
        credential: admin.credential.applicationDefault(),
        databaseURL: "https://flindel-dev.firebaseio.com"
    });
}

function getFirestore() {
    return admin.firestore();
}

async function fetch(db, path) {
    let ref = db.collection(path);
    let snapshot = await ref.get();
    if (snapshot.exists) {
        return snapshot.data();
    }
    throwError(ErrorMessage.nonExistData);
}

async function update(db, path, value, preCondition) {
    let ref = db.collection(path);
    await ref.update(value, preCondition);
}

async function create(db, path, value) {
    let ref = db.collection(path);
    await ref.create(value);
}


module.exports = {
    initialize,
    getFirestore, 
    fetch,
    update,
    create
 };