import {
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Mail,
  Mastodon,
  Threads,
  Twitter,
  X,
  Youtube,
} from './icons'

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  twitter: Twitter,
  x: X,
  mastodon: Mastodon,
  threads: Threads,
  instagram: Instagram,
}

interface SocialIconProps {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

function SocialIcon({ kind, href, size = 8 }: SocialIconProps) {
  if (
    !href
    || (kind === 'mail' && !/^mailto:[\w.%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  ) {
    return null
  }

  const SocialSvg = components[kind]

  const classSize = `w-${size} w-${size}`
  return (
    <a
      className="text-sm text-gray-500 transition hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`fill-current text-gray-700 hover:text-primary-500 dark:text-gray-200 dark:hover:text-primary-400 ${classSize}`}
      />
    </a>
  )
}

export default SocialIcon
