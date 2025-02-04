export default function Profile() {
    return (
        <div className="w-full sm:w-1/3 md:w-1/4 p-6 rounded-lg mx-auto">
            {/* Profile Picture */}
            <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto"></div>

            {/* Bio Section */}
            <h3 className="text-lg sm:text-xl font-bold text-center mt-4">Alex Kindrik</h3>
            <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Jobs */}
            <h4 className="mt-6 text-sm font-semibold text-gray-300">Jobs</h4>
            <ul className="mt-2 space-y-1">
                <li className="text-gray-400 text-sm sm:text-base">Nike (2015-Present)</li>
                <li className="text-gray-400 text-sm sm:text-base">McDonald's (2013-2016)</li>
                <li className="text-gray-400 text-sm sm:text-base">Google (2016-Present)</li>
                <li className="text-gray-400 text-sm sm:text-base">Apple (2014-2016)</li>
            </ul>

            {/* Education */}
            <h4 className="mt-6 text-sm font-semibold text-gray-300">Education</h4>
            <ul className="mt-2 space-y-1">
                <li className="text-gray-400 text-sm sm:text-base">Bachelors CS - 3.5 GPA</li>
                <li className="text-gray-400 text-sm sm:text-base">Master IT - 3.5 GPA</li>
            </ul>

            {/* Resume Button */}
            <button className="mt-6 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition text-sm sm:text-base">
                Resume Builder
            </button>
        </div>
    );
}
