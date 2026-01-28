// Utility functions for the StreamTrendr app

/**
 * Format rating to display with star emoji
 * @param {string|number} rating - The rating value
 * @returns {string} Formatted rating string
 */
export const formatRating = (rating) => {
    return `⭐ ${rating}`;
};

/**
 * Truncate text to a specified length
 * @param {string} text - The text to truncate
 * @param {number} maxLength - Maximum length
 * @returns {string} Truncated text
 */
export const truncateText = (text, maxLength = 50) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + "...";
};

/**
 * Generate placeholder image URL
 * @param {string} text - Text to display on placeholder
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {string} Placeholder image URL
 */
export const getPlaceholderImage = (text, width = 300, height = 450) => {
    const encodedText = encodeURIComponent(text);
    return `https://via.placeholder.com/${width}x${height}/1a1d23/ffffff?text=${encodedText}`;
};

/**
 * Get streaming service color by name
 * @param {string} serviceName - Name of the streaming service
 * @returns {string} Tailwind CSS color class
 */
export const getServiceColor = (serviceName) => {
    const colorMap = {
        "Netflix": "bg-red-600",
        "Hulu": "bg-green-600",
        "Amazon Prime": "bg-blue-600",
        "Disney+": "bg-blue-500",
        "HBO Max": "bg-purple-600",
        "Apple TV+": "bg-gray-600",
    };
    return colorMap[serviceName] || "bg-gray-500";
};

/**
 * Debounce function for search inputs
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

/**
 * Check if device is mobile
 * @returns {boolean} True if mobile device
 */
export const isMobile = () => {
    return window.innerWidth <= 768;
};

/**
 * Generate random ID
 * @param {number} length - Length of the ID
 * @returns {string} Random ID string
 */
export const generateId = (length = 8) => {
    return Math.random().toString(36).substring(2, length + 2);
};