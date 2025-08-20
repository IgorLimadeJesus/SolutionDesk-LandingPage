import { motion } from 'framer-motion'

export default function FeatureCard({ title, desc }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="p-6 rounded-2xl bg-[#0f0f10] border border-primary-900 shadow-neon"
    >
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{desc}</p>
    </motion.div>
  )
}
