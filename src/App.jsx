import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";
import { demoPosts } from "./Components/Data/configure";

// Import missing components
import News from './Components/Navbar-Sections/News';
import JobSearch from './Components/Navbar-Sections/Job-Search';
import Educations from './Components/Navbar-Sections/Education';
import Creators from './Components/Navbar-Sections/Creators';


export default function App() {
  return (
    <div className="bg-[#1A1A1A] overflow-hidden">
      <Router>
        <Navbar />
        {/* Routes for different sections */}
        <Routes>
          <Route path="/news" element={<News />} />
          <Route path="/job-search" element={<JobSearch/>} />
          <Route path="/education" element={<Educations/>} />
          <Route path="/creators" element={<Creators/>} />
        </Routes>

        <div className="flex bg-[#1A1A1A] text-white min-h-screen">
          <Sidebar />
          <div className="flex-1 p-6 h-screen overflow-auto">
            <div className="flex-1 p-6">
              {/* Post Section */}
              <div className="mt-6 space-y-6">
                {demoPosts.map((post, index) => (
                  <Post key={index} {...post} />
                ))}
              </div>
            </div>
          </div>

          {/* Profile Sidebar */}
          <Profile
            name="Abu Torab"
            bio="Software Engineer (Intern)"
            jobs={[
              "Nike (2015-Present)",
              "McDonald's (2013-2016)",
              "Google (2016-Present)",
              "Apple (2014-2016)"
            ]}
            education={[
              "Bachelors CS - 3.5 GPA",
              "Master IT - 3.5 GPA"
            ]}
          />
        </div>
      </Router>
    </div>
  );
}
