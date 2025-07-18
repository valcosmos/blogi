import Image from './Image'
import Link from './Link'

function Card({ title, description, imgSrc, href }) {
  return (
    <div className="p-4 md:w-1/2 md:max-w-[544px]">
      <div
        className={`${imgSrc && 'h-full'} overflow-hidden rounded-md`}
      >
        {imgSrc
          && (href
            ? (
                <Link href={href} aria-label={`Link to ${title}`}>
                  <Image
                    alt={title}
                    src={imgSrc}
                    className="object-cover object-center md:h-36 lg:h-48"
                    width={544}
                    height={306}
                  />
                </Link>
              )
            : (
                <Image
                  alt={title}
                  src={imgSrc}
                  className="object-cover object-center md:h-36 lg:h-48"
                  width={544}
                  height={306}
                />
              ))}
        <div className="">
          <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
            {href
              ? (
                  <Link href={href} aria-label={`Link to ${title}`}>
                    {title}
                  </Link>
                )
              : (
                  title
                )}
          </h2>
          <p className="prose mb-3 max-w-none text-gray-500 dark:text-gray-400">{description}</p>
          {href && (
            <Link
              href={href}
              className="text-base font-medium leading-6 text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label={`Link to ${title}`}
            >
              Learn more &rarr;
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Card
