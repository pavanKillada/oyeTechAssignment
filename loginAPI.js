const express = require("express");
const path = require("path");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "database.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });
    app.listen(3000, () => {
      console.log("Server Running at http://localhost:3000/");
    });
  } catch (e) {
    console.log(`DB Error: ${e.message}`);
    process.exit(1);
  }
};

initializeDBAndServer();

app.post("/customer/", async (request, response) => {
  const { phone_no, name, email } = request.body;

  //input params validation
  if (phone_no === "" || name === "" || email === "") {
    response.status(400);
    response.send("phone number, name and email are required");
  }

  //checking for duplicates and adding new customer
  const dbQuery = `SELECT * FROM customer WHERE phone_no = ${phone_no};`;
  const dbResp = await db.get(dbQuery);
  if (dbResp !== undefined) {
    response.status(400);
    response.send("customer with the same phone number is already exist");
  } else {
    const postQuery = `INSERT INTO customer values(${phone_no},"${name}","${email}");`;
    await db.run(postQuery);
    response.status(201);
    response.send("customer successfully added");
  }
});
