export default function Sidebar() {
    return (
        <aside className="w-1/4 bg-gray-800 p-6 rounded-lg">
            <h2 className="text-lg font-semibold text-gray-300">Filters</h2>
            <ul className="mt-4 space-y-2">
                <li className="cursor-pointer hover:text-blue-400">📍 Locations</li>
                <li className="cursor-pointer hover:text-blue-400">👥 People</li>
                <li className="cursor-pointer hover:text-blue-400">🎓 Education</li>
                <li className="cursor-pointer hover:text-blue-400">💼 Work</li>
                <li className="cursor-pointer hover:text-blue-400">🗂 Interests</li>
                <li className="cursor-pointer hover:text-blue-400">🏢 Companies</li>
            </ul>
        </aside>
    );
}
