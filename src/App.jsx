import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";
import { demoPosts } from "./Components/Data/configure";
import News from "./Components/Navbar-Sections/News";
import JobSearch from "./Components/Navbar-Sections/Job-Search";
import Educations from "./Components/Navbar-Sections/Education";
import Creators from "./Components/Navbar-Sections/Creators";
import CreatePost from "./Components/Navbar-Sections/CreatePost";
import SignInSignUp from "./Components/From/SignInSignUp";
 // Import the new form

export default function App() {
  return (
    <div className="bg-[#1A1A1A]  overflow-hidden">
      <Router>
        {/* Navbar Section */}
        <Navbar />

        <div className="flex bg-[#1A1A1A] text-white min-h-screen w-full">
          {/* Sidebar Section */}
          <Sidebar />

          {/* Content Section */}
          <div className="flex-1 p-6 h-screen overflow-auto">
            <div className="flex-1 p-6">
              {/* Routes for different sections */}

       
              <Routes>
               
                <Route path="/news" element={<News />} />
                <Route path="/job-search" element={<JobSearch />} />
                <Route path="/education" element={<Educations />} />
                <Route path="/creators" element={<Creators />} />

                {/* Sign In / Sign Up Route */}
                
                {/* Default (Post) Route */}
                <Route
                  path="/"
                  element={
                    <div className="mt-6 space-y-6">
                      <CreatePost />
                      {demoPosts.map((post, index) => (
                        <Post key={index} {...post} />
                      ))}
                    </div>
                  }
                />
             

              </Routes>
            </div>
          </div>

          {/* Profile Sidebar */}
          <Profile />
        </div>
      </Router>
    </div>
  );
}
