import React, { useEffect, useState } from 'react';
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
        image: "https://th.bing.com/th/id/OIP.SQ8Hww7Nfyrc_Ovth1dKuAHaEu?rs=1&pid=ImgDetMain",
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

const Creators = () => {
    const [inView, setInView] = useState(false);

    // Intersection Observer to detect when the learning resources section is in view
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setInView(true);
                }
            },
            { threshold: 0.5 }
        );
        const section = document.getElementById("learning-resources");
        observer.observe(section);

        return () => {
            if (section) {
                observer.unobserve(section);
            }
        };
    }, []);

    return (
        <div className="bg-[#1A1A1A] text-white p-6 min-h-screen flex justify-center">
            {/* Main Content Container */}
            <div className="space-y-12 w-full max-w-screen-sm">
                {/* Collaboration Hub */}
                <div className="space-y-8">
                    {creatorPosts.map((post) => (
                        <div key={post.id} className="shadow-[0_0_1.5px_rgba(255,255,255,0.8)] p-6 rounded-lg bg-zinc-800 overflow-auto mx-auto">
                            {/* Author Info */}
                            <div className="flex items-center gap-3 mb-4">
                                <img src={post.author.avatar} alt={post.author.name} className="w-12 h-12 rounded-full" />
                                <div>
                                    <h4 className="font-semibold">{post.author.name}</h4>
                                    <p className="text-gray-400 text-sm">{post.author.role} • {post.date}</p>
                                </div>
                            </div>

                            {/* Post Content */}
                            <h3 className="text-lg font-semibold">{post.title}</h3>
                            <p className="text-gray-300 mt-2">{post.description}</p>

                            {/* Post Image */}
                            {post.image && (
                                <img src={post.image} alt="Post" className="mt-4 w-full max-w-full rounded-lg object-cover hover:opacity-90 transition-opacity" />
                            )}

                            {/* Engagement Section */}
                            <div className="flex justify-between mt-4 text-gray-400 text-sm">
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
                <h2 className="text-2xl font-bold mt-12 mb-6 text-center">📚 Learning Resources</h2>
                <div
                    id="learning-resources"
                    className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-in-out ${inView ? 'opacity-100 translate-x-0' : 'opacity-100 translate-x-0'}`}
                >
                    {/* Mapping learning resources */}
                    {creatorPosts.map((resource, index) => (
                        <a
                            key={index}
                            href={resource.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#252525] p-6 rounded-lg shadow-[0_0_1.5px_rgba(255,255,255,0.8)] hover:bg-[#333] transition-all transform hover:scale-105 hover:shadow-lg mx-auto"
                        >
                            <h3 className="text-lg font-semibold text-blue-400">{resource.title}</h3>
                            <p className="text-gray-300 mt-2">{resource.description}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Creators;
