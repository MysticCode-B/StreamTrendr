import { TRENDING_ITEMS, formatRating } from "../../utils";

export const TrendingSection = () => {
    const trendingItems = TRENDING_ITEMS;

    return (
        <section className="py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-3xl font-bold text-white mb-8">Trending Now</h2>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {trendingItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#1a1d23] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer group"
                        >
                            <div className="relative">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm font-medium">
                                    {formatRating(item.rating)}
                                </div>
                            </div>

                            <div className="p-4">
                                <h3 className="text-white font-semibold text-lg mb-1 line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-400 text-sm">{item.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
