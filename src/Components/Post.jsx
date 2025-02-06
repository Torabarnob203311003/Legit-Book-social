import { FaRegCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
import { HeartIcon, BookmarkIcon } from '@heroicons/react/24/solid';
import { FaShareAlt } from "react-icons/fa";

export default function Post({ username, time, message, imageUrl }) {

    const LikeIcon = ({ count }) => (
        <div className="flex items-center ">
            <HeartIcon className="h-5 w-5 text-gray-500 mr-1" />
            <span>{count}</span>
        </div>
    );

    const CommentIcon = ({ count }) => (
        <div className="flex items-center">
            <FaRegCommentAlt className="h-5 w-5 text-gray-500 mr-1" />
            <span>{count}</span>
        </div>
    );

    const ShareIcon = () => (
        <FaShare className="h-5 w-5 text-gray-500" />
    );

    const SaveIcon = () => (
        <BookmarkIcon className="h-5 w-5 text-gray-500" />
    );


    return (
        <div className=" mr-32">
            <div className="p-6 ml-0 sm:ml-[150px] rounded-lg w-full bg-zinc-800 sm:w-auto">

                {/* User Info */}
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                    <div className="flex gap-2 items-center">
                        <h3 className="font-bold text-xl sm:text-2xl">{username}</h3>
                        <p className="text-gray-400 mt-2 text-lg">{time}</p>
                    </div>
                </div>

                {/* Post Content */}
                <p className="mt-4 text-gray-300 text-xl sm:text-xl">{message}</p>

                {/* Image */}
                {imageUrl && <img src={imageUrl} alt="Post" className="mt-4 rounded-lg w-full sm:w-[650px] sm:h-[380px]" />}

                {/* Actions */}
                <div className="mt-6 flex items-center justify-between text-gray-400 text-sm sm:text-base"> {/* Flexbox for alignment */}
                    <div className="flex space-x-72"> {/* Group like/comment/share */}
                        <LikeIcon count={25} />
                        <CommentIcon count={3} /> {/* Added Comment Icon with count */}
                        <FaShareAlt />
                    </div>
                
                </div>

            </div>
        </div>
    );
}