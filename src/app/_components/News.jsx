"use client";
import React, { Component, useState, useEffect } from "react";
import './News.css';
import NewsCard from "./NewsCard";
function News() {
    const [news, setNews] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 3;
  
    useEffect(() => {
      fetch(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=0760ac8aa0ac4852886b8e8a870351fd"
      )
        .then((response) => response.json())
        .then((data) => setNews(data.articles || []))
        .catch((error) => {
          console.error("Error fetching news:", error);
          setNews([]); // Ensure news is an array even if there is an error
        });
        console.log(news)
    }, []);
  
    const handleNext = () => {
      setCurrentPage((prevPage) =>
        Math.min(prevPage + 1, Math.floor(news.length / itemsPerPage))
      );
    };
  
    const handlePrevious = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
    };
  
    const startIndex = currentPage * itemsPerPage;
    const selectedNews = news.slice(startIndex, startIndex + itemsPerPage);
  
  return (
    <div className="app">
            <button
              className="scroll-button left"
              onClick={handlePrevious}
              disabled={currentPage === 0}
            >
              &lt;
            </button>
            <div className="news-cards-container">
              {selectedNews.map((article, index) => (
                <NewsCard
                  key={index}
                  image={article.urlToImage}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                />
              ))}
            </div>
            <button
              className="scroll-button right"
              onClick={handleNext}
              disabled={startIndex + itemsPerPage >= news.length}
            >
              &gt;
            </button>
          </div>
  )
}

export default News