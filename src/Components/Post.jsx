import { FaRegCommentAlt } from "react-icons/fa";
import { FaShare } from "react-icons/fa";
export default function Post({ username, time, message, imageUrl }) {
    return (

        
       <div>

            <div className="p-6 ml-0 sm:ml-[250px] rounded-lg w-full bg-zinc-800 sm:w-auto">

                


                {/* User Info */}
                <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                    <div className="flex  gap-2 items-center">
                        <h3 className="font-bold text-xl sm:text-2xl">{username}</h3>
                        <p className="text-gray-400 mt-2 text-lg">{time}</p>
                    </div>
                </div>

                {/* Post Content */}
                <p className="mt-4 text-gray-300 text-sm sm:text-base">{message}</p>

                {/* Image */}
                {imageUrl && <img src={imageUrl} alt="Post" className="mt-4 rounded-lg w-full sm:w-[850px] sm:h-[380px]" />}

                {/* Actions */}
                <div className="mt-4 flex justify-items-center gap-4 text-gray-400 text-sm sm:text-base">
                    <span>❤️ 25</span>

                    <span><FaRegCommentAlt /> </span>
                    <span><FaShare /> </span>
                </div>
            </div>
       </div>
    );
}
