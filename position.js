const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let coordinates = [0, 0];
  for (let move of moves) {
    console.log(move);
    switch (move) {
      case "north":
        coordinates[1] += 1;
        break;
      case "south":
        coordinates[1] -= 1;
        break;
      case "west":
        coordinates[0] -= 1;
        break;
      case "east":
        coordinates[0] += 1;
        break;
    }
  }
  return coordinates;
};

console.log(finalPosition(moves));

const moves = ["north", "north", "west", "west", "north", "east", "north"];

const finalPosition = function (moves) {
  let coordinates = [0, 0];
  for (let move of moves) {
    move === "north"
      ? (coordinates[1] += 1)
      : move === "south"
      ? (coordinates[1] -= 1)
      : move === "east"
      ? (coordinates[0] += 1)
      : (coordinates[0] -= 1);
  }
  return coordinates;
};

console.log(finalPosition(moves));
