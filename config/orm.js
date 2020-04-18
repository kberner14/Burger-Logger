const connection = require("./connection");

const orm = {
  getAll: (table, cb) => {
    connection.query("SELECT * FROM ??", [table], (error, data) => {
      cb(data);
    });
  },
};

module.exports = orm;

// example
// orm.getAll("burgers", (burgers) => console.log(burgers));
// [
//   RowDataPacket { id: 1, text: 'Rodeo Clown', devoured: 0 },
//   RowDataPacket { id: 2, text: 'Veg in a Hedge', devoured: 0 },
//   RowDataPacket { id: 3, text: 'The Keto Challenger', devoured: 0 }
// ]
