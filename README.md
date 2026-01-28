# 🎬 StreamTrendr

A modern streaming platform that helps you discover movies and TV shows across all major streaming services. Built with React, Express.js, and Tailwind CSS.

## ✨ Features

- 🎯 **Discover Content** - Browse trending movies and TV shows
- 🔍 **Smart Search** - Find content across all platforms
- 📺 **Platform Integration** - See where content is available
- 🎨 **Modern UI** - Beautiful, responsive design
- 🚀 **Fast Performance** - Optimized React app with Vite

## 🏗️ Architecture

```
StreamTrendr/
├── frontend/          # React SPA
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── utils/         # Helper functions & API client
│   └── package.json
├── backend/           # Express.js API
│   ├── services/          # API route handlers
│   ├── utils/             # Backend utilities
│   └── index.js
└── start.sh          # Development startup script
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone & Install

```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install

# Return to root
cd ..
```

### 2. Environment Setup

#### Backend (.env)
```bash
# Copy and configure backend environment
cp backend/.env.example backend/.env
# Edit backend/.env with your API keys
```

#### Frontend (.env)
```bash
# Create frontend environment file
echo "REACT_APP_API_URL=http://localhost:3001/api" > frontend/.env
```

### 3. Get API Keys

1. **OMDB API** - Movie metadata: [omdbapi.com](http://www.omdbapi.com/)
2. **Watchmode API** - Streaming availability: [watchmode.com](https://api.watchmode.com/)

### 4. Start Development Servers

#### Option A: Start Both Together
```bash
# From project root
./start.sh
```

#### Option B: Start Separately

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
# API runs on http://localhost:3001
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
# App runs on http://localhost:5173
```

## 📡 API Endpoints

### Core Endpoints
- `GET /api/trending` - Trending content
- `GET /api/search?q=query` - Search content
- `GET /api/platforms` - Available platforms

### Metadata Service
- `GET /api/metadata/:imdbId` - Content details
- `GET /api/metadata/search/:title` - Search by title

### Streaming Availability
- `GET /api/watchmode/sources/:imdbId` - Where to watch
- `GET /api/watchmode/title/:imdbId` - Title details

## 🛠️ Development

### Frontend Scripts
```bash
cd frontend
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
```

### Backend Scripts
```bash
cd backend
npm run dev      # Start with nodemon
npm start        # Start production server
```

### Project Structure Details

#### Frontend (`/frontend`)
```
src/
├── components/        # UI components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProviderBar.jsx
│   ├── TrendingSection.jsx
│   └── Footer.jsx
├── pages/            # Page components
├── hooks/            # Custom hooks
│   └── useApi.js
├── utils/            # Utilities
│   ├── index.js      # Central exports
│   ├── api.js        # API client
│   ├── constants.js  # App constants
│   ├── helpers.js    # Helper functions
│   └── contentData.js # Static data
└── styles/           # Additional styles
```

#### Backend (`/backend`)
```
├── index.js          # Main server
├── services/         # Route handlers
│   ├── metadata.js   # Movie data API
│   └── watchmode.js  # Streaming API
├── utils/            # Backend utilities
├── .env              # Environment config
└── README.md         # Backend docs
```

## 🔧 Configuration

### Environment Variables

#### Backend (`.env`)
```bash
PORT=3001
OMDB_API_KEY=your_omdb_key
WATCHMODE_API_KEY=your_watchmode_key
```

#### Frontend (`.env`)
```bash
REACT_APP_API_URL=http://localhost:3001/api
```

## 🎨 Customization

### Theming
- Colors defined in `tailwind.config.js`
- Dark theme optimized for streaming

### Components
- Modular component architecture
- Easy to extend and customize

### API Integration
- Centralized API client in `utils/api.js`
- Custom hooks for data fetching
- Error handling and loading states

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy dist/ folder
```

### Backend (Heroku/Railway)
```bash
cd backend
npm start
# Configure environment variables
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

MIT License - feel free to use this project for learning and development!

## 🙏 Acknowledgments

- **OMDB API** for movie metadata
- **Watchmode API** for streaming availability
- **Tailwind CSS** for styling
- **React** ecosystem

---

**Happy streaming! 🎬**
