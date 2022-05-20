const express = require("express");
// must require express for all express servers
const path = require("path");
// path is for joining files for proper routes

const comments = require("./Comments");
// bringing in comments array

const logger = require("./middleware/logger");

const app = express();

// Middleware functions are functions that have access to request and response

// Init middleware
// app.use(logger);

// set static folder
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/comments", require("./routes/api/comments"));

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
