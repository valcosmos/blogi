'use client'

import { Sphere } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'
import { pointsInner, pointsOuter } from '../utils'

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

export default function PointCircle() {
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
}
