import express from "express";
import cors from "cors";
import session from "express-session";

import "./db.js";

import authRouter from "./routes/index.js";
import passport from "./passport/index.js";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

app.use(express.json());

app.use(
  session({
    secret: "supersecret",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.get("/", (req, res) => {
  res.json({ message: "Welcome" });
});

app.use("/auth", authRouter);

app.listen(3002, () => {
  console.log("Server running on port 3002...");
});
