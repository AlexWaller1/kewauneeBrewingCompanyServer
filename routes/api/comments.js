const express = require("express");
const router = express.Router();
const uuid = require("uuid");
let comments = require("../../Comments");

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
  console.log("POST Request");
  console.log(req.body);

  const newComment = {
    userId: uuid.v4(),
    title: req.body.title,
    text: req.body.text,
    clicked: req.body.clicked
  };

  //   if (!newComment.title || !newComment.text) {
  //     return res.status(400).json({ msg: "Please include name and comment" });
  //   }
  comments.push(newComment);
  // push new comment to comments array
  res.json(comments);
  // sending back comments array with new comment included
});

// Update Member
router.put("/", (req, res) => {
  console.log("PUT Request");
  console.log(req.body);

  const found = comments.some(comment => comment.userId === req.body.userId);

  console.log(found);

  if (found) {
    const updComment = req.body;
    comments.forEach(comment => {
      if (comment.userId === req.body.userId) {
        comment.title = updComment.title ? updComment.title : comment.title;
        comment.text = updComment.text ? updComment.text : comment.text;
      }
    });
    res.json(comments);
  } else {
    res
      .status(400)
      .json({ msg: `No comment with the id of ${req.params.userId}` });
  }
});

router.delete("/:userId", (req, res) => {
  const found = comments.some(comment => comment.userId === req.params.userId);

  if (found) {
    comments = comments.filter(comment => comment.userId !== req.params.userId);
    res.json(comments);
  } else {
    res
      .status(400)
      .json({ msg: `No comment with the id of ${req.params.userId}` });
  }
});

module.exports = router;
