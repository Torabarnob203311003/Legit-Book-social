import React, { useState } from 'react';
import { FaRegCommentAlt, FaShareAlt } from 'react-icons/fa';
import { HeartIcon } from '@heroicons/react/24/solid';
const newsData = [
    {
        id: 1,
        title: "The Rise of AI in 2025: What You Need to Know",
        date: "February 6, 2025",
        author: "Jane Doe",
        image: "https://th.bing.com/th/id/OIP.Dphry17_zHWgnLzs1jfjmQHaEK?rs=1&pid=ImgDetMain",
        content: "Artificial Intelligence (AI) is transforming industries at an unprecedented pace. From healthcare to finance, AI is revolutionizing how we work, live, and interact with the world. In 2025, AI technologies will continue to advance, making significant strides in automation, deep learning, and human-machine collaboration.",
        link: "/news/ai-2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/Artificial_Intelligence_Logo.svg"
    },
    {
        id: 2,
        title: "Top 10 Job Opportunities in the Tech Industry for 2025",
        date: "February 6, 2025",
        author: "John Smith",
        image: "https://th.bing.com/th/id/OIP.gzyDnhesC2qkAs7zBJ6sgwHaDt?rs=1&pid=ImgDetMain",
        content: "The tech industry is booming, with job opportunities in various fields growing rapidly. Whether you're a software developer, data scientist, or AI specialist, the demand for skilled professionals is higher than ever.",
        link: "/news/job-opportunities-2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a7/Jobs_icon.svg"
    },
    {
        id: 3,
        title: "Mastering Your Career Path: The Ultimate Roadmap for 2025",
        date: "February 6, 2025",
        author: "Alice Brown",
        image: "https://th.bing.com/th/id/OIP.nxrsutVaQ7ZQnXQP8OELIwHaEK?rs=1&pid=ImgDetMain",
        content: "Starting or advancing your career can be challenging, but with the right roadmap, you can achieve your professional goals. In 2025, career development will require adapting to new technologies and understanding industry trends.",
        link: "/news/career-roadmap-2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/34/Compass_icon.svg"
    },
    {
        id: 4,
        title: "The Future of Cybersecurity: Trends and Challenges in 2025",
        date: "February 7, 2025",
        author: "Tom Williams",
        image: "https://th.bing.com/th/id/OIP.b136Y7iFdCDcdk9Reuhk0gHaDt?rs=1&pid=ImgDetMain",
        content: "As cyber threats evolve, cybersecurity professionals must stay ahead of the curve. The future of cybersecurity will involve advanced machine learning, AI-driven defense systems, and increased collaboration across industries.",
        link: "/news/cybersecurity-2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Cybersecurity_logo.svg"
    },
    {
        id: 5,
        title: "Blockchain: The Technology Revolutionizing Finance",
        date: "February 8, 2025",
        author: "Emily Johnson",
        image: "https://th.bing.com/th/id/OIP.yprXKYxhJWB8SJy8YYLISQHaFE?rs=1&pid=ImgDetMain",
        content: "Blockchain is not just for cryptocurrency. Its decentralized nature is revolutionizing finance, making transactions more secure, transparent, and efficient.",
        link: "/news/blockchain-finance",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/47/Blockchain_logo.svg"
    },
    {
        id: 6,
        title: "Why You Should Learn Data Science in 2025",
        date: "February 9, 2025",
        author: "Mark Thompson",
        image: "https://th.bing.com/th/id/OIP.PVOsNZqgj2hanCPy4sZrYQHaD4?rs=1&pid=ImgDetMain",
        content: "Data science is one of the fastest-growing fields. With its ability to transform raw data into actionable insights, learning data science will open doors to countless career opportunities.",
        link: "/news/data-science-2025",
        logo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Data_Science_Logo.svg"
    },
    {
        id: 7,
        title: "The Role of Cloud Computing in Modern Business",
        date: "February 10, 2025",
        author: "Sarah Lee",
        image: "https://th.bing.com/th/id/OIP.PAkh0KxmvJbfnvAfaZZ5IgHaEK?rs=1&pid=ImgDetMain",
        content: "Cloud computing has changed how businesses operate, offering scalability, flexibility, and cost-effectiveness. It’s now essential for enterprises to adopt cloud services to remain competitive.",
        link: "/news/cloud-computing-business",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/5b/Cloud_computing_logo.svg"
    },
    {
        id: 8,
        title: "How 5G is Transforming the Telecommunications Industry",
        date: "February 11, 2025",
        author: "Michael Scott",
        image: "https://th.bing.com/th/id/OIP.KWj4w-mgWqdeO_nkjkd3hQHaEK?rs=1&pid=ImgDetMain",
        content: "5G technology promises faster, more reliable connectivity. The telecommunications industry is being transformed by this innovation, opening doors to advancements in IoT, autonomous vehicles, and much more.",
        link: "/news/5g-telecom",
        logo: "https://upload.wikimedia.org/wikipedia/commons/e/e5/5G_logo.svg"
    },
    {
        id: 9,
        title: "The Importance of Soft Skills in Tech Careers",
        date: "February 12, 2025",
        author: "David Green",
        image: "https://th.bing.com/th/id/OIP.bMvkDt4qIMgS8eOk0JQhQgHaEK?rs=1&pid=ImgDetMain",
        content: "In addition to technical expertise, soft skills such as communication, problem-solving, and teamwork are crucial in the tech industry. They often make the difference between a good and a great career.",
        link: "/news/soft-skills-tech",
        logo: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Soft_Skills_Logo.svg"
    },
    {
        id: 10,
        title: "The Impact of Augmented Reality on Consumer Retail",
        date: "February 13, 2025",
        author: "Lisa Brown",
        image: "https://th.bing.com/th/id/OIP.f7DBBbN9KXNOwv9gmcD0HgHaEK?rs=1&pid=ImgDetMain",
        content: "Augmented Reality (AR) is changing how consumers shop. With AR technology, retailers can provide immersive shopping experiences that drive customer engagement and sales.",
        link: "/news/ar-consumer-retail",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/14/AR_logo.svg"
    }
];


