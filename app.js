const express = require("express");
const config = require("config");

const PORT = config.get("port");

const app = express();
app.listen(PORT, () => {
console.log(`App has been started on port ${PORT}...`);
});
