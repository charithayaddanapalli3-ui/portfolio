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
    <section id="projects" className="min-h-screen py-20 px-6 relative">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
          animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInUp>
          <h2 className="text-4xl font-bold mb-4 text-center">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-center text-slate-400 mb-16 text-lg">Showcasing my recent work and technical expertise</p>
        </FadeInUp>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScaleIn key={project.id} delay={index * 0.15}>
              <motion.div
                whileHover={{ y: -15, transition: { duration: 0.2 } }}
                className={`group bg-gradient-to-br ${project.color} p-1 rounded-2xl cursor-pointer overflow-hidden`}
              >
                <motion.div
                  className="bg-secondary rounded-2xl p-6 h-full relative"
                  initial={{ backgroundColor: 'rgba(30, 41, 59, 1)' }}
                  whileHover={{ backgroundColor: 'rgba(30, 41, 59, 0.8)' }}
                >
                  {/* Shine effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 rounded-2xl"
                    animate={{ x: [-400, 400] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />

                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-bold text-white pr-4 line-clamp-2">{project.title}</h3>
                      <motion.div
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="text-2xl flex-shrink-0"
                      >
                        ✨
                      </motion.div>
                    </div>

                    <p className="text-slate-400 mb-3 text-sm line-clamp-2">{project.description}</p>

                    {project.duration && (
                      <motion.p
                        className="text-accent text-xs mb-3 font-semibold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        {project.duration}
                      </motion.p>
                    )}

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, idx) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.05 }}
                          className="px-3 py-1 bg-blue-500/20 border border-blue-500/30 rounded-full text-xs text-blue-300 hover:bg-blue-500/30 transition"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="text-blue-400 hover:text-blue-300 text-sm font-semibold inline-flex items-center gap-2 transition"
                    >
                      View Project →
                    </motion.button>
                  </div>
                </motion.div>
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
    <section id="about" className="min-h-screen py-20 px-6 relative">
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-20 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <FadeInUp>
          <h2 className="text-4xl font-bold mb-12 text-center">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Me</span>
          </h2>
        </FadeInUp>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <FadeInUp delay={0.1}>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-6"
              >
                <h3 className="text-2xl font-bold text-accent mb-2">🎓 Education</h3>
                <p className="text-lg text-slate-300">B.Tech in Computer Science and Engineering</p>
                <p className="text-slate-400">Tirumala Engineering College • 3rd Year</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-accent mb-3">💼 About Me</h3>
                <div className="space-y-4">
                  <p className="text-base text-slate-300 leading-relaxed">
                    I'm a passionate third-year B.Tech CSE student driven by a strong passion for technology and innovation. 
                    I have built a solid foundation in programming languages including C, Java, and Python with practical skills in web development.
                  </p>
                  <p className="text-base text-slate-300 leading-relaxed">
                    My experience encompasses HTML, CSS, JavaScript for frontend development, SQL and data structures/algorithms for backend logic. 
                    I possess a professional mindset that values clarity, discipline, and continuous improvement.
                  </p>
                  <p className="text-base text-slate-300 leading-relaxed">
                    My goal is to build a career where I can apply my technical knowledge to create innovative, reliable, and result-oriented solutions.
                  </p>
                </div>
              </motion.div>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((skill, idx) => (
                <motion.div
                  key={skill.category}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, boxShadow: '0 20px 25px -5px rgba(59, 130, 246, 0.2)' }}
                  className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg p-4 hover:border-blue-500/40 transition cursor-pointer"
                >
                  <h3 className="font-bold text-accent mb-3 text-sm">{skill.category}</h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIdx) => (
                      <motion.li
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: itemIdx * 0.05 }}
                        className="text-slate-400 text-xs flex items-center gap-2"
                      >
                        <span className="w-1 h-1 bg-accent rounded-full" />
                        {item}
                      </motion.li>
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
