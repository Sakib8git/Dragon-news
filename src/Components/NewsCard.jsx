import { useState } from "react";
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from "react-icons/fa";
import { format } from "date-fns";

export default function NewsCard({ news, initialClamp = 200, onReadMore }) {
  const { title, rating, total_view, author, image_url, details } = news;

  const [expanded, setExpanded] = useState(false);

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore(news); // optional: navigate or open modal
      return;
    }
    setExpanded((prev) => !prev);
  };

  const displayText =
    expanded || details.length <= initialClamp
      ? details
      : `${details.slice(0, initialClamp)}...`;

  return (
    <div className="card bg-base-100  rounded-md shadow-sm">
      {/* Header: Author + Date */}
      <div className="flex items-center justify-between px-4 py-3 ">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full "
          />
          <div>
            <p className="font-semibold">{author.name}</p>
            <p className="text-sm text-gray-500">
              {format(new Date(author.published_date), "PPP")}
            </p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn btn-ghost btn-xs"
            aria-label="More options"
          >
            <FaRegBookmark />
          </button>
          <button
            type="button"
            className="btn btn-ghost btn-xs"
            aria-label="More options"
          >
            <FaShareAlt />
          </button>
        </div>
      </div>

      {/* Title */}
      <h2 className="px-4 pt-3 text-lg font-bold leading-snug">{title}</h2>

      {/* Image */}
      <figure className="px-4 py-3">
        <img
          src={image_url}
          alt={title}
          className="w-full rounded-md object-cover"
        />
      </figure>

      {/* Details + Read More */}
      <div className="px-4 pb-3 text-gray-700 text-sm">
        <p>
          {expanded
            ? details
            : details.length > 200
            ? `${details.slice(0, 200)}...`
            : details}
        </p>

        {details.length > 200 && (
          <button
            type="button"
            onClick={handleReadMore}
            className="btn btn-link btn-xs p-0 mt-1 text-primary"
            aria-expanded={expanded}
          >
            {expanded ? "Show Less" : "Read More"}
          </button>
        )}
      </div>

      {/* Footer: Rating + Views */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={
                i < Math.round(rating.number)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }
            />
          ))}
          <span className="ml-1 font-semibold text-gray-700">
            {rating.number.toFixed(1)}
          </span>
        </div>

        {/* Views */}
        <div className="flex items-center gap-1 text-gray-600">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
}
