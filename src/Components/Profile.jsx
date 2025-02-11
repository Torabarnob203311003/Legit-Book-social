import { FaCheckCircle } from "react-icons/fa";

export default function Profile() {
    return (
        <div className="max-w-[180px] sm:max-w-[200px] md:max-w-[220px] lg:max-w-[240px] p-2 space-y-4">
            {/* Bio Section */}
            <h2 className="text-gray-500 text-xs sm:text-sm md:text-base font-semibold">Bio</h2>
            <p className="text-white text-xs sm:text-xs md:text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero distinctio vel earum at consequatur?.
            </p>

            {/* Job Section */}
            <h2 className="text-gray-500 text-xs sm:text-sm md:text-base font-semibold">Jobs</h2>
            <div className="space-y-3">
                {[
                    {
                        logo: "https://www.pixelstalk.net/wp-content/uploads/2015/12/nike-logo-wallpapers-white-black.jpg",
                        name: "Nike",
                        year: "2016 - Present"
                    },
                    {
                        logo: "https://th.bing.com/th/id/OIP.5yUuxxWNN3P7cyuF4tfPtQAAAA?rs=1&pid=ImgDetMain",
                        name: "Reea Digital",
                        year: "2017 - Present"
                    },
                    {
                        logo: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_92x30dp.png",
                        name: "Google",
                        year: "2018 - Present"
                    },
                    {
                        logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
                        name: "Apple",
                        year: "2019 - Present"
                    }
                ].map((job, index) => (
                    <div key={index} className="flex items-center space-x-2">
                        <img src={job.logo} alt={job.name} className="w-6 h-6 rounded-3xl object-contain" />
                        <div className="pr-4 sm:pr-6 md:pr-8">
                            <p className="text-white text-xs sm:text-sm md:text-base font-semibold">{job.name}</p>
                            <p className="text-gray-500 text-xs sm:text-sm md:text-base">{job.year}</p>
                        </div>
                        <FaCheckCircle className="text-green-500 text-xs sm:text-sm md:text-base" />
                    </div>
                ))}
            </div>

            {/* Education Section */}
            <h2 className="text-gray-500 text-xs sm:text-sm md:text-base font-semibold">Education</h2>
            <div className="space-y-3">
                <div className="flex justify-between items-center">
                    <p className="text-white text-xs sm:text-sm md:text-base font-medium">
                        Bachelor's CS
                    </p>
                    <span className="text-gray-600 ml-2 text-xs sm:text-sm md:text-base">3.8 CGPA</span>
                </div>

                <div className="flex justify-between items-center">
                    <p className="text-white text-xs sm:text-sm md:text-base font-medium">
                        Master IT
                    </p>
                    <span className="text-gray-600 ml-2 text-xs sm:text-sm md:text-base">3.5 CGPA</span>
                </div>
            </div>

            {/* Resume Builder Button */}
            <button className="w-full text-blue-500 border border-blue-500 rounded-lg bg-black bg-opacity-20 px-3 py-1 hover:bg-opacity-30 text-xs sm:text-xs md:text-sm">
                Resume Builder
            </button>

            {/* Contact Section */}
            <h2 className="text-gray-500 text-xs sm:text-sm md:text-base font-semibold">Contact</h2>
            <div>
                {[
                    { name: "John Doe", active: true },
                    { name: "Jane Smith", active: false },
                    { name: "Michael Lee", active: true }
                ].map((contact, index) => (
                    <div key={index} className="flex  flex-row items-center space-x-2">
                        <p className="text-white text-xs sm:text-sm md:text-base">{contact.name}</p>
                        {contact.active && (
                            <span className=" w-2 h-2 bg-green-500 rounded-full"></span>
                        )}
                    </div>
                ))}
            </div>

            {/* Search Box */}
            <input
                placeholder="Search&Chat 🔎"
                className="w-full border p-1 rounded-md bg-gray-800 text-white placeholder-gray-400 text-xs sm:text-xs md:text-sm"
            />
        </div>
    );
}
