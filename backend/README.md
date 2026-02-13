# Backend API

Express.js backend for portfolio website with REST API endpoints.

## Features
- REST API for portfolio data
- Contact form handling
- CORS enabled for frontend communication
- Error handling and validation

## Installation

```bash
cd backend
npm install
```

## Development

```bash
npm run dev
```

Server will run on `http://localhost:5000`

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/portfolio` - Portfolio information
- `GET /api/projects` - List of projects
- `GET /api/skills` - Skills categorized by type
- `POST /api/contact` - Submit contact form

## Environment Variables

Create a `.env` file in the backend directory:

```
PORT=5000
NODE_ENV=development
```

## Starting Production

```bash
npm start
```
