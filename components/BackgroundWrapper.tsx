'use client'

import { Sphere } from '@react-three/drei'
// eslint-disable-next-line ts/ban-ts-comment
// @ts-expect-error
import { Canvas, useFrame } from '@react-three/fiber'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import React, { useRef } from 'react'
import Cursor from './Cursor'
import { pointsInner, pointsOuter } from './utils'

const ScrollTopAndComment = dynamic(() => import('./ScrollTopAndComment'), { ssr: false })

const PointCircle = React.memo(() => {
  const ref = useRef<any>(null)

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05
    }
  })

  return (
  // eslint-disable-next-line ts/ban-ts-comment
  // @ts-expect-error
    <group ref={ref}>
      {pointsInner.map(point => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map(point => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {/* eslint-disable-next-line ts/ban-ts-comment */}
      {/* @ts-expect-error */}
    </group>
  )
})

const Circle = React.memo(() => {
  return (
    <Canvas
      camera={{
        position: [10, -7.5, -5],
      }}
      style={{ height: '100vh' }}
      className="!absolute inset-0 bg-white dark:bg-slate-900"
    >
      <PointCircle />
    </Canvas>
  )
})

function Point({ position, color }) {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      {/* eslint-disable-next-line ts/ban-ts-comment */}
      {/* @ts-expect-error */}
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  )
}

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen">
      <Cursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, ease: 'easeInOut' }}
        // eslint-disable-next-line ts/ban-ts-comment
        // @ts-expect-error
        className="!absolute inset-0"
      >
        <Circle />
      </motion.div>
      <main id="scroll-container" className="h-screen w-screen overflow-auto rounded-lg shadow-lg backdrop-blur-md">
        {children}
      </main>
      <ScrollTopAndComment />
    </div>
  )
}
