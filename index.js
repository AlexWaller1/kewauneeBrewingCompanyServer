const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("<h1>Hello Oa</h1>");
});

const PORT = process.env.PORT || 3006;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
