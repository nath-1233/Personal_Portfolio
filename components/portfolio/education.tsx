import { GraduationCap } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Card, CardContent } from '@/components/ui/card'

export function Education() {
  return (
    <section id="education" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading eyebrow="Education" title="Academic background" />
        </Reveal>

        <Reveal className="mt-12">
          <Card className="transition-colors hover:border-primary/40">
            <CardContent className="flex flex-col gap-5 p-6 sm:flex-row sm:items-start sm:p-8">
              <span className="grid size-12 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="size-6" />
              </span>
              <div>
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="text-xl font-semibold">
                    Lovely Professional University (LPU)
                  </h3>
                  <span className="rounded-md bg-accent px-2.5 py-0.5 font-mono text-xs text-accent-foreground">
                    Ongoing
                  </span>
                </div>
                <p className="mt-1 font-mono text-sm text-primary">
                  B.Tech Engineering
                </p>
                <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                  Currently pursuing my B.Tech Engineering degree while
                  developing knowledge and practical skills in software
                  engineering, programming, databases, software testing,
                  automation, and emerging technologies.
                </p>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </section>
  )
}
