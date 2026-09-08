import { Award, ExternalLink } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Card, CardContent } from '@/components/ui/card'
import { CERTIFICATIONS } from '@/lib/site-data'

export function Certifications() {
  return (
    <section
      id="certifications"
      className="border-b border-border py-20 sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            eyebrow="Certifications & Training"
            title="Courses and training I've completed"
            description="Certifications that support my learning in cloud, testing, and automation."
          />
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {CERTIFICATIONS.map((cert, index) => (
            <Reveal key={cert.name} delay={index * 80}>
              <Card className="group h-full transition-colors hover:border-primary/40">
                <CardContent className="flex items-start gap-4 p-5">
                  <span className="grid size-11 shrink-0 place-items-center rounded-md bg-primary/10 text-primary">
                    <Award className="size-5" />
                  </span>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-medium">{cert.name}</h3>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {cert.org}
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-mono text-xs text-muted-foreground">
                        {cert.date}
                      </span>
                      <a
                        href={cert.link}
                        className="inline-flex items-center gap-1 font-mono text-xs text-primary transition-opacity hover:opacity-80"
                      >
                        Verify
                        <ExternalLink className="size-3" />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
