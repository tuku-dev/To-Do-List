import { useState } from "react";
import { Link } from "react-router-dom";

export default function NewsItem({ newsItem }) {
  const [imageError, setImageError] = useState(false);

  return (
    <>
      <div className="border rounded-xl shadow p-3 relative group overflow-hidden">
        <div className="relative w-full flex items-center justify-center h-40 mb-2">
          {(!newsItem.urlToImage || imageError) && (
            <span className="top-0 left-0 right-0 text-3xl text-gray-300">
              No Image
            </span>
          )}
          {newsItem.urlToImage && !imageError && (
            <img
              src={newsItem.urlToImage}
              alt={newsItem.title}
              className="h-40 object-cover w-full object-center"
              onError={() => setImageError(true)} // Set error state if image fails
            />
          )}
        </div>
        <h3 className="font-bold mb-3 leading-6">{newsItem.title}</h3>
        <div className="leading-5">{newsItem.description}</div>
        <div className="absolute w-full h-full bg-gray-700 bg-opacity-35 top-0 left-0 rounded-xl flex items-center justify-center transition-transform translate-y-full group-hover:translate-y-0">
          <span className="absolute h-40 w-full top-auto left-0 bottom-auto z-0 bg-gradient-to-b from-transparent via-white to-transparent"></span>
          <Link className="bg-blue-600 text-white border border-blue-600 rounded shadow px-8 py-2 z-10" target="_blank" to={newsItem.url}>Open</Link>
        </div>
      </div>
    </>
  );
}
