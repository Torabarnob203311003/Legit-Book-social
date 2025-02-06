import { FaCheckCircle } from "react-icons/fa";

export default function Profile() {
    return (
        <div className="max-w-xs mx-auto pl-3 p-3 space-y-6">
            {/* Bio Section */}
            <h2 className="text-gray-500 text-lg font-semibold">Bio</h2>
            <p className="text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa libero distinctio vel earum at consequatur?.
            </p>

            {/* Job Section */}
            <h2 className="text-gray-500 text-lg font-semibold">Jobs</h2>
            <div className="space-y-4 ">
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
                    <div key={index} className="flex items-center space-x-4">
                        <img src={job.logo} alt={job.name} className="w-7 h-7 rounded-3xl object-contain" />
                        <div className="pr-14">
                            <p className="text-white font-semibold">{job.name}</p>
                            <p className="text-gray-500">{job.year}</p>
                        </div>
                        <FaCheckCircle className="text-green-500" />
                    </div>
                ))}
            </div>

            {/* Education Section */}
            <h2 className="text-gray-500 text-lg font-semibold">Education</h2>
            <div className="space-y-2 flex items-center space-x-[50px]">
                <p className="text-white font-medium">
                    Bachelor's CS <span className="text-gray-600 ml-28">3.8 CGPA</span>
                </p>
            </div>
            <div className="space-y-2 flex items-center space-x-[50px]">
                <p className="text-white font-medium">
                    Master IT <span className="text-gray-600 ml-[145px]">3.5 CGPA</span>
                </p>
            </div>

            {/* Resume Builder Button */}
            <button className="w-full text-blue-500 border border-blue-500 rounded-lg bg-black bg-opacity-20 px-4 py-2 hover:bg-opacity-30">
                Resume Builder
            </button>

            {/* Contact Section */}
            <h2 className="text-gray-500 text-lg font-semibold">Contact</h2>
            <div>
                {[
                    { name: "John Doe", active: true },
                    { name: "Jane Smith", active: false },
                    { name: "Michael Lee", active: true }
                ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <p className=" text-gray-500">{contact.name}</p>
                        {contact.active && (
                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        )}
                    </div>
                ))}
            </div>

            {/* Search Box */}
            <input
                placeholder="Search&Chat 🔎"
                className="w-full border p-2 rounded-md bg-gray-800 text-white placeholder-gray-400"
            />
        </div>
    );
}
