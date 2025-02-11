import React, { useState } from 'react';
import { FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import { HeartIcon } from "@heroicons/react/24/solid";

const educationPosts = [
    {
        id: 1,
        author: {
            name: "John Doe",
            role: "Senior Software Engineer at Google",
            avatar: "https://th.bing.com/th/id/OIP.0dIOLEKWeIt5WWAAUZeYewHaD4?rs=1&pid=ImgDetMain"
        },
        date: "2h ago",
        title: "Top 5 Skills Every Developer Should Learn in 2025",
        description: "AI, cloud computing, and cybersecurity are shaping the future. Which one are you learning this year? 🚀",
        image: "https://th.bing.com/th/id/OIP.0dIOLEKWeIt5WWAAUZeYewHaD4?rs=1&pid=ImgDetMain",
        reactions: { likes: 220, comments: 18, shares: 12 }
    },
    {
        id: 2,
        author: {
            name: "Jane Smith",
            role: "HR Manager at Microsoft",
            avatar: "https://randomuser.me/api/portraits/women/44.jpg"
        },
        date: "5h ago",
        title: "Educational Requirements for Software Engineers",
        description: "Is a CS degree necessary to land a tech job? Explore different career paths, from bootcamps to self-learning.",
        image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc",
        reactions: { likes: 340, comments: 27, shares: 19 }
    },
    {
        id: 3,
        author: {
            name: "Mark Wilson",
            role: "Tech Recruiter at Amazon",
            avatar: "https://randomuser.me/api/portraits/men/50.jpg"
        },
        date: "1d ago",
        title: "How to Prepare for Job Interviews in Tech",
        description: "From system design to behavioral questions, here’s a breakdown of what top companies look for in candidates.",
        image: "https://images.unsplash.com/photo-1598257006456-b180b0a1df04",
        reactions: { likes: 410, comments: 35, shares: 23 }
    }
];

function Education() {
    const [likedPosts, setLikedPosts] = useState({});
    const [showCommentBox, setShowCommentBox] = useState(false);
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState({});

    const toggleLike = (postId) => {
        setLikedPosts((prevLikes) => ({
            ...prevLikes,
            [postId]: !prevLikes[postId]
        }));
    };

    const toggleCommentBox = (postId) => {
        setShowCommentBox((prevState) => !prevState);
    };

    const submitComment = (postId) => {
        if (commentText.trim() !== "") {
            setComments((prevComments) => ({
                ...prevComments,
                [postId]: [
                    ...(prevComments[postId] || []),
                    { text: commentText, logo: educationPosts.find(post => post.id === postId)?.author.avatar }
                ]
            }));
            setCommentText("");
        }
    };

    return (
        <div className="sm:ml-[98px] p-6 space-y-6">
            {educationPosts.map((post) => {
                const isLiked = likedPosts[post.id];
                return (
                    <div key={post.id} className="shadow-[0_0_1.5px_rgba(255,255,255,0.8)] p-6 sm:w-[712px] sm:ml-[150px] rounded-lg bg-zinc-800 max-h-auto overflow-auto scrollbar-hidden">
                        {/* Post Header */}
                        <div className="flex items-center gap-4 mb-3">
                            <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
                            <div>
                                <h3 className="font-bold text-xl sm:text-2xl text-white">{post.author.name}</h3>
                                <p className="text-gray-400 text-sm">{post.author.role} • {post.date}</p>
                            </div>
                        </div>
                        <div className="border-b-2 border-zinc-600 my-3 w-full"></div>

                        {/* Post Content */}
                        <h3 className="text-xl font-medium text-white">{post.title}</h3>
                        <p className="text-gray-300 mt-1">{post.description}</p>

                        {post.image && (
                            <img src={post.image} alt={post.title} className="mt-4 rounded-lg sm:w-[950px] sm:h-[380px]" />
                        )}

                        {/* Reactions & Actions */}
                        <div className="flex items-center justify-between mt-4 text-gray-400 text-sm sm:text-base">
                            <div>{post.reactions.likes} Likes • {post.reactions.comments} Comments • {post.reactions.shares} Shares</div>
                        </div>

                        <div className="flex items-center justify-between mt-4 border-t border-gray-600 pt-2">
                            {/* Like Button */}
                            <button
                                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition"
                                onClick={() => toggleLike(post.id)}
                            >
                                <HeartIcon className={`h-6 w-6 ${isLiked ? "text-red-500" : "text-gray-400"}`} />
                                Like
                            </button>

                            {/* Comment Button */}
                            <button
                                className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition"
                                onClick={() => toggleCommentBox(post.id)}
                            >
                                <FaRegCommentAlt className="h-6 w-6 text-gray-500" />
                                Comment
                            </button>

                            {/* Share Button */}
                            <button className="flex items-center gap-2 text-gray-400 hover:text-blue-500 transition">
                                <FaShareAlt className="h-6 w-6 text-gray-500" />
                                Share
                            </button>
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
                                    onClick={() => submitComment(post.id)}
                                >
                                    Comment
                                </button>
                            </div>
                        )}

                        {/* Display Comments */}
                        {comments[post.id] && comments[post.id].length > 0 && (
                            <div className="mt-4">
                                {comments[post.id].map((comment, index) => (
                                    <div key={index} className="flex items-center space-x-3 text-gray-300 border-b border-gray-600 py-1">
                                        <img src={comment.logo} alt="Commenter Logo" className="w-8 h-8 rounded-full" />
                                        <p>{comment.text}</p>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default Education;
