// Express server
import express from "express";
// allows us to parse through the body of the request
import bodyParser from "body-parser";

// postgreSQL module
import pg from "pg";

// allows us to access our passwords and other sensitive variables from the .env file
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

// allows the application to use EJS
app.set("view engine", "ejs");

// allows the Express server to correctly read form data via the body of the request (req.body)
app.use(bodyParser.urlencoded({ extended: true }));
// tells the application to serve static files (CSS & other front end files) from the "public" directory
app.use(express.static("public"));

// accessing the postgreSQL server
const db = new pg.Client({
  user: process.env.PG_USERNAME,
  host: "localhost",
  // access the "books-app" database from the postgreSQL server
  database: "books-app",
  password: process.env.PG_PASSWORD,
  port: 5432
});
// connect to the postgreSQL server
db.connect();

// constants for the tables in the books-app database in the postgreSQL server
const usersTable = "users";
const booksTable = "books";
const reviewsTable = "reviews";
const notesTable = "notes";


// default GET route
app.get("/", async (req, res) => {
  console.log(`Default GET route (\'/\'): req.body = `, req.body);
  // render the idex.ejs file
  res.render("index", {});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
