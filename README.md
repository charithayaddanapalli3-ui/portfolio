<<<<<<< HEAD
# My Animated Portfolio

A full-stack portfolio website with beautiful animations and a backend API.

## Project Structure

```
portfolio/
├── frontend/          # React + Vite application
│   ├── src/
│   │   ├── components/
│   │   │   ├── animations.jsx
│   │   │   ├── common.jsx
│   │   │   ├── sections.jsx
│   │   │   └── contact.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── backend/           # Node.js/Express API
│   ├── server.js
│   ├── .env.example
│   ├── package.json
│   └── README.md
│
└── README.md
```

## Features

### Frontend
- ✨ Smooth animations with Framer Motion
- 📱 Fully responsive design
- 🎨 Modern UI with Tailwind CSS
- ⚡ Fast development with Vite
- 🔄 Sections: Hero, About, Projects, Contact
- 📊 Interactive components

### Backend
- 🚀 Express.js REST API
- 📝 Contact form handling
- 🔌 CORS enabled
- 📦 Project management endpoints
- 🛡️ Error handling

## Quick Start

### Prerequisites
- Node.js (v16+)
- npm or yarn

### Setup Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:3000`

### Setup Backend

```bash
cd backend
npm install
npm run dev
```

Backend runs on `http://localhost:5000`

## Technologies Used

**Frontend:**
- React 18
- Vite
- Framer Motion
- Tailwind CSS
- React Router

**Backend:**
- Node.js
- Express.js
- CORS
- dotenv

## Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

### Backend
- `npm run dev` - Start with auto-reload
- `npm start` - Start production server

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/portfolio` - Portfolio info
- `GET /api/projects` - Get all projects
- `GET /api/skills` - Get skills
- `POST /api/contact` - Submit contact form

## Customization

1. **Update Personal Info**: Edit `server.js` and component texts
2. **Add Projects**: Modify the projects array in `server.js`
3. **Customize Colors**: Update `tailwind.config.js` and `index.css`
4. **Add Database**: Connect MongoDB in `server.js`

## Deployment

### Frontend (Vercel/Netlify)
```bash
npm run build
# Deploy dist folder
```

### Backend (Heroku/Railway)
```bash
npm start
```

## License

MIT

## Contact

Customize the contact section in the footer with your social links and email.
=======
# Frontend Portfolio

Animated portfolio website built with React, Vite, and Framer Motion.

## Features
- Beautiful animations with Framer Motion
- Responsive design with Tailwind CSS
- Fast development with Vite
- Multiple sections: Hero, About, Projects, Contact

## Installation

```bash
cd frontend
npm install
```

## Development

```bash
npm run dev
```

Visit `http://localhost:3000`

## Build

```bash
npm run build
```
>>>>>>> 21a3431d0fbae437ff72e346a0874207bf714dd8