function News() {
    const [likeCount, setLikeCount] = useState(25);
    const [isLiked, setIsLiked] = useState(false);
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState([]);

    const toggleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
    };

    const toggleCommentBox = () => {
        setShowCommentBox(!showCommentBox);
    };

    const submitComment = () => {
        if (commentText.trim() !== "") {
            setComments([...comments, { text: commentText }]);
            setCommentText("");
        }
    };

    const handleShareClick = () => {
        alert("You shared this post!");
    };

    return (
        <div className="flex justify-center p-6">
            <div className="space-y-6 w-full max-w-screen-sm sm:ml-[-50px]">
                {newsData.map((newsItem) => (
                    <div key={newsItem.id} className="shadow-[0_0_1.5px_rgba(255,255,255,0.8)] p-6 rounded-lg bg-zinc-800 overflow-auto">
                        <div className="flex items-center space-x-4">
                            <h2 className="text-xl font-bold text-white">{newsItem.title}</h2>
                        </div>
                        <p className="text-gray-400 text-sm mb-4">{newsItem.date} | by {newsItem.author}</p>
                        <img src={newsItem.image} alt={newsItem.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                        <p className="text-gray-300 text-lg sm:text-xl mb-4">{newsItem.content}</p>

                        <div className="mt-6 ml-14 flex items-center justify-between text-gray-400 text-sm sm:text-base">
                            <div className="flex space-x-48">
                                <div className="flex items-center cursor-pointer" onClick={toggleLike}>
                                    <HeartIcon className={`h-6 w-6 transition-colors ${isLiked ? "text-red-500" : "text-gray-500"}`} />
                                    <span className="ml-1">{likeCount}</span>
                                </div>

                                <div className="flex items-center cursor-pointer" onClick={toggleCommentBox}>
                                    <FaRegCommentAlt className="h-6 w-6 text-gray-500" />
                                    <span className="ml-1">{comments.length}</span>
                                </div>

                                <FaShareAlt className="h-6 w-6 text-gray-500 cursor-pointer" onClick={handleShareClick} />
                            </div>
                        </div>

                        {showCommentBox && (
                            <div className="mt-4">
                                <textarea
                                    className="w-full p-2 text-white bg-gray-700 border border-gray-600 rounded-md focus:ring focus:ring-blue-500"
                                    rows="2"
                                    placeholder="Write a comment..."
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                ></textarea>
                                <button
                                    className="mt-2 px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
                                    onClick={submitComment}
                                >
                                    Comment
                                </button>
                            </div>
                        )}

                        {comments.length > 0 && (
                            <div className="mt-4">
                                {comments.map((comment, index) => (
                                    <div key={index} className="flex items-center space-x-3 text-gray-300 border-b border-gray-600 py-1">
                                        <img src="https://png.pngtree.com/png-clipart/20231015/original/pngtree-man-avatar-clipart-illustration-png-image_13302499.png" alt="Commenter Logo" className="w-8 h-8 rounded-full" />
                                        <p>{comment.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
