import { motion } from 'framer-motion'
import { FadeInUp } from './animations'

export const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <section id="contact" className="min-h-screen py-20 px-6 relative">
      {/* Animated background */}
      <motion.div
        className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
        animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="max-w-3xl mx-auto relative z-10">
        <FadeInUp>
          <h2 className="text-4xl font-bold mb-4 text-center">
            Let's Work <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-center text-slate-400 mb-12">Have a project in mind? Let's connect and create something amazing!</p>
        </FadeInUp>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="space-y-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-xl rounded-2xl p-8 shadow-2xl"
        >
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            <label className="block text-sm font-semibold mb-2 text-slate-300">Name</label>
            <motion.input
              type="text"
              required
              whileFocus={{ scale: 1.01, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
              className="w-full px-4 py-3 bg-slate-700/30 rounded-lg border border-slate-600 focus:border-accent focus:outline-none transition text-slate-100 placeholder-slate-500"
              placeholder="Your name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.15 }}
          >
            <label className="block text-sm font-semibold mb-2 text-slate-300">Email</label>
            <motion.input
              type="email"
              required
              whileFocus={{ scale: 1.01, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
              className="w-full px-4 py-3 bg-slate-700/30 rounded-lg border border-slate-600 focus:border-accent focus:outline-none transition text-slate-100 placeholder-slate-500"
              placeholder="your@email.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <label className="block text-sm font-semibold mb-2 text-slate-300">Message</label>
            <motion.textarea
              required
              rows="5"
              whileFocus={{ scale: 1.01, boxShadow: '0 0 20px rgba(59, 130, 246, 0.3)' }}
              className="w-full px-4 py-3 bg-slate-700/30 rounded-lg border border-slate-600 focus:border-accent focus:outline-none transition text-slate-100 placeholder-slate-500 resize-none"
              placeholder="Your message..."
            />
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.6)' }}
            whileTap={{ scale: 0.95 }}
            className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg font-bold hover:from-blue-700 hover:to-blue-800 transition shadow-lg text-lg"
          >
            Send Message
          </motion.button>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-center gap-8 mt-12 flex-wrap"
        >
          {[
            { name: '📧 Email', url: 'https://mail.google.com/mail/?view=cm&fs=1&to=charithayaddanapalli3@gmail.com' },
            { name: '💼 LinkedIn', url: 'https://linkedin.com/in/charitha-yaddanapalli' },
            { name: '🐙 GitHub', url: 'https://github.com/charithayaddanapalli3-ui' }
          ].map((social, idx) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + idx * 0.1 }}
              whileHover={{ scale: 1.1, y: -5 }}
              className="px-6 py-3 bg-slate-700/50 border border-slate-600 rounded-lg hover:border-accent transition text-slate-300 hover:text-accent font-semibold flex items-center gap-2"
            >
              {social.name}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
