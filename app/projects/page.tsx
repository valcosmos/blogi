import { genPageMetadata } from 'app/seo'
import Card from '@/components/Card'
import Reveal from '@/components/Reveal'
import projectsData from '@/data/projectsData'

export const metadata = genPageMetadata({ title: 'Projects' })

export default function Projects() {
  return (
    <Reveal>
      <div>
        <div className="space-y-2 pb-8 pt-6 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            lalala~
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            一些小项目，希望能帮你少写几行代码😊
          </p>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {projectsData.map(d => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
