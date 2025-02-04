import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Post from "./Components/Post";

export default function App() {
  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Navbar */}
        <nav className="bg-gray-800 p-4 rounded-lg flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-400">Legitbook</h1>
          <input
            type="text"
            placeholder="Search..."
            className="px-3 py-2 rounded-lg bg-gray-700 border-none text-white outline-none"
          />
        </nav>

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
      <Profile />
    </div>
  );
}
