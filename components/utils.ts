const MIN_RADIUS = 7.5
const MAX_RADIUS = 15
const DEPTH = 2
// const LEFT_COLOR = 'fff'
// const RIGHT_COLOR = 'fff'
const NUM_POINTS = 2500

/**
 * --- Credit ---
 * https://stackoverflow.com/questions/16360533/calculate-color-hex-having-2-colors-and-percent-position
 */
// const LIGHT_COLOR = '8EACCD' // A softer, muted blue color
// const DARK_COLOR = '2C3E50' // A deeper, more subdued blue color

function getGradientStop(_ratio: number) {
  // For outer ring numbers potentially past max radius,
  // just clamp to 0
  // ratio = ratio > 1 ? 1 : ratio < 0 ? 0 : ratio

  // const lightColor = LIGHT_COLOR.match(/.{1,2}/g)
  // const darkColor = DARK_COLOR.match(/.{1,2}/g)

  // if (!lightColor || !darkColor) {
  //   throw new Error('Invalid color format')
  // }

  // const c0 = lightColor.map(
  //   oct => Number.parseInt(oct, 16) * (1 - ratio),
  // )
  // const c1 = darkColor.map(
  //   oct => Number.parseInt(oct, 16) * ratio,
  // )
  // const ci = [0, 1, 2].map(i => Math.min(Math.round(c0[i] + c1[i]), 255))
  // const color = ci
  //   .reduce((a, v) => (a << 8) + v, 0)
  //   .toString(16)
  //   .padStart(6, '0')

  return `#eee`
}

function calculateColor(x) {
  const maxDiff = MAX_RADIUS * 2
  const distance = x + MAX_RADIUS

  const ratio = distance / maxDiff

  const stop = getGradientStop(ratio)
  return stop
}

function randomFromInterval(min, max) {
  return Math.random() * (max - min) + min
}

export const pointsInner = Array.from(
  { length: NUM_POINTS },
  (v, k) => k + 1,
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS, MAX_RADIUS)
  const randomAngle = Math.random() * Math.PI * 2

  const x = Math.cos(randomAngle) * randomRadius
  const y = Math.sin(randomAngle) * randomRadius
  const z = randomFromInterval(-DEPTH, DEPTH)

  const color = calculateColor(x)

  return {
    idx: num,
    position: [x, y, z],
    color,
  }
})

export const pointsOuter = Array.from(
  { length: NUM_POINTS / 4 },
  (v, k) => k + 1,
).map((num) => {
  const randomRadius = randomFromInterval(MIN_RADIUS / 2, MAX_RADIUS * 2)
  const angle = Math.random() * Math.PI * 2

  const x = Math.cos(angle) * randomRadius
  const y = Math.sin(angle) * randomRadius
  const z = randomFromInterval(-DEPTH * 10, DEPTH * 10)

  const color = calculateColor(x)

  return {
    idx: num,
    position: [x, y, z],
    color,
  }
})
