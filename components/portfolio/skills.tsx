import { Bot, Code2, Cpu, TestTube2 } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { SKILL_GROUPS } from '@/lib/site-data'

const icons = [TestTube2, Bot, Code2, Cpu]

export function Skills() {
  return (
    <section id="skills" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Technical Skills"
            title="Tools and techniques I'm learning and applying"
            description="A growing toolkit across testing, automation, programming, and modern technology."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {SKILL_GROUPS.map((group, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Reveal key={group.title} delay={index * 80}>
                <Card className="h-full transition-colors hover:border-primary/40">
                  <CardHeader>
                    <div className="flex items-center gap-3">
                      <span className="grid size-10 place-items-center rounded-md bg-primary/10 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <h3 className="font-semibold">{group.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {group.description}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-wrap gap-2">
                      {group.skills.map((skill) => (
                        <li
                          key={skill}
                          className="rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
