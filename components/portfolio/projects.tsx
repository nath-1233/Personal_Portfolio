import { ArrowUpRight } from 'lucide-react'
import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { PROJECTS } from '@/lib/site-data'

export function Projects() {
  const featured = PROJECTS.find((p) => p.featured)
  const others = PROJECTS.filter((p) => !p.featured)

  return (
    <section id="projects" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Projects"
            title="Selected work and hands-on experiments"
            description="Projects where I apply testing, automation, and engineering concepts to real ideas."
          />
        </Reveal>

        {featured ? (
          <Reveal className="mt-12">
            <Card className="group overflow-hidden p-0 transition-colors hover:border-primary/40">
              <div className="grid lg:grid-cols-2">
                <div className="relative aspect-video overflow-hidden lg:aspect-auto">
                  <Image
                    src={featured.image || '/placeholder.svg'}
                    alt={`${featured.title} project preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority
                  />
                </div>
                <CardContent className="flex flex-col justify-center gap-4 p-6 sm:p-8">
                  <Badge className="w-fit font-mono">Featured Project</Badge>
                  <div>
                    <h3 className="text-2xl font-semibold tracking-tight">
                      {featured.title}
                    </h3>
                    <p className="mt-1 font-mono text-sm text-primary">
                      {featured.subtitle}
                    </p>
                  </div>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {featured.description}
                  </p>
                  <ul className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  <Button
                    render={<a href={featured.link} />}
                    nativeButton={false}
                    className="mt-2 w-fit"
                  >
                    View Project
                    <ArrowUpRight className="size-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </Reveal>
        ) : null}

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {others.map((project, index) => (
            <Reveal key={project.id} delay={index * 100}>
              <Card className="group flex h-full flex-col overflow-hidden p-0 transition-colors hover:border-primary/40">
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image || '/placeholder.svg'}
                    alt={`${project.title} preview`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 768px) 50vw, 100vw"
                  />
                </div>
                <CardContent className="flex flex-1 flex-col gap-3 p-6">
                  <div>
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="mt-1 font-mono text-sm text-primary">
                      {project.subtitle}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <ul className="mt-auto flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
