const express = require("express");
const router = express.Router();
const comments = require("../../Comments");

// Gets All Comments
router.get("/", (req, res) => {
  res.json(comments);
});

// Get Single Comment
router.get("/:userId", (req, res) => {
  const found = comments.some(
    comment => comment.userId === parseInt(req.params.userId)
  );

  if (found) {
    res.send(
      comments.filter(comment => comment.userId === parseInt(req.params.userId))
    );
  } else {
    res.status(400).json({ msg: `No comment with id of ${req.params.userId}` });
  }
});

module.exports = router;
