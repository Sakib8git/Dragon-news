import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import RightAside from "../Components/homeLayout/RightAsid";
import { useLoaderData, useParams } from "react-router";
import NewsDetailsCard from "../Components/NewsDetailsCard";

const NewsDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  const [news, setNews] = useState({});
  // console.log(data, id, news);

  useEffect(() => {
    const newsDetails = data.find((singleNews) => singleNews.id == id);
    setNews(newsDetails);
  }, [data, id]);

  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto">
        <div className="grid grid-cols-12 gap-4 ">
          <section className="col-span-9 p-2">
            <div className="text-3xl font-semibold">News Deatils</div>
            <NewsDetailsCard news={news}></NewsDetailsCard>
          </section>
          <aside className="col-span-3 p-2">
            <RightAside></RightAside>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default NewsDetails;
