const express = require('express');
const app = express();

require('dotenv').config();

const path = require('path')
const mongo = require('mongodb')
const mongoose = require('mongoose');
// const { readdirSync } = require("fs");
const userRoutes = require('./routes/users')


const dbUrl = process.env.DB_URL;
const port = process.env.PORT || 8686;

async function main() {
    await mongoose.connect(dbUrl)
}

main().catch(err => console.log("we dey get error", err));

const db = mongoose.connection;
db.on("error", console.error.bind(console, "correction error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// readdirSync("./routes").map((path) =>
//     app.use("/", require(`./routes/${path}`))
// );
app.use('/', userRoutes)

app.listen(port, () => {
    console.log(`app is listening on port:${port}`);
});

module.exports = app;