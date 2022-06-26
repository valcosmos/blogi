import React from 'react'

import Particles from 'react-tsparticles'

import { loadFull } from 'tsparticles'

import style from '@/components/banner/banner.module.scss'

const Banner = () => {
  const particlesInit = async (main: any) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(main)
  }
  const particlesLoaded = (container: any): Promise<void> => {
    return new Promise(resolve=>resolve())
  }

  const options: any = {
    // background: {
    //   color: {
    //     value: '#0d47a1'
    //   }
    // },
    fpsLimit: 120,
    fullScreen: {
      enable: false
    },
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: 'push'
        },
        onHover: {
          enable: false,
          mode: 'repulse'
        },
        resize: true
      },
      modes: {
        bubble: {
          distance: 400,
          duration: 2,
          opacity: 0.8,
          size: 40
        },
        push: {
          quantity: 4
        },
        repulse: {
          distance: 200,
          duration: 0.4
        }
      }
    },
    particles: {
      color: {
        value: '#ffffff'
      },
      links: {
        color: '#ffffff',
        distance: 150,
        enable: true,
        opacity: 0.5,
        width: 1
      },
      collisions: {
        enable: true
      },
      move: {
        direction: 'none',
        enable: true,
        outMode: 'bounce',
        random: false,
        speed: 4,
        straight: false
      },
      number: {
        density: {
          enable: true,
          area: 800
        },
        value: 80
      },
      opacity: {
        value: 0.5
      },
      shape: {
        type: 'circle'
      },
      size: {
        random: false,
        value: 2
      }
    },
    detectRetina: true
  }

  return (
    <Particles
      id="tsparticles"
      options={options}
      init={particlesInit}
      loaded={particlesLoaded}
    />
  )
}

export default Banner
