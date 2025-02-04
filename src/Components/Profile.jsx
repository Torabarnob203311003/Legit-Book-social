export default function Profile({ name, bio, jobs, education }) {
    return (
        <div className="w-full sm:w-1/3 md:w-1/4 p-6 rounded-lg mx-auto">
            {/* Profile Picture */}
            <div className="w-16 h-16 bg-gray-700 rounded-full mx-auto"></div>

            {/* Bio Section */}
            <h3 className="text-lg sm:text-xl font-bold text-center mt-4">{name}</h3>
            <p className="text-gray-400 text-center mt-2 text-sm sm:text-base">{bio}</p>

            {/* Jobs */}
            <h4 className="mt-6 text-sm font-semibold text-gray-300">Jobs</h4>
            <ul className="mt-2 space-y-1">
                {jobs.map((job, index) => (
                    <li key={index} className="text-gray-400 text-sm sm:text-base">{job}</li>
                ))}
            </ul>

            {/* Education */}
            <h4 className="mt-6 text-sm font-semibold text-gray-300">Education</h4>
            <ul className="mt-2 space-y-1">
                {education.map((edu, index) => (
                    <li key={index} className="text-gray-400 text-sm sm:text-base">{edu}</li>
                ))}
            </ul>

            {/* Resume Button */}
            <button className="mt-6 w-full bg-blue-500 py-2 rounded-lg hover:bg-blue-600 transition text-sm sm:text-base">
                Resume Builder
            </button>
        </div>
    );
}
 