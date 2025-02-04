
import Navbar from "./Components/Navbar";
import Post from "./Components/Post";
import Profile from "./Components/Profile";
import Sidebar from "./Components/Sidebar";

export default function App() {
  return ( 

    <div className=" bg-[#1A1A1A] "> 
      {/*Navbar section */}
      <Navbar />
    
      <div className="flex bg-[#1A1A1A]  text-white min-h-screen">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
       

        {/* Post Section */}
        <div className="mt-6 space-y-6">
          <Post
            username="Alex Kindrik"
            time="25 min ago"
            message="The new space will soon be ready. Our developers are waiting for the azure color."
            imageUrl="https://source.unsplash.com/random/800x600?office"
          />
        </div>
      </div>

      {/* Profile Sidebar */}
   <Profile/>
    
    </div>
    </div>
  );
}
