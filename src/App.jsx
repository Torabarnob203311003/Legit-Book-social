import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
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

export default function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        {/* If user is not authenticated, show SignInSignUp page */}
        {!isAuthenticated ? (
          <Route path="/*" element={<SignInSignUp setAuth={setIsAuthenticated} />} />
        ) : (
          <>
            {/* Main App Structure after login */}
            <Route
              path="/*"
              element={
                <div className="bg-[#1A1A1A] overflow-hidden">
                  <Navbar setAuth={setIsAuthenticated} />
                  <div className="flex bg-[#1A1A1A] text-white min-h-screen w-full">
                    <Sidebar />
                    <div className="flex-1 p-6 h-screen overflow-auto">
                      <Routes>
                        <Route path="/news" element={<News />} />
                        <Route path="/job-search" element={<JobSearch />} />
                        <Route path="/education" element={<Educations />} />
                        <Route path="/creators" element={<Creators />} />
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
                        {/* Redirect unknown routes to home */}
                        <Route path="*" element={<Navigate to="/" />} />
                      </Routes>
                    </div>
                    <Profile />
                  </div>
                </div>
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );
}
