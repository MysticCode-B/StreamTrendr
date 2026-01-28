const express = require('express');
const fetch = require('node-fetch');

const router = express.Router();

// OMDB API key - you should set this in your .env file
const OMDB_API_KEY = process.env.OMDB_API_KEY || 'your_omdb_api_key_here';

// Get movie/TV show metadata by IMDB ID
router.get('/:imdbId', async (req, res) => {
  try {
    const { imdbId } = req.params;

    // For now, return mock data
    // In production, you would call OMDB API or another metadata service
    const mockData = {
      imdbID: imdbId,
      Title: "Mock Movie Title",
      Year: "2023",
      Genre: "Action, Drama",
      Director: "Mock Director",
      Actors: "Mock Actor 1, Mock Actor 2",
      Plot: "This is a mock plot description for the movie.",
      Poster: "https://via.placeholder.com/300x450/1a1d23/ffffff?text=Movie+Poster",
      imdbRating: "8.5",
      Runtime: "120 min"
    };

    res.json(mockData);
  } catch (error) {
    console.error('Error fetching metadata:', error);
    res.status(500).json({ error: 'Failed to fetch metadata' });
  }
});

// Search by title
router.get('/search/:title', async (req, res) => {
  try {
    const { title } = req.params;

    // Mock search results
    const mockResults = [
      {
        imdbID: "tt0111161",
        Title: `${title} (Mock Result)`,
        Year: "1994",
        Type: "movie",
        Poster: "https://via.placeholder.com/300x450/1a1d23/ffffff?text=Search+Result"
      }
    ];

    res.json(mockResults);
  } catch (error) {
    console.error('Error searching metadata:', error);
    res.status(500).json({ error: 'Failed to search metadata' });
  }
});

module.exports = router;