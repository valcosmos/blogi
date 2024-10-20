'use client'

import type { ReactNode } from 'react'
import { motion, useAnimation, useInView } from 'framer-motion'
import React, { useEffect, useRef } from 'react'

interface RevealProps {
  children: ReactNode
  width?: string
}

export default function Reveal({ children, width = '100%' }: RevealProps) {
  const ref = useRef(null)

  const isInView = useInView(ref, { once: true })

  const mainControls = useAnimation()

  useEffect(() => {
    if (isInView) {
      mainControls.start('visible')
    }
  }, [isInView, mainControls])

  return (
    <div ref={ref} style={{ position: 'relative', width, overflow: 'hidden' }}>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>

    </div>
  )
}
