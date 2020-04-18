const orm = require("../config/orm");

const burger = {
  all: (cb) => orm.getAll("burgers", cb),
  create: (text, cb) => orm.createOne("burgers", { text }, cb),
  devour: (id, cb) => {
    orm.updateById("burgers", { devoured: true }, id, cb);
  },
};

module.exports = burger;

// example
// burger.all((burgers) => console.log(burgers));
// [
//   RowDataPacket { id: 1, text: 'Rodeo Clown', devoured: 0 },
//   RowDataPacket { id: 2, text: 'Veg in a Hedge', devoured: 0 },
//   RowDataPacket { id: 3, text: 'The Keto Challenger', devoured: 0 }
// ]

// burger.create("some other burger", (result) => console.log(result));
// OkPacket {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 8,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0
// }
