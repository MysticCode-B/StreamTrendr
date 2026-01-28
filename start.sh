#!/bin/bash

# Start both backend and frontend servers
echo "🚀 Starting StreamTrendr..."

# Start backend in background
echo "📡 Starting backend server..."
cd backend && npm run dev &
BACKEND_PID=$!

# Wait a moment for backend to start
sleep 3

# Start frontend
echo "💻 Starting frontend server..."
cd ../frontend && npm run dev &
FRONTEND_PID=$!

echo ""
echo "✅ Both servers are starting up!"
echo "📡 Backend API: http://localhost:3001"
echo "💻 Frontend App: http://localhost:5173 or http://localhost:5174"
echo ""
echo "Press Ctrl+C to stop both servers"

# Wait for user to stop
trap "echo '🛑 Stopping servers...'; kill $BACKEND_PID $FRONTEND_PID; exit" INT
wait