const sqlite3 = require("sqlite3");

function insertOrUpdateCustomers(customers) {
  const db = new sqlite3.Database("database.db");

  customers.forEach((customer) => {
    const { email, name } = customer;

    db.run(
      `INSERT OR REPLACE INTO students (email, name) VALUES ("${email}", "${name}");`,
      function (error) {
        if (error) {
          console.error(
            `Error inserting customer with email ${email}: ${error.message}`
          );
        } else {
          if (this.changes > 0) {
            console.log(
              `Customer with email ${email} inserted or updated successfully.`
            );
          } else {
            console.log(
              `Customer with email ${email} was not inserted or updated.`
            );
          }
        }
      }
    );
  });

  db.close();
}

const customers = [
  {
    email: "anurag11@yopmail.com",
    name: "anurag",
  },
  {
    email: "sameer11@yopmail.com",
    name: "sameer",
  },
  {
    email: "ravi11@yopmail.com",
    name: "ravi",
  },
  {
    email: "akash11@yopmail.com",
    name: "akash",
  },
  {
    email: "anjali11@yopmail.com",
    name: "anjai",
  },
  {
    email: "santosh11@yopmail.com",
    name: "santosh",
  },
];

insertOrUpdateCustomers(customers);
