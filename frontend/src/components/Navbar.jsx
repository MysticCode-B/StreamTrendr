
export const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-6 py-4 bg-[#2f353b] text-white">
            <div className="flex items-center gap-6">
                <h1 className="text-xl font-bold text-cyan-400">StreamTrendr</h1>

                <span className="text-sm text-white cursor-pointer">Home</span>
            </div>

            <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 rounded-full bg-[#425986] text-white text-sm focus:outline-none placeholder-gray-400"
            />

            <div className="flex items-center gap-6 text-sm">
                <span className="cursor-pointer">Movies</span>
                <span className="cursor-pointer">TV Shows</span>
                <span className="cursor-pointer">Explore What's New</span>
                <span className="text-cyan-400 cursor-pointer">Login</span>
                <span className="text-cyan-400 cursor-pointer">Sign Up</span>
            </div>
        </nav>
    );
}