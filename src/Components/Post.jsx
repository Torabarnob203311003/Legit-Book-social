import { useState } from "react";
import { FaRegCommentAlt, FaShareAlt, FaBookmark } from "react-icons/fa";
import { HeartIcon } from "@heroicons/react/24/solid";

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
            setComments([...comments, commentText]);
            setCommentText("");
        }
    };

    return (
        <div className="mr-32">
            <div className="shadow-[0_0_1.5px_rgba(255,255,255,0.8)] p-6 ml-0 sm:ml-[150px] rounded-lg w-[712px] h-auto bg-zinc-800 sm:w-auto">

                {/* User Info */}
                <div className="flex items-center space-x-4">
                    {/* Logo Image */}
                    <img src="https://s3-alpha-sig.figma.com/img/8a57/03ab/40c7de9070ca322539f727640f649f1a?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qlexTvTHYu63Hp~Gz4OYC0mgQU1XK5vm2-XlKBqqLtQ5I9CR8B~8xKr2pDeld4UHJRDi~vK21PtlrsxiFuTGA9a~ZiA1ek2C9prjcprnrksOkX~o5nQqeucuBm9HzizOL0-vIE4hk3FPGwWmhwuerRxzoDce9O0fjhjqL6vKZLkVhcuQqBe0qklBpyMzy1Xrtlk6JVBoXKoInnIHdPB5bmH71u7TbhSyV1gPFF74JdZfugaEE8L0NMWuPOpTVt7r7hKoB7Kxr~SL9MDrDbzLG5gwRUd3wj9RduIPfHRiOvXCXE4hW9zokCqt2yOdA1W2kZ54ESpar8SRRl74JqgACA__" alt="Logo" className="w-10 h-10 rounded-full" />
                    <div className="flex gap-2 items-center">
                        <h3 className="font-bold text-xl sm:text-2xl">{username}</h3>
                        <p className="text-gray-400 mt-2 text-lg">{time}</p>
                    </div>
                </div>
                <div className="border-b-2 border-zinc-600 my-3 w-full"></div>

                {/* Post Content */}
                <p className="mt-4 text-gray-300 text-xl sm:text-xl">{message}</p>

                {/* Image */}
                {imageUrl && <img src={imageUrl} alt="Post" className="mt-4 rounded-lg sm:w-[950px] sm:h-[380px]" />}

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
                        <FaShareAlt className="h-6 w-6 text-gray-500 cursor-pointer" />

                        {/* Save Button */}
                        <FaBookmark className="h-6 w-6 text-gray-500 cursor-pointer" />
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
                            <p key={index} className="text-gray-300 border-b border-gray-600 py-1">{comment}</p>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
