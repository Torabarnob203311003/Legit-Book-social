import { useState } from "react";
import { FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import { HeartIcon } from "@heroicons/react/24/solid";
import CreatePost from "./Navbar-Sections/CreatePost";

export default function Post({ username, time, message, imageUrl, logoUrl }) {
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
                { text: commentText, logo: logoUrl },
            ]);
            setCommentText("");
        }
    };

    const handleShareClick = () => {
        alert("You shared this post!");
    };

    return (
        <div className="flex flex-col items-center p-4 space-y-6 sm:ml-[-25px]">
            <div className="shadow-md p-4 sm:p-5 md:p-6 rounded-lg max-w-[700px] w-full bg-zinc-800 overflow-auto">
                {/* User Info */}
                <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                        src={logoUrl}
                        alt="Logo"
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full"
                    />
                    <div className="flex gap-2 items-center">
                        <h3 className="font-bold text-base sm:text-xl md:text-2xl">{username}</h3>
                        <p className="text-gray-400 text-sm sm:text-lg">{time}</p>
                    </div>
                </div>
                <div className="border-b-2 border-zinc-600 my-3 w-full"></div>

                {/* Post Content */}
                <p className="mt-4 text-gray-300 text-base sm:text-xl md:text-xl">{message}</p>

                {/* Image */}
                {imageUrl && (
                    <img
                        src={imageUrl}
                        alt="Post"
                        className="mt-4 rounded-lg w-full sm:w-[950px] sm:h-[380px] md:w-[712px] md:h-[380px] object-cover"
                    />
                )}

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between text-gray-400 text-sm sm:text-base">
                    <div className="flex space-x-12 sm:space-x-24">
                        {/* Like Button */}
                        <div className="flex items-center cursor-pointer" onClick={toggleLike}>
                            <HeartIcon
                                className={`h-5 w-5 sm:h-6 sm:w-6 transition-colors ${isLiked ? "text-red-500" : "text-gray-500"}`}
                            />
                            <span className="ml-1 text-sm sm:text-base">{likeCount}</span>
                        </div>

                        {/* Comment Button */}
                        <div className="flex items-center cursor-pointer" onClick={toggleCommentBox}>
                            <FaRegCommentAlt className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
                            <span className="ml-1 text-sm sm:text-base">{comments.length}</span>
                        </div>

                        {/* Share Button */}
                        <FaShareAlt className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500 cursor-pointer" onClick={handleShareClick} />
                    </div>
                </div>

                {/* Comment Section */}
                {showCommentBox && (
                    <div className="mt-4">
                        <input
                            type="text"
                            className="w-full p-2 text-white bg-gray-700 border border-gray-600 rounded-md text-sm"
                            placeholder="Write a comment..."
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && submitComment()}
                        />
                    </div>
                )}

                {/* Display Comments */}
                {comments.length > 0 && (
                    <div className="mt-4">
                        {comments.map((comment, index) => (
                            <div key={index} className="flex items-center space-x-3 text-gray-300 border-b border-gray-600 py-1">
                                <img src={comment.logo} alt="Commenter Logo" className="w-6 h-6 rounded-full" />
                                <p className="text-sm">{comment.text}</p>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
