import express from "express";
import { getNews, getNewsId } from "./controller/user.controller.js";

const app = express();

app.use(express.json());

app.get("/news", getNews);
app.get("/new/:id", getNewsId);

// app.all("/*", (req, res) => {

// });

const PORT = process.env.PORT || 9090
app.listen(PORT, console.log(PORT));
