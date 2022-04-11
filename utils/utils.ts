import { MsgInfo } from '@/common/interface'
import dayjs from 'dayjs'
import zh from 'dayjs/locale/zh-cn'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

export const formatDate = (date: string) => {
  if (dayjs(date).isBefore(dayjs().subtract(7, 'days'))) {
    return dayjs(date).format('YYYY-MM-DD HH:mm:ss')
  } else {
    return dayjs(date).locale(zh).from(dayjs())
  }
}

export const toTree = (items: MsgInfo[]) => {
  const result = []
  const map = new Map()
  for (const item of items) {
    map.set(item._id, { ...item, children: [] })
  }
  for (const item of items) {
    const id = item._id
    const pid = item.pid
    if (map.get(pid)) {
      map.get(pid).children.push(map.get(id))
    } else {
      result.push(map.get(id))
    }
  }
  return result
}


const getElementY = (elem: string) =>
  window.scrollY +
  (document.querySelector(elem) as Element).getBoundingClientRect().top

export const scrollToElement = (
  elem: string,
  duration: number,
  offset: number
) => {
  const startY = window.scrollY
  const elementY = getElementY(elem)

  // 需要滚动的距离
  const diff = elementY - startY + offset

  if (!diff) return
  const easing = (t: number) =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1
  let start: number
  window.requestAnimationFrame(function step(timestamp: number) {
    if (!start) start = timestamp
    const time = timestamp - start
    let percent = Math.min(time / duration, 1)
    percent = easing(percent)
    window.scroll(0, startY + diff * percent)

    if (time < duration) {
      window.requestAnimationFrame(step)
    }
  })
}
