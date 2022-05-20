const express = require("express");
const router = express.Router();
const uuid = require("uuid");
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

// create Member
router.post("/", (req, res) => {
  const newComment = {
    id: uuid.v4(),
    userName: req.body.userName,
    text: req.body.text
  };

  if (!newComment.userName || !newComment.text) {
    return res.status(400).json({ msg: "Please include name and comment" });
  }
  comments.push(newComment);
  // push new comment to comments array
  res.json(comments);
  // sending back comments array with new comment included
});

// Update Member
router.put("/:userId", (req, res) => {
  const found = comments.some(
    comment => comment.userId === parseInt(req.params.userId)
  );

  if (found) {
    const updComment = req.body;
    comments.forEach(comment => {
      if (comment.userId === parseInt(req.params.userId)) {
        comment.userName = updComment.userName
          ? updComment.name
          : comment.userName;
        comment.text = updComment.text ? updComment.text : comment.text;

        res.json({ msg: "comment updated", comment });
      }
    });
  } else {
    res
      .status(400)
      .json({ msg: `No comment with the id of ${req.params.userId}` });
  }
});

module.exports = router;
