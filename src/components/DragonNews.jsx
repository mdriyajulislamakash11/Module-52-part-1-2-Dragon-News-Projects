// DragonNews.jsx
import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const DragonNews = () => {
  const allNews = useLoaderData(); 
  const { id } = useParams(); 
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    const matched = allNews.filter((news) => news.category_id == id);
    setFilteredNews(matched);
  }, [allNews, id]);

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        Category Wise News: {filteredNews.length}
      </h2>

      {filteredNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default DragonNews;
