import React, { useState } from 'react';
import { FaRegCommentAlt, FaShareAlt } from 'react-icons/fa';
import { HeartIcon } from '@heroicons/react/24/solid';

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
            setComments([
                ...comments,
                { text: commentText },
            ]);
            setCommentText("");
        }
    };

    const handleShareClick = () => {
        alert("You shared this post!");
    };

    return (
        <div className="p-6 ml-0 sm:ml-[98px] rounded-lg w-[20%] bg-cover sm:w-auto space-y-6 flex flex-col items-center w-full max-w-2xl mx-auto mt-6 space-y-6">
            {newsData.map((newsItem) => (
                <div key={newsItem.id} className="shadow-[0_0_1.5px_rgba(255,255,255,0.8)] p-6 ml-0 sm:ml-[150px] rounded-lg max-w-[712px] bg-zinc-800 sm:w-auto overflow-auto scrollbar-hidden">

                    {/* User Info */}
                    <div className="flex items-center space-x-4">
                        <h2 className="text-xl font-bold text-white">{newsItem.title}</h2>
                    </div>

                    <p className="text-gray-400 text-sm mb-4">{newsItem.date} | by {newsItem.author}</p>

                    {/* Image */}
                    <img src={newsItem.image} alt={newsItem.title} className="w-full h-48 object-cover rounded-lg mb-4" />

                    {/* Content */}
                    <p className="text-gray-300 text-lg sm:text-xl mb-4">{newsItem.content}</p>

                    {/* Actions */}
                    <div className="mt-6 ml-14 flex items-center justify-between text-gray-400 text-sm sm:text-base">
                        <div className="flex space-x-48">
                            {/* Like Button */}
                            <div className="flex items-center cursor-pointer" onClick={toggleLike}>
                                <HeartIcon className={`h-6 w-6 transition-colors ${isLiked ? "text-red-500" : "text-gray-500"}`} />
                                <span className="ml-1">{likeCount}</span>
                            </div>

                            {/* Comment Button */}
                            <div className="flex items-center cursor-pointer" onClick={toggleCommentBox}>
                                <FaRegCommentAlt className="h-6 w-6 text-gray-500" />
                                <span className="ml-1">{comments.length}</span>
                            </div>

                            {/* Share Button */}
                            <FaShareAlt className="h-6 w-6 text-gray-500 cursor-pointer" onClick={handleShareClick} />
                        </div>
                    </div>

                    {/* Comment Box (Toggles) */}
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

                    {/* Display Comments */}
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
    );
}

export default News;
