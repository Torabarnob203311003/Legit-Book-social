import React from 'react';

const jobListings = [
    {
        id: 1,
        title: "Frontend Developer",
        company: "Google",
        location: "San Francisco, CA",
        jobType: "Full-Time",
        logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        description: "Google is looking for a skilled frontend developer with experience in React.js and modern UI frameworks.",
        applyLink: "#"
    },
    {
        id: 2,
        title: "Data Scientist",
        company: "Microsoft",
        location: "New York, NY",
        jobType: "Remote",
        logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        description: "Join Microsoft's AI research team to work on cutting-edge machine learning and data science projects.",
        applyLink: "#"
    },
    {
        id: 3,
        title: "Backend Engineer",
        company: "Amazon",
        location: "Seattle, WA",
        jobType: "Full-Time",
        logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        description: "Amazon Web Services (AWS) is hiring backend engineers with expertise in Node.js, Python, and cloud computing.",
        applyLink: "#"
    },
    {
        id: 4,
        title: "UI/UX Designer",
        company: "Meta",
        location: "Menlo Park, CA",
        jobType: "Hybrid",
        logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Meta_Logo.png",
        description: "Meta is searching for a creative UI/UX designer to craft engaging user experiences across platforms.",
        applyLink: "#"
    },
    {
        id: 5,
        title: "Cybersecurity Analyst",
        company: "IBM",
        location: "Austin, TX",
        jobType: "Full-Time",
        logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        description: "IBM Security is seeking cybersecurity experts to analyze threats and improve network security protocols.",
        applyLink: "#"
    }
];

function JobSearch() {
    return (
        <div className="p-6 space-y-6">
            <h2 className="text-2xl font-semibold text-white">Job Openings</h2>
            {jobListings.map((job) => (
                <div key={job.id} className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center gap-4">
                    <img src={job.logo} alt={job.company} className="w-14 h-14 rounded-lg object-contain bg-white p-1" />
                    <div className="flex-1">
                        <h3 className="text-xl font-medium text-white">{job.title}</h3>
                        <p className="text-gray-400">{job.company} - {job.location}</p>
                        <span className="text-blue-500 font-semibold">{job.jobType}</span>
                        <p className="text-gray-300 mt-2">{job.description}</p>
                    </div>
                    <a href={job.applyLink} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium">
                        Apply Now
                    </a>
                </div>
            ))}
        </div>
    );
}

export default JobSearch;
