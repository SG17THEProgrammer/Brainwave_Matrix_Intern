const mongoose = require('mongoose');

async function connectToDb() {
    try {
        await mongoose.connect(process.env.MONG0_URL);
        console.log('Connection established');
    } catch (err) {
        console.log('Connection Failed', err);
    }
}

module.exports = connectToDb;
