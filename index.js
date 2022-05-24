const express = require("express");
// must require express for all express servers
const path = require("path");
// path is for joining files for proper routes
const bodyParser = require("body-parser");

const logger = require("./middleware/logger");

const app = express();

// Middleware functions are functions that have access to request and response

// Init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }))

const cors = require("cors");
const corsOptions = {
  origin: "*",
  credentials: true,
  optionSuccessStatus: 200
};

app.use(cors(corsOptions));

// set static folder
app.use(express.static(path.join(__dirname, "public")));

// members API routes
app.use("/api/comments", require("./routes/api/comments"));

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
