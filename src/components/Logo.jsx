import { motion } from 'framer-motion'

const Logo = ({ className = "", size = "default" }) => {
  const sizes = {
    small: { width: 120, height: 40, fontSize: "text-lg" },
    default: { width: 180, height: 60, fontSize: "text-2xl" },
    large: { width: 240, height: 80, fontSize: "text-3xl" }
  }

  const currentSize = sizes[size] || sizes.default

  return (
    <motion.div 
      className={`flex items-center gap-2 ${className}`}
      whileHover={{ scale: 1.02 }}
    >
      {/* Logo Icon - Stylized Wave/Hub */}
      <svg 
        width={currentSize.height} 
        height={currentSize.height} 
        viewBox="0 0 60 60" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle representing hub */}
        <motion.circle
          cx="30"
          cy="30"
          r="28"
          stroke="url(#gradient1)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, rotate: -90 }}
          animate={{ pathLength: 1, rotate: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
        
        {/* Pacific wave design */}
        <motion.path
          d="M15 30 Q20 20, 30 25 T45 30"
          stroke="url(#gradient2)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        />
        
        <motion.path
          d="M15 38 Q20 28, 30 33 T45 38"
          stroke="url(#gradient2)"
          strokeWidth="3"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />

        {/* Center hub point */}
        <motion.circle
          cx="30"
          cy="30"
          r="4"
          fill="url(#gradient3)"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        />

        {/* Spokes */}
        {[0, 60, 120, 180, 240, 300].map((angle, i) => {
          const rad = (angle * Math.PI) / 180
          const x2 = 30 + 20 * Math.cos(rad)
          const y2 = 30 + 20 * Math.sin(rad)
          return (
            <motion.line
              key={angle}
              x1="30"
              y1="30"
              x2={x2}
              y2={y2}
              stroke="url(#gradient1)"
              strokeWidth="1.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.4, delay: 0.9 + i * 0.05 }}
            />
          )
        })}

        {/* Gradients */}
        <defs>
          <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0284c7" />
            <stop offset="50%" stopColor="#0ea5e9" />
            <stop offset="100%" stopColor="#06b6d4" />
          </linearGradient>
          <radialGradient id="gradient3">
            <stop offset="0%" stopColor="#38bdf8" />
            <stop offset="100%" stopColor="#0284c7" />
          </radialGradient>
        </defs>
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-tight">
        <span className={`font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent ${currentSize.fontSize}`}>
          onepacific
        </span>
        <span className={`font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent ${currentSize.fontSize} -mt-1`}>
          hub
        </span>
      </div>
    </motion.div>
  )
}

export default Logo
