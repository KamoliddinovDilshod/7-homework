import express from "express";
import { getNews, getNewsId } from "./controller/user.controller.js";

const app = express();

app.use(express.json());

app.get("/news", getNews);
app.get("/new/:id", getNewsId);

// app.all("/*", (req, res) => {

// });

app.listen(9090, console.log(9090));
