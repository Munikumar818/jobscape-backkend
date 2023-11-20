const express = require("express");
const router = express.Router();

router.post("/resume", (req, res) => {
  console.log("Received a request to upload a resume.");
  res.send({
    message: "Console log message for resume upload.",
  });
});

router.post("/profile", (req, res) => {
  console.log("Received a request to upload a profile image.");
  res.send({
    message: "Console log message for profile image upload.",
  });
});

module.exports = router;
