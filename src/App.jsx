
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
            username="Sheikh Mojibar Rahman"
            time="25 min ago"
              message=" Happy Anniversary To Sheikh Hasina and Modi ji 💗 💗 💗 💗 ."
              imageUrl="https://www.bizzbuzz.news/h-upload/2024/01/09/1845479-hasina.jpg"
          />
        </div>
      </div>

      {/* Profile Sidebar */}
   <Profile/>
    
    </div>
    </div>
  );
}
