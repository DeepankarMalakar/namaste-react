import { useEffect, useState } from 'react';
import Body from './Body';

export default function Content() {
    const [content, setContent] = useState([]); // Start with an empty array
    const [isLoading, setIsLoading] = useState(false); // Track loading state

    useEffect(() => {
        setIsLoading(true); // Set loading state to true
        const url = `https://api.sampleapis.com/cartoons/cartoons2D`;
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setContent(data.content || []); // Handle potential absence of "content"
            })
            .catch(error => {
                console.error('Error fetching data:', error); // Log errors
            })
            .finally(() => {
                setIsLoading(false); // Set loading state to false
            });
    }, []);

    return (
        <div>
            <h2 className='text-center mt-2'>Latest <span className='badge bg-danger'>News</span></h2>
            {isLoading ? (
                <p>Loading...</p>
            ) : content.length > 0 ? (
                content.map((toon, index) => (
                    <Body key={index} title={toon.title} genre={toon.genre} image={toon.image} url={toon.url} />
                ))
            ) : (
                <p>No cartoons found.</p>
            )}
        </div>
    );
}