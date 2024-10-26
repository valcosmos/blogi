'use client'

import dynamic from 'next/dynamic'
import React from 'react'
import Cursor from './Cursor'

const Ring = dynamic(() => import('./Ring/Ring'), { ssr: false })

const ScrollTopAndComment = dynamic(() => import('./ScrollTopAndComment'), { ssr: false })

export default function BackgroundWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen w-screen">
      <Cursor />
      <Ring />
      <main id="scroll-container" className="h-screen w-screen overflow-auto rounded-lg shadow-lg backdrop-blur-md">
        {children}
      </main>
      <ScrollTopAndComment />
    </div>
  )
}
