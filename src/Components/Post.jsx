export default function Post({ username, time, message, imageUrl }) {
    return (
        <div className="p-6 rounded-lg w-full sm:w-auto">
            {/* User Info */}
            <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
                <div>
                    <h3 className="font-bold text-lg sm:text-xl">{username}</h3>
                    <p className="text-gray-400 text-sm">{time}</p>
                </div>
            </div>

            {/* Post Content */}
            <p className="mt-4 text-gray-300 text-sm sm:text-base">{message}</p>

            {/* Image */}
            {imageUrl && <img src={imageUrl} alt="Post" className="mt-4 rounded-lg w-full sm:w-auto" />}

            {/* Actions */}
            <div className="mt-4 flex justify-between text-gray-400 text-sm sm:text-base">
                <span>❤️ 25</span>
                <span>💬 3</span>
                <span>🔄 Share</span>
            </div>
        </div>
    );
}
