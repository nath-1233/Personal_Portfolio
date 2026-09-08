import { GraduationCap, Lightbulb, ShieldCheck, Target } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { PROFILE } from '@/lib/site-data'

const highlights = [
  {
    icon: GraduationCap,
    title: 'Student at LPU',
    detail: 'Pursuing B.Tech Engineering at Lovely Professional University.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality-Focused',
    detail: 'Interested in building reliable, high-quality software.',
  },
  {
    icon: Lightbulb,
    title: 'Always Learning',
    detail: 'Continuously exploring new technologies and tools.',
  },
  {
    icon: Target,
    title: 'Practical Projects',
    detail: 'Applying skills through hands-on, real-world work.',
  },
]

export function About() {
  return (
    <section id="about" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="About Me"
            title="A student building skills in testing, automation, and engineering"
          />
        </Reveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="space-y-4 text-pretty leading-relaxed text-muted-foreground">
              <p>
                I am <strong className="text-foreground">{PROFILE.name}</strong>
                , a B.Tech Engineering student at{' '}
                <strong className="text-foreground">
                  {PROFILE.university}
                </strong>
                . My main interests are software testing, quality assurance,
                and automation, alongside programming and emerging
                technologies.
              </p>
              <p>
                I focus on continuous learning and practical projects, whether
                that means writing test cases, reporting bugs, automating
                repetitive tasks, or exploring cloud platforms like Microsoft
                Azure. I am genuinely curious about how software works and how
                to make it more reliable.
              </p>
              <p>
                I see myself as someone who is developing skills and gaining
                real experience one project at a time, with a strong interest
                in delivering dependable, high-quality software.
              </p>
            </div>

            <dl className="mt-8 grid grid-cols-2 gap-4 font-mono text-sm">
              <div className="rounded-lg border border-border bg-card p-4">
                <dt className="text-muted-foreground">Degree</dt>
                <dd className="mt-1 font-medium">{PROFILE.degree}</dd>
              </div>
              <div className="rounded-lg border border-border bg-card p-4">
                <dt className="text-muted-foreground">Focus</dt>
                <dd className="mt-1 font-medium">QA & Automation</dd>
              </div>
            </dl>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-2">
            {highlights.map((item, index) => (
              <Reveal key={item.title} delay={index * 80}>
                <Card className="h-full transition-colors hover:border-primary/40">
                  <CardContent className="flex h-full flex-col gap-3 p-5">
                    <span className="grid size-10 place-items-center rounded-md bg-accent text-accent-foreground">
                      <item.icon className="size-5" />
                    </span>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {item.detail}
                    </p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
