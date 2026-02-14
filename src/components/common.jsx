import { motion } from 'framer-motion'
import { FadeInUp } from './animations'
import { useState } from 'react'

export const Navbar = () => {
  const navItems = ['Home', 'About', 'Projects', 'Contact']
  const [activeItem, setActiveItem] = useState('Home')

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed w-full top-0 bg-gradient-to-r from-primary via-secondary to-primary/80 backdrop-blur-md z-50 border-b border-slate-700/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.h1
          className="text-2xl font-bold text-accent"
          whileHover={{ scale: 1.1, textShadow: '0 0 10px rgba(59, 130, 246, 0.8)' }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          Charitha
        </motion.h1>
        <div className="flex gap-8 hidden md:flex">
          {navItems.map((item, i) => (
            <motion.div
              key={item}
              onHoverStart={() => setActiveItem(item)}
              className="relative"
            >
              <motion.a
                href={`#${item.toLowerCase()}`}
                className={`text-slate-300 hover:text-accent transition font-medium ${
                  activeItem === item ? 'text-accent' : ''
                }`}
                whileHover={{ y: -3 }}
              >
                {item}
              </motion.a>
              {activeItem === item && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.nav>
  )
}

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-10 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-10 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"
        animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="text-center max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-500/10 border border-blue-500/30 rounded-full text-blue-400 text-sm font-semibold mb-6"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Welcome to my portfolio 👋
          </motion.span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold mb-6"
        >
          Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Charitha</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl md:text-2xl text-slate-400 mb-4 font-semibold"
        >
          Full Stack Developer & Tech Enthusiast
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl mx-auto"
        >
          3rd Year B.Tech CSE Student at Tirumala Engineering College. Building innovative web solutions with <span className="text-accent font-semibold">React</span>, 
          <span className="text-accent font-semibold"> FastAPI</span>, and <span className="text-accent font-semibold">Java</span>. 
          Passionate about real-time data visualization and scalable architecture.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex gap-4 justify-center flex-wrap mb-12"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition shadow-lg"
          >
            View My Work
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, borderColor: '#3b82f6' }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 border-2 border-slate-600 text-white rounded-lg font-semibold hover:border-blue-500 transition"
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Animated scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <div className="flex flex-col items-center gap-2">
            <p className="text-slate-400 text-sm">Scroll to explore</p>
            <motion.div className="w-6 h-10 border-2 border-blue-500 rounded-full flex justify-center p-2">
              <motion.div
                className="w-1 h-3 bg-blue-500 rounded-full"
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-r from-primary via-secondary to-primary border-t border-slate-700/50 py-12 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-5">
        <motion.div
          animate={{ backgroundPosition: ['0% 0%', '100% 100%'] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500 bg-[length:200%_200%]"
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-bold text-accent mb-4">Charitha Yaddanapalli</h3>
            <p className="text-slate-400 text-sm">B.Tech CSE | Full Stack Developer | Tech Enthusiast</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            <h4 className="font-semibold text-slate-300 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-slate-400 text-sm">
              <li><a href="#home" className="hover:text-accent transition">Home</a></li>
              <li><a href="#about" className="hover:text-accent transition">About</a></li>
              <li><a href="#projects" className="hover:text-accent transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-accent transition">Contact</a></li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-slate-300 mb-4">Connect</h4>
            <div className="flex gap-4">
              {[
                { name: 'LinkedIn', url: 'https://linkedin.com/in/charitha-yaddanapalli' },
                { name: 'GitHub', url: 'https://github.com/charithayaddanapalli3-ui' },
                { name: 'Email', url: 'mailto:charithayaddanapalli3@gmail.com' }
              ].map(link => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  className="w-10 h-10 bg-blue-500/20 border border-blue-500/30 rounded-full flex items-center justify-center hover:bg-blue-500/40 transition text-accent"
                  title={link.name}
                >
                  {link.name[0]}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8"
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-center text-slate-400 text-sm"
        >
          <p>
            © 2026 Charitha Yaddanapalli. All rights reserved. | Built with <span className="text-accent">React</span>, <span className="text-accent">Framer Motion</span>, and ❤️
          </p>
        </motion.div>
      </div>
    </motion.footer>
  )
}
