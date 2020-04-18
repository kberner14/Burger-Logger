const orm = require("../config/orm");

const burger = {
  all: (cb) => orm.getAll("burgers", cb),
};

module.exports = burger;

// example
// burger.all((burgers) => console.log(burgers));
// [
//   RowDataPacket { id: 1, text: 'Rodeo Clown', devoured: 0 },
//   RowDataPacket { id: 2, text: 'Veg in a Hedge', devoured: 0 },
//   RowDataPacket { id: 3, text: 'The Keto Challenger', devoured: 0 }
// ]
