'use client'

import { motion } from 'motion/react'
import React, { useEffect, useState } from 'react'

export default function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)

    return () => {
      window.removeEventListener('mousemove', mouseMove)
    }
  }, [])

  return (
    <motion.div
      className="fixed z-[999] size-12 rounded-full border border-black dark:border-white"
      animate={{ x: position.x + 10, y: position.y + 10 }}
    >
    </motion.div>
  )
}
