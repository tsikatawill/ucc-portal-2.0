import { useEffect, useCallback } from "react";
import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";
import { NewsReelItemI } from "../types";

export const useFirestore = () => {
  const [newsItems, setNewsItems] = useState<NewsReelItemI[]>([]);
  const [loadingNewsItems, setLoadingNewsItems] = useState<boolean>(true);

  const getNews = useCallback(async () => {
    setLoadingNewsItems(true);
    getDocs(collection(db, "news_items"))
      .then((snapshot) => {
        const docs = snapshot.docs.map((item) => ({ ...item.data() }));
        setNewsItems(docs as NewsReelItemI[]);
        setLoadingNewsItems(false);
      })
      .catch((error) => {
        console.log(error);
        setLoadingNewsItems(false);
      });
  }, []);

  useEffect(() => {
    getNews();
  }, [getNews]);

  return { newsItems, loadingNewsItems };
};
