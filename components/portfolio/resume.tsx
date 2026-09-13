'use client'

import { Download, FileText } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/portfolio/section-heading'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'

const resumeBlocks = [
  {
    heading: 'Profile Summary',
    body: 'B.Tech Engineering student at Lovely Professional University focused on software testing, quality assurance, and automation. Passionate about continuous learning and applying skills to practical projects to build reliable, high-quality software.',
  },
  {
    heading: 'Education',
    body: 'B.Tech Engineering — Lovely Professional University (Ongoing). Developing knowledge in software engineering, programming, databases, testing, automation, and emerging technologies.',
  },
  {
    heading: 'Technical Skills',
    body: 'Software Testing, Test Automation, Automation Anywhere, Java, Python, SQL, JUnit, Microsoft Azure, Git/GitHub, Database Management.',
  },
  {
    heading: 'Projects',
    body: 'AutoCharge Hub (Autonomous EV Wireless Charging & Service Station), Software Testing case studies, and Automation projects including a Calculator Bot and process automation.',
  },
  {
    heading: 'Training & Certifications',
    body: 'Microsoft Azure, Software Testing & QA, Automation Anywhere, and programming/database training.',
  },
]

export function Resume() {
  return (
    <section id="resume" className="border-b border-border py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-5">
          <Reveal className="lg:col-span-2">
            <SectionHeading
              eyebrow="Resume"
              title="A quick snapshot of my background"
              description="Download a copy or read the summary of my profile, education, skills, projects, and training."
            />
            <Button
              render={
                <a
                  href="/assets/Nathaniel-Miamba-CV.pdf"
                  download="Nathaniel-Miamba-CV.pdf"
                />
              }
              nativeButton={false}
              size="lg"
              className="mt-8"
            >
              <Download className="size-4" />
              Download Resume
            </Button>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={120}>
            <Card>
              <CardContent className="divide-y divide-border p-0">
                {resumeBlocks.map((block) => (
                  <div key={block.heading} className="p-6">
                    <div className="flex items-center gap-2">
                      <FileText className="size-4 text-primary" />
                      <h3 className="font-mono text-sm font-semibold uppercase tracking-wide">
                        {block.heading}
                      </h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {block.body}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
