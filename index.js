const express = require("express");
// must require express for all express servers
const path = require("path");
// path is for joining files for proper routes

const app = express();

const comments = [
  {
    userId: 34,
    userName: "user 1",
    text: "had a great time at the Kewaunee Brewing Company"
  },
  {
    userId: 340,
    userName: "user 2",
    text: "burgers were amazing"
  },
  {
    userId: 3579,
    userName: "user 3",
    text: "beer is top of the line"
  },
  {
    userId: 45867,
    userName: "user 4",
    text: "extremely dog friendly"
  }
];

app.get("/api/comments", (req, res) => {
  res.json(comments);
});

// set static folder
app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
