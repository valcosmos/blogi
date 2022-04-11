import React from 'react'

import Particles from 'react-tsparticles'
import style from '@/components/banner/banner.module.scss'

const Banner = () => {
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
          enable: true,
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

  return <Particles id="tsparticles" options={options} />
}

export default Banner
