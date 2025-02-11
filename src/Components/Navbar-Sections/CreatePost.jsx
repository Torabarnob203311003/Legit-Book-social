import { useState } from "react";
import { FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import { HeartIcon } from "@heroicons/react/24/solid";
import { MdOutlineEmojiEmotions } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";
import { FaCamera } from "react-icons/fa6";
import { TiAttachment } from "react-icons/ti";
import { MdOutlineTextFields } from "react-icons/md";

export default function CreatePost() {
    const [posts, setPosts] = useState([]);
    const [postText, setPostText] = useState("");
    const [postImageUrl, setPostImageUrl] = useState("");

    const addPost = () => {
        if (postText.trim() !== "") {
            const newPost = {
                id: Date.now(),
                username: "John Doe",  // Replace with dynamic username
                time: "Just now",
                message: postText,
                imageUrl: postImageUrl,
                logoUrl: "https://png.pngtree.com/png-clipart/20231015/original/pngtree-man-avatar-clipart-illustration-png-image_13302499.png",
                likeCount: 0,
                isLiked: false,
                comments: []
            };
            setPosts([newPost, ...posts]);
            setPostText("");
            setPostImageUrl("");
        }
    };

    const toggleLike = (postId) => {
        setPosts(posts.map(post =>
            post.id === postId ? { ...post, isLiked: !post.isLiked, likeCount: post.isLiked ? post.likeCount - 1 : post.likeCount + 1 } : post
        ));
    };

    const addComment = (postId, commentText) => {
        if (commentText.trim() !== "") {
            setPosts(posts.map(post =>
                post.id === postId ? { ...post, comments: [...post.comments, { text: commentText, logo: post.logoUrl }] } : post
            ));
        }
    };

    return (
        <div className="flex flex-col items-center p-4 space-y-6  sm:ml-[-25px]">
            {/* Post Input Section */}
            <div className=" p-4   rounded-lg w-full max-w-[750px]">
                <textarea
                    className="w-full p-2 text-white bg-zinc-800 border border-gray-600 rounded-md focus:ring mt-2 focus:ring-blue-500 text-base"
                    rows="3"
                    placeholder="Make a post..."
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                ></textarea>
                
              <div className="flex  flex-row sm:space-x-[480px]">
                
                   <div className="flex flex-row sm:space-x-5 sm:mt-3">

                        <MdOutlineEmojiEmotions className="text-gray-500" size={20} />
                        <BiSolidImageAdd className="text-gray-500" size={20} />
                        <FaCamera className="text-gray-500" size={18} />
                        <TiAttachment className="text-gray-500"  size={20} />
                        <MdOutlineTextFields className="text-gray-500" size={20} />
                   </div>
                    <button
                        className=" items-end mt-2 px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm"
                        onClick={addPost}
                    >
                        Post
                    </button>
              </div>
            </div>

            {/* Display Posts */}
            {posts.map((post) => (
                <div key={post.id} className="   shadow-md p-4 rounded-lg bg-zinc-800 w-full max-w-[700px]">
                    {/* User Info */}
                    <div className="flex items-center space-x-3">
                        <img src={post.logoUrl} alt="User Logo" className="w-8 h-8 rounded-full" />
                        <div>
                            <h3 className="font-bold text-white">{post.username}</h3>
                            <p className="text-gray-400 text-sm">{post.time}</p>
                        </div>
                    </div>

                    {/* Post Content */}
                    <p className="mt-4 text-gray-300">{post.message}</p>
                    {post.imageUrl && <img src={post.imageUrl} alt="Post" className="mt-4 rounded-lg w-full object-cover" />}

                    {/* Actions */}
                    <div className="mt-4 flex items-center justify-between text-gray-400 text-sm">
                        {/* Like */}
                        <div className="flex items-center cursor-pointer" onClick={() => toggleLike(post.id)}>
                            <HeartIcon className={`h-5 w-5 transition-colors ${post.isLiked ? "text-red-500" : "text-gray-500"}`} />
                            <span className="ml-1">{post.likeCount}</span>
                        </div>

                        {/* Comment */}
                        <div className="flex items-center cursor-pointer">
                            <FaRegCommentAlt className="h-5 w-5 text-gray-500" />
                            <span className="ml-1">{post.comments.length}</span>
                        </div>

                        {/* Share */}
                        <FaShareAlt className="h-5 w-5 text-gray-500 cursor-pointer" onClick={() => alert("Post shared!")} />
                    </div>

                    {/* Comment Box */}
                    <div className="mt-4">
                        <input
                            type="text"
                            className="w-full p-2 text-white bg-gray-700 border border-gray-600 rounded-md text-sm"
                            placeholder="Write a comment..."
                            onKeyDown={(e) => e.key === "Enter" && addComment(post.id, e.target.value)}
                        />
                    </div>

                    {/* Display Comments */}
                    {post.comments.length > 0 && (
                        <div className="mt-4">
                            {post.comments.map((comment, index) => (
                                <div key={index} className="flex items-center space-x-3 text-gray-300 border-b border-gray-600 py-1">
                                    <img src={comment.logo} alt="Commenter Logo" className="w-6 h-6 rounded-full" />
                                    <p className="text-sm">{comment.text}</p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
}
