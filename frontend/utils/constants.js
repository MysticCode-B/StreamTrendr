// Streaming service providers data
export const STREAMING_PROVIDERS = [
    { name: "Netflix", color: "hover:bg-red-600", bgColor: "bg-red-600" },
    { name: "Hulu", color: "hover:bg-green-600", bgColor: "bg-green-600" },
    { name: "Amazon Prime", color: "hover:bg-blue-600", bgColor: "bg-blue-600" },
    { name: "Disney+", color: "hover:bg-blue-500", bgColor: "bg-blue-500" },
    { name: "HBO Max", color: "hover:bg-purple-600", bgColor: "bg-purple-600" },
    { name: "Apple TV+", color: "hover:bg-gray-600", bgColor: "bg-gray-600" },
];

// Navigation menu items
export const NAVIGATION_ITEMS = [
    { label: "Home", href: "/" },
    { label: "Movies", href: "/movies" },
    { label: "TV Shows", href: "/tv-shows" },
    { label: "Explore What's New", href: "/explore" },
];

// Footer links
export const FOOTER_LINKS = {
    browse: [
        { label: "Movies", href: "/movies" },
        { label: "TV Shows", href: "/tv-shows" },
        { label: "Trending", href: "/trending" },
        { label: "New Releases", href: "/new-releases" },
    ],
    platforms: [
        { label: "Netflix", href: "/netflix" },
        { label: "Hulu", href: "/hulu" },
        { label: "Amazon Prime", href: "/amazon-prime" },
        { label: "Disney+", href: "/disney-plus" },
    ],
    support: [
        { label: "Help Center", href: "/help" },
        { label: "Contact Us", href: "/contact" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
    ],
};

// Social media links
export const SOCIAL_LINKS = [
    {
        name: "Facebook",
        href: "https://facebook.com/streamtrendr",
        icon: "facebook",
    },
    {
        name: "Twitter",
        href: "https://twitter.com/streamtrendr",
        icon: "twitter",
    },
    {
        name: "Instagram",
        href: "https://instagram.com/streamtrendr",
        icon: "instagram",
    },
];