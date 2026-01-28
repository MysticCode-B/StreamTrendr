import { STREAMING_PROVIDERS } from "../../utils";

export const ProviderBar = () => {
    return (
        <div className="w-full bg-[#1a1d23] py-4 border-b border-gray-800">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                    {STREAMING_PROVIDERS.map((provider, index) => (
                        <div
                            key={index}
                            className={`px-4 py-2 rounded-lg text-white text-sm font-medium cursor-pointer transition-all duration-200 transform hover:scale-105 ${provider.bgColor} ${provider.color} shadow-lg`}
                        >
                            {provider.name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
