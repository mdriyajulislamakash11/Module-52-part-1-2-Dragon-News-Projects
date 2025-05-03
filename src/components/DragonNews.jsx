import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import NewsCard from "./NewsCard";

const DragonNews = () => {
  const allNews = useLoaderData();
  const { id } = useParams();
  const [filteredNews, setFilteredNews] = useState([]);

  useEffect(() => {
    if (id) {
      const matched = allNews.filter((news) => news.category_id == id);
      setFilteredNews(matched);
    } else {
      setFilteredNews(allNews);
    }
  }, [allNews, id]);

//   if (!filteredNews.length) {
//     return <p className="text-center font-medium text-gray-600">Loading or no news found...</p>;
//   }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">
        {id ? "Category Wise News" : "All News"}: {filteredNews.length}
      </h2>

      {filteredNews.map((news) => (
        <NewsCard key={news._id} news={news} />
      ))}
    </div>
  );
};

export default DragonNews;
