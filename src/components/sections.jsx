import { FadeInUp, ScaleIn } from './animations'
import { motion } from 'framer-motion'

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Sustainable EV Charging Network Monitoring System',
      description: 'Full-stack web application to monitor and visualize EV charging stations across Andhra Pradesh in real-time.',
      details: 'Interactive map with real-time station status, search functionality, and responsive design.',
      duration: 'Dec 2025 – Present',
      tags: ['React.js', 'FastAPI', 'Leaflet.js', 'OpenStreetMap', 'Axios'],
      color: 'from-green-600 to-blue-600'
    },
    {
      id: 2,
      title: 'Inventory Management App (JavaFX + Hibernate)',
      description: 'Desktop application for inventory management with MySQL database persistence and ORM implementation.',
      details: 'Product management with professional UI using JavaFX and Hibernate ORM.',
      duration: 'Jan 2026 – Feb 2026',
      tags: ['Java', 'JavaFX', 'Hibernate', 'MySQL', 'Maven'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      id: 3,
      title: 'Student Management System',
      description: 'Full-stack web application for managing student records, attendance, and grades.',
      tags: ['Java', 'Spring Boot', 'MySQL', 'JSP'],
      color: 'from-blue-600 to-cyan-600'
    }
  ]

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <h2 className="text-4xl font-bold mb-16 text-center">
            Featured <span className="text-accent">Projects</span>
          </h2>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScaleIn key={project.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className={`bg-gradient-to-br ${project.color} p-1 rounded-xl cursor-pointer`}
              >
                <div className="bg-secondary rounded-lg p-6 h-full">
                  <h3 className="text-lg font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-400 mb-4 text-sm">{project.description}</p>
                  {project.duration && (
                    <p className="text-accent text-xs mb-3 font-semibold">{project.duration}</p>
                  )}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2 py-1 bg-primary rounded-full text-xs text-accent">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </ScaleIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export const About = () => {
  const skills = [
    { category: 'Languages', items: ['C', 'Java', 'Python', 'JavaScript', 'SQL'] },
    { category: 'Frontend', items: ['React.js', 'HTML5', 'CSS3', 'Tailwind CSS', 'JavaFX'] },
    { category: 'Backend', items: ['FastAPI', 'Node.js', 'Express', 'Django', 'Spring Boot'] },
    { category: 'Tools', items: ['Git', 'Maven', 'Hibernate', 'MySQL', 'PostgreSQL'] }
  ]

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <FadeInUp>
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="text-accent">Me</span>
          </h2>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeInUp delay={0.1}>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-accent mb-2">Education</h3>
                <p className="text-lg text-slate-300">B.Tech in Computer Science and Engineering</p>
                <p className="text-slate-400">Tirumala Engineering College • 3rd Year</p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-accent mb-3">About Me</h3>
                <p className="text-base text-slate-300 leading-relaxed mb-4">
                  I'm a passionate third-year B.Tech CSE student driven by a strong passion for technology and innovation. 
                  I have built a solid foundation in programming languages including C, Java, and Python with practical skills in web development.
                </p>
                <p className="text-base text-slate-300 leading-relaxed mb-4">
                  My experience encompasses HTML, CSS, JavaScript for frontend development, SQL and data structures/algorithms for backend logic. 
                  I possess a professional mindset that values clarity, discipline, and continuous improvement.
                </p>
                <p className="text-base text-slate-300 leading-relaxed">
                  My goal is to build a career where I can apply my technical knowledge to create innovative, reliable, and result-oriented solutions 
                  that contribute to organizational growth and technological advancement.
                </p>
              </div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-secondary rounded-lg p-4 hover:bg-secondary/80 transition"
                >
                  <h3 className="font-bold text-accent mb-3 text-sm">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map(item => (
                      <li key={item} className="text-slate-400 text-xs">• {item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </FadeInUp>
        </div>
      </div>
    </section>
  )
}
