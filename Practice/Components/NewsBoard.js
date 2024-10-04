import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import { useState } from 'react';

const NewsBoard = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        let url = `https://newsapi.org/v2/everything?q=bitcoin&apiKey=14c44bf1635740609237f9a11080d3f6`;
        fetch(url).then(response => response.json()).then(data => setArticles(data.articles));
    }, []);
    
    return (
        <div>
            <h2 className='text-center mt-2'>Latest <span className='badge bg-danger'>News</span></h2>
            {articles.map((news, index) => {
                return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} />
            })}
        </div>
    )
}

export default NewsBoard
