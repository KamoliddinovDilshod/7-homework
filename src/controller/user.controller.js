import {errorHandler} from "../exceptions/errorHandler.js";
import { read } from "../utils/FS.js";

export const getNews = async (req, res) => {
  const getNews = await read("news.json").catch((err) =>
    next(new errorHandler("error", 500))
  );
  res.json({
    message : getNews
  });
};

export const getNewsId = async (req, res) => {
  const {id} = req.params
  const getNews = await read("news.json").catch((err) =>
    next(new errorHandler("error", 500))
  );

  const newsId = getNews.find(e => e.id == id)

  res.json({
    message : newsId
  })
};
