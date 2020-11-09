const stations = [
  ["Big Bear Donair", 10, "restaurant"],
  ["Bright Lights Elementary", 50, "school"],
  ["Moose Mountain Community Centre", 45, "community centre"],
];

let chooseStations = function (stations) {
  let appStation = [];
  for (let station of stations) {
    console.log(station);
    if (
      station[1] >= 20 &&
      (station[2] === "school" || station[2] === "community centre")
    ) {
      console.log(station);
      appStation.push(station[0]);
    }
  }
  return appStation;
};

let chosenStations = chooseStations(stations);

console.log(chosenStations);
