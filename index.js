const express = require("express");
// must require express for all express servers
const path = require("path");
// path is for joining files for proper routes

const app = express();

// set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
