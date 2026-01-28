import { FOOTER_LINKS, SOCIAL_LINKS } from "../../utils";

export const Footer = () => {
    return (
        <footer className="bg-[#1a1d23] border-t border-gray-800 py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    <div>
                        <h3 className="text-cyan-400 text-xl font-bold mb-4">StreamTrendr</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Your ultimate destination for discovering and streaming the latest movies and TV shows from all major platforms.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Browse</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            {FOOTER_LINKS.browse.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="hover:text-cyan-400 transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Platforms</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            {FOOTER_LINKS.platforms.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="hover:text-cyan-400 transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-semibold mb-4">Support</h4>
                        <ul className="space-y-2 text-gray-400 text-sm">
                            {FOOTER_LINKS.support.map((link, index) => (
                                <li key={index}>
                                    <a href={link.href} className="hover:text-cyan-400 transition-colors">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-400 text-sm">
                        © 2026 StreamTrendr. All rights reserved.
                    </p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        {SOCIAL_LINKS.map((social, index) => (
                            <a
                                key={index}
                                href={social.href}
                                className="text-gray-400 hover:text-cyan-400 transition-colors"
                            >
                                <span className="sr-only">{social.name}</span>
                                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                                    {/* Social media icons would go here - simplified for now */}
                                    <circle cx="12" cy="12" r="10" />
                                </svg>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};