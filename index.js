const express = require('express');
const app = express();

require('dotenv').config();

const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL;
const port = process.env.PORT || 3000;

async function main() {
    await mongoose.connect(dbUrl)
}

main().catch(err => console.log("we dey get error", err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "correction error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.listen(port, () => {
    console.log(`app is listening on port:${port}`);
});

