import React from 'react';
import { FaRegThumbsUp, FaRegCommentDots, FaShare } from "react-icons/fa";

// Sample Creator Collaboration Posts
const creatorPosts = [
    {
        id: 1,
        author: {
            name: "Emma Johnson",
            role: "YouTube Tech Reviewer",
            avatar: "https://randomuser.me/api/portraits/women/28.jpg"
        },
        date: "1h ago",
        title: "Looking for a Video Editor 🎬",
        description: "I'm searching for a skilled video editor to help with my tech reviews. If you're interested, drop your portfolio in the comments!",
        image: "https://images.unsplash.com/photo-1584433144859-1fc8a5fc1843",
        reactions: { likes: 120, comments: 34, shares: 15 }
    },
    {
        id: 2,
        author: {
            name: "Michael Roberts",
            role: "Freelance Digital Marketer",
            avatar: "https://randomuser.me/api/portraits/men/55.jpg"
        },
        date: "3h ago",
        title: "Need a Graphic Designer for Social Media",
        description: "I'm looking for a designer to create engaging social media graphics. DM me if you're interested! 🎨",
        image: "https://images.unsplash.com/photo-1590650046871-9d19d5940925",
        reactions: { likes: 85, comments: 20, shares: 10 }
    },
    {
        id: 3,
        author: {
            name: "Sophia Martinez",
            role: "UI/UX Designer & Blogger",
            avatar: "https://randomuser.me/api/portraits/women/45.jpg"
        },
        date: "5h ago",
        title: "Podcast Partner Wanted 🎙️",
        description: "I'm starting a design-focused podcast and looking for a co-host. If you're passionate about UI/UX, let's collaborate!",
        image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
        reactions: { likes: 140, comments: 45, shares: 22 }
    }
];

// Learning Resources List
const learningResources = [
    {
        title: "Canva for Beginners",
        link: "https://www.canva.com/learn/",
        description: "Learn how to design stunning graphics with Canva."
    },
    {
        title: "YouTube Growth Guide",
        link: "https://blog.youtube/creators/",
        description: "Tips on growing your YouTube channel and monetizing content."
    },
    {
        title: "SEO for Content Creators",
        link: "https://moz.com/learn/seo",
        description: "Master search engine optimization to boost your reach."
    },
    {
        title: "Podcasting 101",
        link: "https://www.buzzsprout.com/blog/podcasting-101",
        description: "Step-by-step guide to starting your own podcast."
    }
];

const Creators = () => {
    return (
        <div className="bg-[#1A1A1A] text-white p-6 min-h-screen">
            {/* Collaboration Hub */}
            <h2 className="text-2xl font-bold mb-4">🚀 Creator Collaboration Hub</h2>
            <div className="space-y-6">
                {creatorPosts.map((post) => (
                    <div key={post.id} className="bg-[#252525] p-4 rounded-lg shadow-md">
                        {/* Author Info */}
                        <div className="flex items-center gap-3">
                            <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
                            <div>
                                <h4 className="font-semibold">{post.author.name}</h4>
                                <p className="text-gray-400 text-sm">{post.author.role} • {post.date}</p>
                            </div>
                        </div>

                        {/* Post Content */}
                        <h3 className="mt-3 text-lg font-semibold">{post.title}</h3>
                        <p className="text-gray-300 mt-1">{post.description}</p>

                        {/* Post Image */}
                        {post.image && (
                            <img src={post.image} alt="Post" className="mt-3 w-full rounded-lg" />
                        )}

                        {/* Engagement Section */}
                        <div className="flex justify-between mt-3 text-gray-400 text-sm">
                            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                                <FaRegThumbsUp /> {post.reactions.likes}
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                                <FaRegCommentDots /> {post.reactions.comments}
                            </div>
                            <div className="flex items-center gap-2 cursor-pointer hover:text-blue-500">
                                <FaShare /> {post.reactions.shares}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Learning Resources */}
            <h2 className="text-2xl font-bold mt-10 mb-4">📚 Learning Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {learningResources.map((resource, index) => (
                    <a key={index} href={resource.link} target="_blank" rel="noopener noreferrer" className="bg-[#252525] p-4 rounded-lg shadow-md hover:bg-[#333] transition">
                        <h3 className="text-lg font-semibold text-blue-400">{resource.title}</h3>
                        <p className="text-gray-300 mt-1">{resource.description}</p>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Creators;
