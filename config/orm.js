const connection = require("./connection");

const orm = {
  getAll: (table, cb) => {
    connection.query("SELECT * FROM ??", [table], (error, data) => {
      cb(data);
    });
  },

  createOne: (table, newRowValues, cb) => {
    const queryString = "INSERT INTO ?? SET ?";
    connection.query(queryString, [table, newRowValues], (error, data) => {
      if (error) {
        throw error;
      }
      cb(data);
    });
  },

  updateById: (table, updateValues, id, cb) => {
    const queryString = "UPDATE ?? SET ? WHERE id = ?";
    connection.query(
      queryString,
      [table, updateValues, id],
      (error, results) => {
        if (error) {
          throw error;
        }
        cb(results);
      }
    );
  },
};

module.exports = orm;

// example
// orm.createOne("burgers", { text: "some other test burger" }, (result) =>
//   console.log(result)
// );
// OkPacket {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 7,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '',
//   protocol41: true,
//   changedRows: 0
// }

// example
// orm.getAll("burgers", (burgers) => console.log(burgers));
// [
//   RowDataPacket { id: 1, text: 'Rodeo Clown', devoured: 0 },
//   RowDataPacket { id: 2, text: 'Veg in a Hedge', devoured: 0 },
//   RowDataPacket { id: 3, text: 'The Keto Challenger', devoured: 0 }
// ]

// orm.updateById("burgers", { devoured: true }, 1, (result) => {
//   console.log(result);
// });
// $ node orm.js
// connected as id 84
// OkPacket {
//   fieldCount: 0,
//   affectedRows: 1,
//   insertId: 0,
//   serverStatus: 2,
//   warningCount: 0,
//   message: '(Rows matched: 1  Changed: 0  Warnings: 0',
//   protocol41: true,
//   changedRows: 0
// }
