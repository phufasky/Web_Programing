'use client'; // Ensure the component is a client component

import { useEffect, useState } from 'react';

type PostType = {
    id: number,
    title: string,
    content: string,
    author: string,
    date: string,  // Changed to string for better display
    category: string, 
}

type PhotoType = {
    id: number,
    title: string,  // Title from the second API
}

export default function MyFetch() {
    const [data, setData] = useState<PostType[] | null>(null); // Initialize with null
    const [titles, setTitles] = useState<PhotoType[] | null>(null); // State for titles from second API

    useEffect(() => {
        async function getData() {
            try {
                // Fetch data from the first API
                const blogResult = await fetch('/api/vercel');
                const blogData = await blogResult.json();

                // Fetch titles from the second API
                const photosResult = await fetch('https://jsonplaceholder.typicode.com/photos');
                const photosData = await photosResult.json();

                console.log("Blog Data: ", blogData);
                console.log("Photos Data: ", photosData);

                setData(blogData);   // Store blog data in state
                setTitles(photosData); // Store titles data in state
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        }
        getData();
    }, []);

    if (!data || !titles) return <div>...loading!!</div>;

    return (
        <div className="bg-light-blue-100 min-h-screen p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.map((item, index) => (
                    <div key={item.id} className="bg-blue-200 rounded-lg p-6">
                        <h2 className="text-xl font-semibold text-blue-900 mb-2">
                            {titles[index]?.title || "No Title Available"} {/* Title from photos API */}
                        </h2>
                        <p className="text-gray-700 mb-4">{item.content}</p> {/* Content from blog API */}
                        <p className="text-sm text-blue-800">By {item.author} | {new Date(item.date).toLocaleDateString()}</p>
                        <span className="text-xs text-blue-600">Category: {item.category}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
