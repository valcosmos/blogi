'use client'

import { OrbitControls, Sphere } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { pointsInner, pointsOuter } from './utils'

const PointCircle = React.memo(() => {
  const ref = useRef<any>(null)

  useFrame(({ clock }) => {
    if (ref.current?.rotation) {
      ref.current.rotation.z = clock.getElapsedTime() * 0.05
    }
  })

  return (
    <group ref={ref}>
      {pointsInner.map(point => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
      {pointsOuter.map(point => (
        <Point key={point.idx} position={point.position} color={point.color} />
      ))}
    </group>
  )
})

function Point({ position, color }) {
  return (
    <Sphere position={position} args={[0.1, 10, 10]}>
      <meshStandardMaterial
        emissive={color}
        emissiveIntensity={0.5}
        roughness={0.5}
        color={color}
      />
    </Sphere>
  )
}

function ParticleRing({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen">
      <Canvas
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: '100vh' }}
        className="!absolute inset-0 bg-white dark:bg-slate-900 "
      >
        <OrbitControls maxDistance={20} minDistance={10} />
        <directionalLight />
        <pointLight position={[-30, 0, -30]} power={10.0} />
        <PointCircle />
      </Canvas>
      <main className="h-screen w-screen overflow-auto rounded-lg shadow-lg backdrop-blur-md">
        <div className="p-6">
          {children}
        </div>
      </main>
    </div>
  )
}

export default ParticleRing
