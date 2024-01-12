var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.json([
    {
      id: 1,
      name: "Simulator A",
    },
    {
      id: 2,
      name: "Simulator B",
    },
    { id: 3, name: "Simulator C" },
  ]);
});

module.exports = router;
