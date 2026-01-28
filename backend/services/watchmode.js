const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

// Watchmode API key - you should set this in your .env file
const WATCHMODE_API_KEY = process.env.WATCHMODE_API_KEY || 'your_watchmode_api_key_here';

// Get streaming sources for a title by IMDB ID
router.get('/sources/:imdbId', async (req, res) => {
  try {
    const { imdbId } = req.params;

    // Mock streaming sources data
    // In production, you would call the Watchmode API
    const mockSources = [
      {
        source_id: 1,
        name: "Netflix",
        type: "subscription",
        region: "US",
        web_url: "https://netflix.com",
        price: null,
        format: "HD"
      },
      {
        source_id: 2,
        name: "Amazon Prime Video",
        type: "subscription",
        region: "US",
        web_url: "https://amazon.com/primevideo",
        price: null,
        format: "4K"
      },
      {
        source_id: 3,
        name: "Hulu",
        type: "subscription",
        region: "US",
        web_url: "https://hulu.com",
        price: null,
        format: "HD"
      }
    ];

    res.json(mockSources);
  } catch (error) {
    console.error('Error fetching streaming sources:', error);
    res.status(500).json({ error: 'Failed to fetch streaming sources' });
  }
});

// Get title details by IMDB ID
router.get('/title/:imdbId', async (req, res) => {
  try {
    const { imdbId } = req.params;

    // Mock title data
    const mockTitle = {
      id: 12345,
      title: "Mock Movie Title",
      original_title: "Mock Movie Title",
      plot_overview: "This is a mock plot overview for the movie.",
      type: "movie",
      runtime_minutes: 120,
      year: 2023,
      end_year: null,
      release_date: "2023-01-01",
      imdb_id: imdbId,
      tmdb_id: 12345,
      genres: [1, 2, 3],
      genre_names: ["Action", "Drama", "Thriller"],
      user_rating: 8.5,
      critic_score: 85,
      us_rating: "R",
      poster: "https://via.placeholder.com/300x450/1a1d23/ffffff?text=Movie+Poster",
      backdrop: "https://via.placeholder.com/1920x1080/1a1d23/ffffff?text=Movie+Backdrop",
      original_language: "en",
      similar_titles: [12346, 12347],
      networks: null,
      trailer: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
      trailer_thumbnail: "https://via.placeholder.com/480x360/1a1d23/ffffff?text=Trailer+Thumbnail"
    };

    res.json(mockTitle);
  } catch (error) {
    console.error('Error fetching title details:', error);
    res.status(500).json({ error: 'Failed to fetch title details' });
  }
});

module.exports = router;