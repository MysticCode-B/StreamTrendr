
export const Hero = () => {
    return (
        <div className="relative flex justify-center items-center min-h-[60vh] mt-10 px-4">
            <div className="relative w-full max-w-6xl h-[500px] rounded-2xl border-4 border-[#6b8f9b] p-8 md:p-12 text-white overflow-hidden">
                {/* Background gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-black/80 rounded-2xl"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col justify-center h-full">
                    <div className="max-w-2xl">
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
                            Discover the Latest
                            <span className="block text-cyan-400">Trending</span>
                            TV Shows & Movies
                        </h1>

                        <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                            Stream the hottest content from your favorite platforms.
                            Get personalized recommendations and never miss a trending show.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <button className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-8 py-3 rounded-lg transition-colors duration-200">
                                Explore Now
                            </button>
                            <button className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black font-semibold px-8 py-3 rounded-lg transition-all duration-200">
                                Watch Trailer
                            </button>
                        </div>
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-20 h-20 bg-cyan-400/20 rounded-full blur-xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-cyan-400/30 rounded-full blur-lg"></div>
            </div>
        </div>
    );
}