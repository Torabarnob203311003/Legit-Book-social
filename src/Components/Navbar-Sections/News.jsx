import React from 'react';

const newsData = [
    {
        id: 1,
        title: "The Rise of AI in 2025: What You Need to Know",
        date: "February 6, 2025",
        author: "Jane Doe",
        image: "https://th.bing.com/th/id/OIP.Dphry17_zHWgnLzs1jfjmQHaEK?rs=1&pid=ImgDetMain", // Replace with actual image URL
        content: "Artificial Intelligence (AI) is transforming industries at an unprecedented pace. From healthcare to finance, AI is revolutionizing how we work, live, and interact with the world. In 2025, AI technologies will continue to advance, making significant strides in automation, deep learning, and human-machine collaboration. Here's what you need to know about the AI landscape in 2025.",
        link: "/news/ai-2025"
    },
    {
        id: 2,
        title: "Top 10 Job Opportunities in the Tech Industry for 2025",
        date: "February 6, 2025",
        author: "John Smith",
        image: "https://th.bing.com/th/id/OIP.gzyDnhesC2qkAs7zBJ6sgwHaDt?rs=1&pid=ImgDetMain", // Replace with actual image URL
        content: "The tech industry is booming, with job opportunities in various fields growing rapidly. Whether you're a software developer, data scientist, or AI specialist, the demand for skilled professionals is higher than ever. Here are the top 10 job opportunities you should consider in the tech industry for 2025.",
        link: "/news/job-opportunities-2025"
    },
    {
        id: 3,
        title: "Mastering Your Career Path: The Ultimate Roadmap for 2025",
        date: "February 6, 2025",
        author: "Alice Brown",
        image: "https://th.bing.com/th/id/OIP.nxrsutVaQ7ZQnXQP8OELIwHaEK?rs=1&pid=ImgDetMain", // Replace with actual image URL
        content: "Starting or advancing your career can be challenging, but with the right roadmap, you can achieve your professional goals. In 2025, career development will require adapting to new technologies and understanding industry trends. This article explores key steps to master your career path and create a roadmap for success.",
        link: "/news/career-roadmap-2025"
    }
];

function News() {
    return (
        <div className="p-6 ml-0 sm:ml-[150px] rounded-lg w-full bg-zinc-800 sm:w-auto  space-y-6">
            {newsData.map((newsItem) => (
                <div key={newsItem.id} className=" p-6 rounded-lg shadow-lg">
                    <img src={newsItem.image} alt={newsItem.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                    <h2 className="text-xl font-semibold text-white">{newsItem.title}</h2>
                    <p className="text-gray-400 text-sm mb-4">{newsItem.date} | by {newsItem.author}</p>
                    <p className="text-gray-300 mb-4">{newsItem.content}</p>
                    <a href={newsItem.link} className="text-black bg-white p-2 rounded-xl ">Read more</a>
                </div>
            ))}
        </div>
    );
}

export default News;
