const express = require("express");
const fs = require("fs");
const path = require("path");

const router = express.Router();



router.get("/profile/:file", (req, res) => {
 console.log("hey");
});

module.exports = router;
