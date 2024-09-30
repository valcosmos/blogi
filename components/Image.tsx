import type { ImageProps } from 'next/image'
// import process from 'node:process'
import NextImage from 'next/image'

const basePath = process.env.BASE_PATH

function Image({ src, ...rest }: ImageProps) {
  return <NextImage src={`${basePath || ''}${src}`} {...rest} />
}

export default Image
