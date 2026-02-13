import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import path from 'path'
import { fileURLToPath } from 'url'

// Load environment variables
dotenv.config()

// Initialize Express app
const app = express()
const PORT = process.env.PORT || 5000

// Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running', timestamp: new Date() })
})

// Portfolio routes
app.get('/api/portfolio', (req, res) => {
  res.json({
    name: 'Charitha Yaddanapalli',
    title: 'B.Tech CSE Student | Full Stack Developer | Python | Java',
    bio: 'B.Tech Computer Science and Engineering student at Tirumala Engineering College, currently in third year. Passionate about technology and innovation with strong foundation in C, Java, and Python. Experienced in web development, desktop applications, and REST API development. Driven by the goal of building innovative, reliable, and result-oriented solutions that contribute to organizational growth and technological advancement.',
    education: {
      degree: 'B.Tech in Computer Science and Engineering',
      college: 'Tirumala Engineering College',
      year: '3rd Year'
    },
    email: 'charithayaddanapalli3@gmail.com',
    phone: '7075909747',
    location: 'Narasaraopeta, Andhra Pradesh, India',
    github: 'https://github.com/charithayaddanapalli3-ui',
    linkedin: 'https://linkedin.com/in/charitha-yaddanapalli'
  })
})

// Projects endpoint
app.get('/api/projects', (req, res) => {
  const projects = [
    {
      id: 1,
      title: 'Sustainable EV Charging Network Monitoring System',
      description: 'Full-stack web application to monitor and visualize EV charging stations across Andhra Pradesh in real-time with interactive mapping and status tracking.',
      details: 'Developed a comprehensive system that displays city-wise EV charging station status (Available, Busy, Maintenance) using a modern card-based UI and interactive map. Implemented search functionality, status-based color indicators, and real-time data visualization. Demonstrates full-stack development expertise with modern web technologies.',
      duration: 'Dec 2025 – Present',
      tags: ['React.js', 'FastAPI', 'Leaflet.js', 'OpenStreetMap', 'Axios', 'REST API'],
      features: [
        'Interactive map using Leaflet & OpenStreetMap',
        'Real-time station status (Available / Busy / Maintenance)',
        'City and village-based search and filtering',
        'REST API backend using FastAPI',
        'Responsive React frontend with Axios'
      ],
      link: 'https://github.com',
      image: 'ev-charging.jpg'
    },
    {
      id: 2,
      title: 'Inventory Management App (JavaFX + Hibernate)',
      description: 'Desktop-based inventory management application with database persistence, ORM implementation, and modern GUI for product management.',
      details: 'Built a complete desktop application for inventory management with add and view product functionality. Implemented Object-Relational Mapping using Hibernate with MySQL database for persistent storage. Designed professional UI using JavaFX FXML.',
      duration: 'Jan 2026 – Feb 2026',
      tags: ['Java', 'JavaFX', 'Hibernate', 'MySQL', 'Maven', 'ORM'],
      features: [
        'Add and view products functionality',
        'MySQL database integration for data persistence',
        'ORM implementation using Hibernate',
        'Professional UI design with JavaFX FXML',
        'Maven build automation'
      ],
      link: 'https://github.com/charithayaddanapalli3-ui/inventoryApp-java',
      image: 'inventory-app.jpg'
    },
    {
      id: 3,
      title: 'Student Management System',
      description: 'Full-stack web application for managing student records, attendance, and grades with secure authentication and role-based access control.',
      tags: ['Java', 'Spring Boot', 'MySQL', 'JSP', 'Servlet'],
      link: 'https://github.com',
      image: 'project1.jpg'
    },
    {
      id: 4,
      title: 'Task Tracker Application',
      description: 'Responsive web application for task management with real-time updates, user authentication, and data persistence.',
      tags: ['React', 'Node.js', 'MongoDB', 'Express'],
      link: 'https://github.com',
      image: 'project3.jpg'
    }
  ]
  res.json(projects)
})

// Skills endpoint
app.get('/api/skills', (req, res) => {
  const skills = {
    languages: ['C', 'Java', 'Python', 'JavaScript', 'SQL'],
    frontend: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'Bootstrap', 'JavaFX'],
    backend: ['FastAPI', 'Node.js', 'Express', 'Django', 'Spring Boot', 'Servlet', 'JSP'],
    databases: ['MySQL', 'PostgreSQL', 'MongoDB'],
    tools: ['Git', 'GitHub', 'VS Code', 'Maven', 'Hibernate', 'Postman', 'Leaflet.js'],
    concepts: ['Data Structures', 'Algorithms', 'OOP', 'REST APIs', 'ORM', 'Real-time Data Visualization', 'Responsive Design']
  }
  res.json(skills)
})

// Contact form endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body

  // Validation
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // Here you would typically save to database or send email
  console.log('New contact message:', { name, email, message })

  res.json({
    success: true,
    message: 'Thank you for your message! I will get back to you soon.'
  })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
  console.log(`API available at http://localhost:${PORT}/api`)
})

export default app
