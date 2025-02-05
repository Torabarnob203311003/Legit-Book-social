
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";
import { demoPosts } from "./Components/Data/configure";

export default function App() {
  return ( 

    <div className=" bg-[#1A1A1A]  overflow-hidden"> 
      {/*Navbar section */}
      <Navbar />
    
      <div className="flex bg-[#1A1A1A]  text-white min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
        <div className=  "flex-1 p-6 h-screen overflow-auto">

          <div className="flex-1 p-6">


            {/* Post Section */}
            <div className="mt-6  space-y-6">
              {demoPosts.map((post, index) => (
                <Post  key={index} {...post} /> // Spread props dynamically
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
    </div>
  );
}


