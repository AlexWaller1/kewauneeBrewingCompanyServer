const express = require("express");
// must require express for all express servers
const path = require("path");
// path is for joining files for proper routes

const comments = require("./Comments");
// bringing in comments array

const moment = require("moment");
// requiring moment dependency

const logger = require("./middleware/logger");

const app = express();

// Middleware functions are functions that have access to request and response

// Init middleware
app.use(logger);

// Gets All Comments
app.get("/api/comments", (req, res) => {
  res.json(comments);
});

// set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
