import { useState, useRef, useEffect } from "react";
import { FaRegCommentAlt, FaShareAlt } from "react-icons/fa";
import { HeartIcon } from "@heroicons/react/24/solid";
import { MdOutlineEmojiEmotions, MdOutlineTextFields } from "react-icons/md";
import { BiSolidImageAdd } from "react-icons/bi";
import { FaCamera } from "react-icons/fa6";
import { TiAttachment } from "react-icons/ti";

export default function CreatePost() {
    const [posts, setPosts] = useState([]);
    const [postText, setPostText] = useState("");
    const [postImageUrl, setPostImageUrl] = useState(null);
    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const [isCameraOpen, setIsCameraOpen] = useState(false);
    const [capturedImage, setCapturedImage] = useState(null);
    const [attachedFile, setAttachedFile] = useState(null);  // State to store the attached file
    const videoRef = useRef(null);
    const canvasRef = useRef(null);
    const fileInputRef = useRef(null);  // Reference for the file input

    const emojis = ["😊", "😂", "❤️", "😍", "😎", "😭", "😢", "😋", "😉", "😜"];

    const addPost = () => {
        if (postText.trim() !== "" || postImageUrl || attachedFile) {
            const newPost = {
                id: Date.now(),
                username: "Abu Torab",
                time: "Just now",
                message: postText,
                imageUrl: postImageUrl || capturedImage,
                attachedFile: attachedFile,  // Add the attached file here
                logoUrl: "https://avatars.githubusercontent.com/u/118876454?s=400&u=2a067f3e74d4808365f886c1c44f77887e74cd70&v=4",
                likeCount: 0,
                isLiked: false,
                comments: []
            };
            setPosts([newPost, ...posts]);
            setPostText("");
            setPostImageUrl(null);
            setCapturedImage(null);
            setAttachedFile(null);  // Clear attached file after posting
        }
    };

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPostImageUrl(URL.createObjectURL(file));
        }
    };

    const handleAttachmentUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setAttachedFile(file);  // Store the uploaded file
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

    const insertEmoji = (emoji) => {
        setPostText(postText + emoji);
        setShowEmojiPicker(false);
    };

    const openCamera = () => {
        setIsCameraOpen(true);
        navigator.mediaDevices.getUserMedia({ video: true })
            .then((stream) => {
                videoRef.current.srcObject = stream;
            })
            .catch((error) => {
                console.error("Error accessing the camera", error);
                setIsCameraOpen(false);
            });
    };

    const captureImage = () => {
        if (canvasRef.current && videoRef.current) {
            const context = canvasRef.current.getContext("2d");
            context.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height);
            const dataUrl = canvasRef.current.toDataURL("image/png");
            setCapturedImage(dataUrl);
            setIsCameraOpen(false);
        }
    };

    const closeCamera = () => {
        if (videoRef.current && videoRef.current.srcObject) {
            const stream = videoRef.current.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            videoRef.current.srcObject = null;
        }
        setIsCameraOpen(false);
    };

    return (
        <div className="flex flex-col items-center p-4 space-y-6 sm:ml-[-5px]">
            {/* Post Input Section */}
            <div className="p-4 rounded-lg w-full max-w-[750px]">
                <textarea
                    className="w-full p-2 text-white bg-zinc-800 border border-gray-600 rounded-md focus:ring mt-2 focus:ring-blue-500 text-base"
                    rows="3"
                    placeholder="Make a post..."
                    value={postText}
                    onChange={(e) => setPostText(e.target.value)}
                ></textarea>

                {/* Image Preview */}
                {postImageUrl && (
                    <div className="mt-2">
                        <img src={postImageUrl} alt="Selected" className="w-full max-h-60 object-cover rounded-md" />
                    </div>
                )}
                {capturedImage && (
                    <div className="mt-2">
                        <img src={capturedImage} alt="Captured" className="w-full max-h-60 object-cover rounded-md" />
                    </div>
                )}

                {/* Attachment and Emoji Options */}
                <div className="flex flex-row sm:space-x-[480px]">
                    <div className="flex flex-row sm:space-x-5 sm:mt-3">
                        <MdOutlineEmojiEmotions
                            className="text-gray-500 cursor-pointer"
                            size={20}
                            onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                        />
                        <label htmlFor="imageUpload">
                            <BiSolidImageAdd className="text-gray-500 cursor-pointer" size={20} />
                        </label>
                        <input
                            id="imageUpload"
                            type="file"
                            accept="image/*"
                            className="hidden"
                            onChange={handleImageUpload}
                        />
                        <FaCamera className="text-gray-500 cursor-pointer" size={18} onClick={openCamera} />

                        {/* Attachment Icon */}
                        <TiAttachment
                            className="text-gray-500 cursor-pointer"
                            size={20}
                            onClick={() => fileInputRef.current.click()} // Trigger file input click
                        />
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="*/*"
                            className="hidden"
                            onChange={handleAttachmentUpload} // Handle attachment file upload
                        />
                        <MdOutlineTextFields className="text-gray-500" size={20} />
                    </div>

                    <button
                        className="items-end mt-2 px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded-md text-sm"
                        onClick={addPost}
                    >
                        Post
                    </button>
                </div>
            </div>

            {/* Emoji Picker */}
            {showEmojiPicker && (
                <div className="absolute bg-white border border-gray-300 p-2 rounded-md mt-2">
                    <div className="grid grid-cols-4 gap-2">
                        {emojis.map((emoji, index) => (
                            <button
                                key={index}
                                className="text-xl"
                                onClick={() => insertEmoji(emoji)}
                            >
                                {emoji}
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Camera View */}
            {isCameraOpen && (
                <div className="relative w-full max-w-[750px] mt-4">
                    <video
                        ref={videoRef}
                        className="w-full rounded-md"
                        autoPlay
                        playsInline
                    />
                    <canvas
                        ref={canvasRef}
                        className="hidden"
                        width={640}
                        height={480}
                    />
                    <button
                        onClick={captureImage}
                        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded-full"
                    >
                        Capture
                    </button>
                    <button
                        onClick={closeCamera}
                        className="absolute top-4 right-4 px-4 py-2 bg-red-500 text-white rounded-full"
                    >
                        Close
                    </button>
                </div>
            )}

            {/* Display Posts */}
            {posts.map((post) => (
                <div key={post.id} className="shadow-md p-4 rounded-lg bg-zinc-800 w-full max-w-[700px]">
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
                    {/* Show attached file name if available */}
                    {post.attachedFile && (
                        <div className="mt-2 text-gray-400">
                            <a href={URL.createObjectURL(post.attachedFile)} download>
                                {post.attachedFile.name}
                            </a>
                        </div>
                    )}

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
