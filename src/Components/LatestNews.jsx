import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("/news.json")
      .then((res) => res.json())
      .then((data) => {
        setNews(data);
      });
  }, []);

  // const allNews = fetch("/news.json").then((res) => res.json());
  // console.log(allNews);
  return (
    <div className="flex  items-center gap-5 bg-base-200 p-3">
      <p className="bg-secondary text-white px-3 py-2">Latest</p>
      <Marquee className="flex gap-5" pauseOnHover={true} speed={60}>
        {news
          .filter((item) => item.others?.is_today_pick === true)
          .map((latest) => (
            <p key={latest.id} className="mx-4">
              🔥 {latest.title}
            </p>
          ))}
      </Marquee>
    </div>
  );
};
export default LatestNews;
