'use client'

import { Canvas } from '@react-three/offscreen'
import { motion } from 'motion/react'
import React, { lazy, useEffect, useState } from 'react'

const PointCircle = lazy(() => import('./PointCircle'))

// const worker = new Worker(new URL('./worker.tsx', import.meta.url), {
//   type: 'module',
// })

// worker.onmessage = (event) => {
//   console.error('🍏 Message received from worker: ', event.data)
// }

// worker.onerror = (event) => {
//   if (event instanceof Event) {
//     console.error('🍎 Error message received from worker: ', event)
//     return event
//   }

//   console.error('🍎 Unexpected error: ', event)
//   throw event
// }

export default function Ring() {
  const [worker, setWorker] = useState<Worker>()

  useEffect(() => {
    const plusWorker = new Worker(new URL('./worker.tsx', import.meta.url), {
      type: 'module',
    })
    if (typeof Worker !== 'undefined' && plusWorker) {
      setWorker(plusWorker)
    }

    plusWorker.onmessage = (event) => {
      console.error('🍏 Message received from worker: ', event.data)
    }

    plusWorker.onerror = (event) => {
      if (event instanceof Event) {
        console.error('🍎 Error message received from worker: ', event)
        return event
      }

      console.error('🍎 Unexpected error: ', event)
      throw event
    }

    return () => {
      plusWorker.terminate()
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: 'easeInOut' }}
      // eslint-disable-next-line ts/ban-ts-comment
      // @ts-expect-error
      className="!absolute inset-0"
    >
      <Canvas
        worker={worker!}
        shadows
        fallback={<PointCircle />}
        camera={{
          position: [10, -7.5, -5],
        }}
        style={{ height: '100vh' }}
        className="!absolute inset-0 bg-white dark:bg-slate-900"
      />
    </motion.div>
  )
}
