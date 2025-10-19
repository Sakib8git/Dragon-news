import React from "react";

import { IoIosArrowRoundBack } from "react-icons/io";
import { Link } from "react-router";

const NewsDetailsCard = ({ news }) => {
//   console.log(news);
  return (
    <div>
      <div>
        <div className="max-w-4xl mx-auto p-6 bg-white">
          <div className=" rounded-lg overflow-hidden">
            {/* Header Image */}
            <div className="relative">
              <img
                src={news.image_url}
                alt={news.title}
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="p-6">
              {/* Title */}
              <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                {news.title}
              </h1>

              {/* Article Text */}
              <div className="text-gray-600 text-sm leading-relaxed mb-6">
                <p className="text-justify">{news.details}</p>
              </div>

              {/* Back Button */}
              <Link to={`/category/${news.category_id}`} className="btn btn-secondary w-[350px] text-white px-6 py-3 rounded hover:bg-red-700 transition-colors flex items-center gap-2">
                {/* <ArrowLeft size={20} /> */}
                <IoIosArrowRoundBack size={30} />
                All news in this category
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailsCard;
