import { FaCheckCircle } from "react-icons/fa";


export default function Profile() {
    return (
        <div className="max-w-2xl mx-auto p-6 space-y-6">
            {/* Bio Section */}
            <h2 className="text-gray-500 text-lg font-semibold">Bio</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>

            {/* Job Section */}
            <h2 className="text-gray-500 text-lg font-semibold">Job</h2>
            <div className="space-y-4">
                {[
                    { logo: "nike", name: "Nike", year: "2016 - Present" },
                    { logo: "mcdonalds", name: "McDonald's", year: "2017 - Present" },
                    { logo: "google", name: "Google", year: "2018 - Present" },
                    { logo: "apple", name: "Apple", year: "2019 - Present" }
                ].map((job, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <img src={`/${job.logo}.png`} alt={job.name} className="w-10 h-10" />
                        <div>
                            <p className="text-gray-700 font-semibold">{job.name}</p>
                            <p className="text-gray-500">{job.year}</p>
                        </div>
                        <FaCheckCircle className="text-green-500" />
                    </div>
                ))}
            </div>

            {/* Education Section */}
            <h2 className="text-gray-500 text-lg font-semibold">Education</h2>
            <div className="space-y-2">
                <p className="text-gray-700 font-semibold">Bachelor's Degree in Computer Science</p>
                <p className="text-gray-500">CGPA: 3.8/4.0</p>
            </div>

            {/* Resume Builder Button */}
            <button className="w-full bg-blue-500 text-white p-2 rounded-md">Resume Builder</button>

            {/* Contact Section */}
            <h2 className="text-gray-500 text-lg font-semibold">Contact</h2>
            <div className="space-y-2">
                {[
                    { name: "John Doe", active: true },
                    { name: "Jane Smith", active: false },
                    { name: "Michael Lee", active: true }
                ].map((contact, index) => (
                    <div key={index} className="flex items-center space-x-4">
                        <p className="text-gray-700">{contact.name}</p>
                        {contact.active && <FaCheckCircle className="text-green-500" />}
                    </div>
                ))}
            </div>

            {/* Search Box */}
            <input className="border p-2 rounded-md w-full" placeholder="Search..." />
        </div>
    );
}




