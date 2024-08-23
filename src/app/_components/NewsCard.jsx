import React from 'react';
import './NewsCard.css';
import Link from 'next/link';
const NewsCard = ({ image, title, description, url }) => {
    return (
        <div className="news-card">
            <img src={image} alt="news" className="news-card-image" />
            <div className="news-card-content">
                <h2>{title}</h2>
                <p>{description}</p>
                <Link href={url} target="_blank" rel="noopener noreferrer">Read More</Link>
            </div>
        </div>
    );
};

export default NewsCard;