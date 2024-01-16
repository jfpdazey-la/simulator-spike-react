var express = require("express");
var router = express.Router();

const simulators = [
  {
    id: 1,
    name: "737-900",
    family: "737",
    manufacturer: "Boeing",
    website: "https://en.wikipedia.org/wiki/Boeing_737_Next_Generation",
    passengers: 215,
    active: true,
  },
  {
    id: 2,
    name: "747-8",
    family: "747",
    manufacturer: "Boeing",
    website: "https://en.wikipedia.org/wiki/Boeing_747-8",
    passengers: 467,
    active: false,
  },
  {
    id: 3,
    name: "A321",
    family: "A320",
    manufacturer: "Airbus",
    website: "https://en.wikipedia.org/wiki/Airbus_A321",
    passengers: 236,
    active: true,
  },
];

router.get("/", function (req, res, next) {
  const simulatorList = simulators.map((simulator) => {
    return { id: simulator.id, name: simulator.name };
  });
  res.json(simulatorList);
});

router.get("/:simulatorId", function (req, res, next) {
  const filteredSimulators = simulators.filter((simulator) => {
    return simulator.id.toString() === req.params.simulatorId;
  });

  const simulatorDetails =
    filteredSimulators.length > 0 ? filteredSimulators[0] : null;

  simulatorDetails ? res.json(simulatorDetails) : res.sendStatus(404);
});

module.exports = router;
